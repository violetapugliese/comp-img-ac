// Import necessary modules
const sharp = require('sharp');
const fs = require('fs');

// Specify the directory containing the images
const directory = './img';

// Read the contents of the specified directory synchronously
fs.readdirSync(directory).forEach(file => {
  // Extract the name of the file without the extension
  const name = file.split('.')[0];
  
  // Use the sharp library to resize each image to a width of 50 pixels and save as a PNG file
  sharp(`${directory}/${file}`)
    .resize(50) // Set the width of the image
    .toFile(`${directory}/${name}.png`); // Save the resized image with a new file name
});