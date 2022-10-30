import multer from 'multer';

const upload = multer({
  dest: 'upload/',
  fileFilter: (req, file, cb) => {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid mime type'), false);
    }
  },
});

export { upload };
