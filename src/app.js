const express = require('express');
const path = require('node:path');
const fs = require('node:fs');

const app = express();

const PATH_ROOT = path.resolve(__dirname, '../');
const PATH_PUBLIC_FOLDER = path.resolve(PATH_ROOT, './public');

if (!fs.existsSync(PATH_PUBLIC_FOLDER)) {
    console.log("Missing public folder");
    process.exit(1);
}

app.use(express.static(PATH_PUBLIC_FOLDER));

app.get('/*', (req, res) => {
    const PATH_INDEX_HTML = path.resolve(PATH_PUBLIC_FOLDER, './index.html')

    res.sendFile(PATH_INDEX_HTML);
});

module.exports = app;