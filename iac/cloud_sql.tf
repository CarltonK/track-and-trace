# #############
# # Cloud SQL #
# #############
resource "google_sql_database_instance" "db_instance" {
  project             = var.project_id
  region              = var.region
  name                = var.db_instance_name
  database_version    = "POSTGRES_17"
  deletion_protection = true
  settings {
    tier = "db-f1-micro"
  }
}

resource "google_sql_user" "default" {
  name     = var.db_user
  instance = google_sql_database_instance.db_instance.name
  password = var.db_password
}

resource "google_sql_database" "default" {
  name     = "mydatabase"
  instance = google_sql_database_instance.db_instance.name
}
