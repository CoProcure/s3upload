var AWS      = require('aws-sdk'),
    fs       = require('fs');
    s3Stream = require('s3-upload-stream')(new AWS.S3());

module.exports = function upload(fileLocation, fileDestination, bucket = 'docs.coprocure.us', contentType = 'application/pdf') {
  console.log(fileDestination)
  // Create the streams
  var read = fs.createReadStream(fileLocation);
  var upload = s3Stream.upload({
    "Bucket": bucket,
    "Key": fileDestination,
    ContentType: contentType
  });
  
  // Optional configuration
  upload.maxPartSize(20971520); // 20 MB
  upload.concurrentParts(5);
  
  // Handle errors.
  upload.on('error', function (error) {
    console.log(error);
  });
  
  upload.on('part', function (details) {
    console.log(details);
  });
  
  upload.on('uploaded', function (details) {
    console.log("UPLOADED")
    console.log(details);
    return true;
  });
  
  read.pipe(upload);
}