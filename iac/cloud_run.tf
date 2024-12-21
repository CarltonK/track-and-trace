# #############
# # Cloud Run #
# #############
resource "google_cloud_run_service" "frontend" {
  name     = "frontend-service"
  location = var.region

  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = "1"
        "autoscaling.knative.dev/maxScale" = "5"
      }
    }
    spec {
      containers {
        image = "gcr.io/${var.project_id}/frontend-image:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service" "backend" {
  name     = "backend-service"
  location = var.region

  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = "1"
        "autoscaling.knative.dev/maxScale" = "5"
      }
    }
    spec {
      containers {
        image = "gcr.io/${var.project_id}/backend-image:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# ###############
# # Service IAM #
# ###############

resource "google_cloud_run_service_iam_policy" "frontend" {
  location    = google_cloud_run_service.frontend.location
  service     = google_cloud_run_service.frontend.name
  policy_data = data.google_iam_policy.frontend.policy_data
}

resource "google_cloud_run_service_iam_policy" "backend" {
  location    = google_cloud_run_service.backend.location
  service     = google_cloud_run_service.backend.name
  policy_data = data.google_iam_policy.backend.policy_data
}

data "google_iam_policy" "frontend" {
  binding {
    role    = "roles/run.invoker"
    members = ["allUsers"]
  }
}

data "google_iam_policy" "backend" {
  binding {
    role    = "roles/run.invoker"
    members = ["allUsers"]
  }
}
