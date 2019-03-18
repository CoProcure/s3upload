# S3 Upload

This package contains some boilerplate code around the ```s3-upload-stream``` package for uploading to S3.

To use first set your AWS credentials on the command line. If you have a company profile named set of credentials in ```~./aws/credentails```:

```
export AWS_PROFILE=coprocure
```

Require this module in your code like:
```
const uploadS3 = require('./upload-s3.js');
```

Call this function passing your local file location and desired destination and bucker params like:

```
uploadS3(fileLocation, fileDestination, bucket)
```

The fileLocation is the relative local path to the file you want to upload. The fileDestination is the path from the bucket root where you want the file to be stored, examples:

```
let fileLocation = 'files/AM10-18/911-Fleet-and-Fire-Equipment-Holdings/911-Fleet-and-Fire-Equipment-Holdings.pdf';
let fileDestination = "/pathonS3/911-Fleet-and-Fire-Equipment-Holdings.pdf";
let bucket = 'docs.coprocure.us';
```

Optionally include bucket and content-type parameters in the function call:

```
uploadS3(fileLocation, fileDestination, bucket, 'application/pdf')
```

