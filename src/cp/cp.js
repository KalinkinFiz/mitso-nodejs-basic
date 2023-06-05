import { spawn } from 'child_process';

async function spawnChildProcess(args) {
  const child = spawn('node', ['files/script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  await new Promise(resolve => {
    child.on('exit', resolve);
  });

  return;
}

export { spawnChildProcess };

