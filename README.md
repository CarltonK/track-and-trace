## Track and Trace System

# Backend - NestJS
# Frontend - NextJS

# Prerequisites
You will need to have both docker and docker compose installed.
The latest version of docker comes built in with compose but in case you have an older version, you'll need to install it separately.

# How to run
```docker compose up --build```

This spins up 3 containers. A postgres database, a backend container and the web app.

# Deployment
Track and trace is deployed on Google Cloud. Google Cloud Run is the compute behind it. It uses kNative under the hood, same as K8s.
A push to the main branch will trigger deployment for the frontend and backend services.
A docker container is built and stored in Google Container Registry, which Cloud Run refers reads from during deployment.

# Infrastructure
Terraform is used to define the architecture and structure of the product. We have two compute services and one Cloud SQL.
A load balancer runs in front of a http proxy to route the traffic to the specific service.

Due to the requirements of the assignment, I re-used track and trace and only added the iac folder for the Terraform specific configurations.

# Why Google Cloud
Again because of time I went for what I'm used to which is GCP, but I can also deploy the same solution to AWS/Heroku/Azure or Render.
