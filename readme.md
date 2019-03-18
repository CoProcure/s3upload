# S3 Upload

To use first set your AWS credentials on the command line. If you have a company profile named set of credentials in ```~./aws/credentails```:

```
export AWS_PROFILE=coprocure
```

Require this module in your code like:
```
const uploadS3 = require('./upload-s3.js');
```

Call this function passing your file location and destination params like:

```
fileLocation = 'files/AM10-18/911-Fleet-and-Fire-Equipment-Holdings/911-Fleet-and-Fire-Equipment-Holdings.pdf';
fileDestination = "/pathonS3/911-Fleet-and-Fire-Equipment-Holdings.pdf";
uploadS3(fileLocation, fileDestination)
```

Optionally include bucket and content-type parameters in the function call:

```
uploadS3(fileLocation, fileDestination, 'docs.coprocure.us', 'application/pdf')
```

