// Import the readDatabase function from utils
import readDatabase from '../utils';

// Define the StudentsController class
class StudentsController {
  // Static method to handle the route for getting all students
  static async getAllStudents(req, res) {
    try {
      // Get the path to the database file from the request arguments
      const databaseFilePath = process.argv[2];

      // Call readDatabase to get the students data
      const students = await readDatabase(databaseFilePath);

      // Initialize the response text
      let responseText = 'This is the list of our students\n';

      // Get all fields and sort them alphabetically (case insensitive)
      const fields = Object.keys(students).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      // Iterate through each field and append the student details to the response text
      fields.forEach((field) => {
        const studentNames = students[field].join(', ');
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${studentNames}\n`;
      });

      // Send the response with a status of 200
      res.status(200).send(responseText.trim());
    } catch (error) {
      // Send a 500 error response if there's an issue reading the database
      res.status(500).send('Cannot load the database');
    }
  }

  // Static method to handle the route for getting students by major
  static async getAllStudentsByMajor(req, res) {
    try {
      // Get the major parameter from the request URL
      const { major } = req.params;

      // Validate the major parameter
      if (major !== 'CS' && major !== 'SWE') {
        // Send a 500 error response if the major is not CS or SWE
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      // Get the path to the database file from the request arguments
      const databaseFilePath = process.argv[2];

      // Call readDatabase to get the students data
      const students = await readDatabase(databaseFilePath);

      // Get the list of students for the specified major
      const studentNames = students[major] ? students[major].join(', ') : '';

      // Send the response with a status of 200 and the list of student names
      res.status(200).send(`List: ${studentNames}`);
    } catch (error) {
      // Send a 500 error response if there's an issue reading the database
      res.status(500).send('Cannot load the database');
    }
  }
}

// Export the StudentsController class
export default StudentsController;
