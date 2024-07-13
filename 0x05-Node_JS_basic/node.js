/*The spawn method is used to spawn a new process using the given command.
The command is a string that contains the command to be executed.
The args parameter is an array of strings that contains the arguments to be passed to the command. 
The options parameter is an object that contains options to be passed to the spawn method.
*/

// child_process.spawn(command, [args], {options})

// var cp =  require('child_process');
// var progs = {
//   list: "ls",
//   copy: "cp",
//   folder: "mkdir",
//   delete: "rm"
// }
// 
// var command = cp.spawn(progs.list, ['pub'], {cwd: ".."});
// command.stdout.on('data', (data) =>{
//   console.log(`stdout: ${data}`);
// })
// 
// command.stderr.on('data', (data) =>{
//   console.log('data' + data);
// })
// 
// var copy = cp.spawn (progs.copy, ['file.txt', 'file1.txt']);
// copy.on('exit', () =>{
//   console.log("File copied successfully");
// })
// 
// const delcommand = cp.spawn(progs.delete, ['file.txt']);
// delcommand.on('exit', () =>{
//   console.log("File deleted successfully");
// })

/*
The exec method is used to run a command in a shell and buffer the output.
*/
// child_process.exec(command, {options}, callback)

const execMeth = require("child_process");
const { error } = require("console");
const progs = 
{
  remove: "rm",
  mkdir: "mkdir"
}

const child = execMeth.exec(progs.remove + " -r file1.txt", (error, stdout, stderr) =>{
  if (error)
  {
    console.log(`Name: ${error.Name}\nMessage: ${error.message}\nStack: ${error.stack}`);
  } else {
    console.log(stdout);
  }
})

const list = execMeth.exec("rm -rf" + " Java", (error, stdout, stderr) =>{
  if (error)
  {
    console.log(`Name: ${error.Name}\nMessage: ${error.message}\nStack: ${error.stack}`);
  } else {
    console.log(stdout);
  }
  console.log("Directory deleted successfully");
})