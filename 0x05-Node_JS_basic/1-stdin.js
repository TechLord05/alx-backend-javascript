process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
    // if in interactive mode
    process.stdin.on('data', (input) => {
        const name = input.toString().trim();
        
    });
}
