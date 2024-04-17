import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));

// app.use((req, res, next) => {
//     console.log('refreshToken: ...', req.headers);
//     next();
// });

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.js'

// routes declaration
app.use(userRouter)


// app.post("/register",(registerUser))
export { app }