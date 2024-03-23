const parseEnv = () => {
    const prefix = 'MITSO_';
    const env = process.env;
    const keys = Object.keys(env);
    keys.forEach(key => {
        if (key.startsWith(prefix)) {
            console.log(`${key}=${env[key]}`);
        }
    });
};

parseEnv();