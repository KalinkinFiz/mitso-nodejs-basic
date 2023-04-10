import {fork} from 'child_process'
const spawnChildProcess = async (args) => {
    fork('files/script.js', args);
};

await spawnChildProcess(['arg1', 'arg2'])
