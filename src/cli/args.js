const parseArgs = () => {

    const args = process.argv.slice(2);
    const props = {};
  
    for (let i = 0; i < args.length; i += 2) {
      const prop = args[i].slice(2);
      const value = args[i + 1];
      props[prop] = value;
    }
  
    for (const prop in props) {
      console.log(`${prop} is ${props[prop]}`);
    }
  }
  
  parseArgs();