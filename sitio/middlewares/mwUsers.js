let path = require('path');
let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    
      cb(null, path.join(__dirname, '..', 'public', 'images', 'avatar_users'))
    },
    filename: function (req, file, cb) {
        
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  module.exports = multer({storage:storage})