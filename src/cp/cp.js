import { fork } from 'node:child_process'
import { execArgv } from "node:process";
const spawnChildProcess = async (args) => {
    
    const controller = new AbortController()
    const child = fork('./cp/files/script.js',args ,{execArgv})
    child.on('error', (err) => {
        
      });
      controller.abort();
};


spawnChildProcess( ['aafsdf', 'asdfasfd']);