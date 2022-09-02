echo "Building web-app"
npm run build

echo "Removing contents from s3"
aws s3 rm s3://hectorwebapp --recursive --exclude=""
echo "Pushing contents to s3"
aws s3 sync ./build s3://hectorwebapp --cache-control max-age=31536000
exit 0
np