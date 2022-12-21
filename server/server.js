import express from 'express'
import db from './config/connectionsDb.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const app = express()



//routes connection
import userRouter from './routes/user.js'
import adminRouter from './routes/admin.js'

app.use(cors());
app.use(cookieParser());
app.use(express.json());




app.use('/user', userRouter)
app.use('/admin', adminRouter)



app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(5000, (err, server) => {
    if (err) {
        console.log('5000 not connncted');
    } else {
        console.log("server connected 5000");
    }
})