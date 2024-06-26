const express = require('express');
const multer = require('multer');
const docxToPdf = require('docx-pdf');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require("cors");

const port = 3000; // Define the port the server will run on

app.use(cors({
  origin: 'http://localhost:5173' // Allow CORS requests from this origin
}));

// Ensure the 'uploads' and 'files' directories exist
const uploadDir = path.join(__dirname, 'uploads'); // Define the uploads directory path
const filesDir = path.join(__dirname, 'files'); // Define the files directory path

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // Create uploads directory if it doesn't exist
}

if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir); // Create files directory if it doesn't exist
}

// Setting up the file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Save files to the uploads directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  }
});

const upload = multer({ storage: storage }); // Configure Multer with the storage settings

// Endpoint to handle file conversion
app.post('/convertFile', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' }); // Return error if no file is uploaded
  }

  const inputPath = req.file.path; // Get the path of the uploaded file
  const outputFileName = req.file.originalname.replace(/\.(docx|doc)$/, '.pdf'); // Define the output file name
  const outputPath = path.join(filesDir, outputFileName); // Define the output file path

  // Convert the file from docx to pdf
  docxToPdf(inputPath, outputPath, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(500).send('Error converting file'); // Return error if conversion fails
    }

    // Send the converted file to the client
    res.download(outputPath, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error downloading file'); // Return error if download fails
      }

      // Clean up files after download
      fs.unlink(inputPath, (err) => {
        if (err) console.log('Error deleting input file:', err); // Log error if input file deletion fails
      });

      fs.unlink(outputPath, (err) => {
        if (err) console.log('Error deleting output file:', err); // Log error if output file deletion fails
      });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Log that the server is running
});