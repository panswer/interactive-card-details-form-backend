const path = require('node:path');
const fs = require('node:fs');
const dotenv = require('dotenv');

const PATH_ENV = path.resolve(__dirname, '../.env');

if (fs.existsSync(PATH_ENV)) {
    dotenv
        .config({
            path: PATH_ENV
        })
}