import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['files/script.js', ...args], {
        stdio: ['inherit', 'inherit', 'inherit']
    });
};

spawnChildProcess(['arg1', 'arg2']);
