const parseEnv = () => {

    const prefix = 'win';
    const envVariables = process.env;
    const mitsoVariables = Object.keys(envVariables)
      .filter(key => key.startsWith(prefix))
      .map(key => `${key}=${envVariables[key]}`)
      .join('; ');
    
    console.log(mitsoVariables);
};

parseEnv();