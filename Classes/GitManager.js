const {exec} = require('child_process');

exports.removeLocalBranches = () => {
    exec("git branch | grep -v \\'^*\\' | xargs git branch -D", (error, stdout, stderr) => {
        if (stderr) {
            console.log('error', stderr);
        }
    });
}