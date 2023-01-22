import express from "express";//to import express framework(importing statemnt in ts,express is just an alias-gets complete exp package)
import mongoose from "mongoose";//mongoose is a library to access mongodb
import routes from './routes'

// const bodyParser = require('body-parser');
const cors=require('cors')

const app=express()//creates an express application
const port=3000;//defines a port to run app

app.use(cors({
    origin:'*'
    // origin:['http://localhost:4200']
}))//middleware for controlling request from front end,provides the address of front end app as origin,uses * for accept request from any app.or we can specifiy address,or use array of multiple addresses


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// });

app.use('/',routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
const dbUrl = 'mongodb://localhost:27017/foodapp';
const dbOptions: mongoose.ConnectionOptions = Object.assign({ useNewUrlParser: true });

const connectDb = ():Promise<typeof mongoose> => {
    return mongoose.connect(dbUrl, dbOptions).then((mongoDB: typeof mongoose) => {
        console.info(`Connected to database.`);
        return mongoDB;
    }).catch((err: any) => {
        console.error(`Unable to connect to db.`);
        throw err;
    });
}

connectDb();