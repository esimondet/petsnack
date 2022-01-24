const aws = require('aws-sdk');
const dotenv = require('dotenv');
const crypto = require('crypto');
const util = require('util');
const randomBytes = util.promisify(crypto.randomBytes);

dotenv.config();

const region = 'us-east-2';
const bucketName = 'petsnack-image-bucket';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

async function generateUploudUrl() {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString('hex');

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadUrl = await s3.getSignedUrlPromise('putObject', params);

  console.log(uploadUrl);

  return uploadUrl;
}

module.exports = generateUploudUrl;
