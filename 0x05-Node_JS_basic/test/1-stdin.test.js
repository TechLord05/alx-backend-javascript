// test/1-stdin.test.js
const { spawn } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', () => {
  it('should display the welcome message and user name', (done) => {
    const process = spawn('node', ['1-stdin.js']);
    let output = '';

    process.stdout.on('data', (data) => {
      output += data.toString();
      if (output.includes('Welcome to Holberton School, what is your name?')) {
        process.stdin.write('John\n');
      }
    });

    process.on('exit', () => {
      expect(output).to.include('Your name is: John');
      expect(output).to.include('This important software is now closing');
      done();
    });
  });

  it('should display closing message on exit', (done) => {
    const process = spawn('node', ['1-stdin.js']);

    process.stdin.write('John\n');

    process.stdout.on('data', (data) => {
      if (data.toString().includes('This important software is now closing')) {
        done();
      }
    });
  });
});
