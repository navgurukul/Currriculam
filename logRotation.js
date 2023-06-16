require('dotenv').config();
const { Client } = require('ssh2');

const config = {
  host: process.env.SSH_HOST,
  port: process.env.SSH_PORT,
  username: process.env.SSH_USERNAME,
  privateKey: require('fs').readFileSync(process.env.SSH_PRIVATE_KEY_PATH)
};

const removeLogs = () => {
  const conn = new Client();

  conn.on('ready', () => {
    console.log('SSH connection established.');

    // Specify the log file or directory you want to remove
    const logFilePath = '/.pm2/logs/Currriculam-out.log';

    // Execute the command to remove the log file or directory
    conn.exec(`rm -rf ${logFilePath}`, (err, stream) => {
      if (err) throw err;

      stream
        .on('close', (code, signal) => {
          console.log(`Log removal command exited with code ${code}.`);
          conn.end();
        })
        .on('data', (data) => {
          console.log(`STDOUT: ${data}`);
        })
        .stderr.on('data', (data) => {
          console.error(`STDERR: ${data}`);
        });
    });
  });

  conn.on('error', (err) => {
    console.error(`SSH connection error: ${err.message}`);
  });

  conn.on('close', () => {
    console.log('SSH connection closed.');
  });

  conn.connect(config);
};

removeLogs();
