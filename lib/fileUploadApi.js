require('dotenv').config()
// require AWS SDK for Node.js
const AWS = require('aws-sdk')
// Config AWS to use our region
AWS.config.update({ region: 'us-east-1' })
// console.log(AWS)

// Create s3 object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

const fileUpload = (key, file) => {
  return new Promise((resolve, reject) => {
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: 'anything',
      Body: '',
      ACL: 'public-read'
    }

    s3.upload(uploadParams, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = fileUpload
