const mongoose = require('mongoose')

const fileUploadSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const FileUpload = mongoose.model('File Upload', fileUploadSchema)

module.exports = FileUpload
