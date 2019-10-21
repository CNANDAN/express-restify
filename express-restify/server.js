var entityModel = require('./models/entity');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var restify = require('express-restify-mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride())

app.get('/', (req, res) => {
    console.log("App is running successfully");
    res.send("hello there");
})
mongoose.connect('mongodb://localhost:27017/expressrestify', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    entityModel.find({}).then((result) => {
        result.forEach((data) => {
            let router = express.Router();
            let options = {
                bufferCommands: false,
                collation: {
                    locale: 'en_US',
                    strength: 1
                }
            };
            let objSchema = mongoose.Schema(data.entity, options);
            let modelSchema = mongoose.model(data.name, objSchema);
            restify.serve(router, modelSchema);
            app.use(router);
        });
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(3000, function () {
    console.log("Express server listening on port 3000");
});