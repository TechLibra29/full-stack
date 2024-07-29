//Q1
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Students!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Q2
const fs = require('fs');

// Read the contents of the input file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Failed to read file:", err);
    return;
  }

  // Write the contents to the output file
  fs.writeFile('output.txt', data, err => {
    if (err) {
      console.error("Failed to write file:", err);
      return;
    }

    console.log("File written successfully!");
  });
});

//Q3
const http = require('http');

const hostname1 = '127.0.0.1';
const port1 = 3000;

const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello, World!');
  } else {
    res.end('Page Not Found');
  }
});

server1.listen(port1, hostname1, () => {
  console.log(`Server running at http://${hostname1}:${port1}/`);
});

//Q4
const os = require('os');

// Get the operating system name
console.log(`Operating system: ${os.type()}`);

// Get the operating system version
console.log(`Operating system version: ${os.release()}`);

// Get the operating system architecture
console.log(`Architecture: ${os.arch()}`);

// Get the number of CPU cores
console.log(`Number of CPU cores: ${os.cpus().length}`);

// Get the total memory available
console.log(`Total memory available: ${os.totalmem() / (1024 * 1024)} MB`);

// Get the free memory available
console.log(`Free memory available: ${os.freemem() / (1024 * 1024)} MB`);

// Get the hostname of the machine
console.log(`Hostname: ${os.hostname()}`);

// Get the uptime of the machine
console.log(`Uptime: ${os.uptime()} seconds`);

//Q5
const path = require('path');

// Example file path
const filePath = '/home/user/documents/file.txt';

// Get the directory name
const directory = path.dirname(filePath);
console.log('Directory:', directory); // Output: /home/user/documents

// Get the file name
const fileName = path.basename(filePath);
console.log('File name:', fileName); // Output: file.txt

// Get the file extension
const extension = path.extname(filePath);
console.log('Extension:', extension); // Output: .txt

// Join two paths
const newPath = path.join(directory, 'new_file.txt');
console.log('New path:', newPath); // Output: /home/user/documents/new_file.txt

// Check if a path is absolute
const isAbsolute = path.isAbsolute(filePath);
console.log('Is absolute:', isAbsolute); // Output: true

// Normalize a path
const normalizedPath = path.normalize(filePath);
console.log('Normalized path:', normalizedPath); // Output: /home/user/documents/file.txt

// Resolve a path
const resolvedPath = path.resolve(filePath);
console.log('Resolved path:', resolvedPath); // Output: /home/user/documents/file.txt

//Q6
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Cannot divide by zero';
        } else {
          return num1 / num2;
        }
      default:
        return 'Invalid operator';
    }
  };
  
  readline.question('Enter the first number: ', (num1) => {
    num1 = parseFloat(num1);
    readline.question('Enter the second number: ', (num2) => {
      num2 = parseFloat(num2);
      readline.question('Enter the operator (+, -, *, /): ', (operator) => {
        console.log(`Result: ${calculate(num1, num2, operator)}`);
        readline.close();
      });
    });
  });