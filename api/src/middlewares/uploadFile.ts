import multer from "multer";
import path from "path";
import fs from 'fs';

// check if the upload path exists. If not, create it
const uploadPath = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath)
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, uploadPath)
  },
  filename: (_, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName)
  }
})

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024},
  fileFilter: (_, file, cb) => {
    const allowed = ['image/jpeg'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Only JPEG, PNG, or PDF files are allowed'));
    }
  }
})