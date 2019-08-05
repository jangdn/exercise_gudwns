const express = require('express');

const auth = require('./controller/auth');

const app =  express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', auth);

let middleware = (req, res, next) => {
    try{
        console.log("나는 미들웨어");
        req.temp = "야야야";
        next();
    }
    catch(err) {
        res.status(400).json(err);
    }
}

app.get("/test", middleware, (req, res) => {
    console.log(req.body);
    res.status(200).json({"err" : "공띠"});
})

app.listen('7000', console.log("7000번 대기중"));
