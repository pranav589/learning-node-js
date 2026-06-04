import { exec, spawn, fork } from "child_process";

// Stream ffmpeg output
const proc = spawn("ffmpeg", ["-i", "in.mp4", "out.mp3"]);
proc.stdout.pipe(process.stdout);

// Fork a Node script with IPC
const child = fork("./worker.js");
child.send({ task: "compute" });
child.on("message", (msg) => console.log(msg));

// Quick shell command
exec("ls -la", (err, stdout) => console.log(stdout));
