# #################################
# # Cloud Load Balancer - Backend #
# #################################
resource "google_compute_global_address" "backend_lb_ip" {
  name = "backend-load-balancer-ip"
}

resource "google_compute_url_map" "backend_url_map" {
  name = "backend-url-map"
  default_service = google_cloud_run_service.frontend.status[0].url
}

resource "google_compute_target_http_proxy" "backend_http_proxy" {
  name        = "backend-http-proxy"
  url_map     = google_compute_url_map.backend_url_map.self_link
}

resource "google_compute_forwarding_rule" "backend_http_forwarding_rule" {
  name       = "backend-http-forwarding-rule"
  target     = google_compute_target_http_proxy.backend_http_proxy.self_link
  port_range = "80"
}

# ##################################
# # Cloud Load Balancer - Frontend #
# ##################################
resource "google_compute_global_address" "frontend_lb_ip" {
  name = "frontend-load-balancer-ip"
}

resource "google_compute_url_map" "frontend_url_map" {
  name = "frontend-url-map"
  default_service = google_cloud_run_service.frontend.status[0].url
}

resource "google_compute_target_http_proxy" "frontend_http_proxy" {
  name        = "frontend-http-proxy"
  url_map     = google_compute_url_map.frontend_url_map.self_link
}

resource "google_compute_forwarding_rule" "frontend_http_forwarding_rule" {
  name       = "frontend-http-forwarding-rule"
  target     = google_compute_target_http_proxy.frontend_http_proxy.self_link
  port_range = "80"
}
