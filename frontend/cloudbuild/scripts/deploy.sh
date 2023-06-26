echo
echo "************************"
echo "* Set frontend project *"
echo "************************"
echo

gcloud config set project $2

gcloud config set run/region $3

echo
echo "************************"
echo "* Variable subsitituion *"
echo "************************"
echo

awk '{gsub(/<CONTAINER_IMAGE>/,"gcr.io/'$2'/'$1':'$4'")}1' /workspace/frontend/service.yaml >/workspace/tmp.yaml && mv /workspace/tmp.yaml /workspace/frontend/service.yaml
awk '{gsub(/<PROJECT_SERVICE>/,"'$1'")}1' /workspace/frontend/service.yaml >/workspace/tmp.yaml && mv /workspace/tmp.yaml /workspace/frontend/service.yaml
awk '{gsub(/<API_URL>/,"'${5}'")}1' /workspace/frontend/service.yaml >/workspace/tmp.yaml && mv /workspace/tmp.yaml /workspace/frontend/service.yaml
awk '{gsub(/<GOOGLE_CLOUD_PROJECT>/,"'$2'")}1' /workspace/frontend/service.yaml >/workspace/tmp.yaml && mv /workspace/tmp.yaml /workspace/frontend/service.yaml


echo
echo "************************"
echo "* Deploy *"
echo "************************"
echo

yes | gcloud beta run services replace frontend/service.yaml --platform=managed