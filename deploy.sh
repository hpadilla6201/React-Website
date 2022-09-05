echo "Building web-app"
npm run build

echo "Removing contents from s3"
aws s3 rm s3://hectorwebapp --recursive --exclude=""
echo "Pushing contents to s3"
aws s3 sync ./build s3://hectorwebapp --cache-control max-age=31536000

aws cloudfront create-invalidation --distribution-id E2OVEMRAD1PL87 --paths "/*"
exit 0
