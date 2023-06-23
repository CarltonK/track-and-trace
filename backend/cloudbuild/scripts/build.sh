echo
echo "************************"
echo "* Build container *"
echo "************************"
echo

cd /workspace
docker build -f docker/prod.Dockerfile \
    -t gcr.io/$1/$2:$3 .

echo
echo "************************"
echo "* Push to Registry *"
echo "************************"
echo

docker push gcr.io/$1/$2:$3