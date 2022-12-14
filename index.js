require('./src/config');

const app = require('./src/app');

const port = process.env.PORT || 3001;

app.listen(
    port,
    err =>
        err ?
            console.log(err) :
            console.log(`Server on port ${port}`)
);