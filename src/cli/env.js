const parseEnv = () => {
    const env = process.env
    const find = /MITSO_*/
    const keys = Object.getOwnPropertyNames(env).filter(name => name.match(find))
    keys.forEach(key => console.log(key+"="+env[key]))
};

parseEnv();
