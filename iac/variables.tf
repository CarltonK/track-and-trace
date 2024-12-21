variable "project_id" {
  description = "Google Cloud Project ID"
  type        = string
}

variable "region" {
  description = "Region to deploy resources"
  default     = "europe-west1"
}

variable "db_instance_name" {
  description = "Cloud SQL instance name"
  default     = "paysoko-db"
}

variable "db_user" {
  description = "Database username"
  default     = "admin"
}

variable "db_password" {
  description = "Database password"
  type        = string
}
