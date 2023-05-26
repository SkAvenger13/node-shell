const pwd = (cmd) => {
    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
        process.stdout.write('\n');
    }
};

module.exports = pwd;