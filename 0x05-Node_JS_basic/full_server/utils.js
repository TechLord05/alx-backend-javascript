// Import the required modules
import fs from 'fs';
import { parse } from 'csv-parse';

// Function to read the database file asynchronously and process the data
export default function readDatabase(filePath) {
  // Return a new promise
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        reject(new Error('Cannot load the database'));
        return;
      }

      // Parse the CSV data
      parse(data, { columns: true, skip_empty_lines: true }, (err, records) => {
        if (err) {
          // Reject the promise if there's an error parsing the data
          reject(new Error('Cannot parse the database'));
          return;
        }

        // Initialize an object to hold students by field
        const studentsByField = {};

        // Iterate through the records
        records.forEach((record) => {
          const { firstname, field } = record;
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        });

        // Resolve the promise with the processed data
        resolve(studentsByField);
      });
    });
  });
}
