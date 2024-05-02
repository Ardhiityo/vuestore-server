const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const db = require('./app/models');
db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((result) => {
        console.log('Database connect');
    }).catch((err) => {
        console.log('Cannot connect to database!', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({
        message: 'vuestore-server'
    })
});

require('./app/routes/product')(app);
require('./app/routes/order')(app);

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});