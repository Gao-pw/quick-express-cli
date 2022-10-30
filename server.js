import express,{json} from "express";
// handle async error
import ex from 'express-async-errors'; 
// handle cross-domain
import cors from 'cors';
import { expressJWT } from "./utils/token";

const app = express();

// export port
const port = 3001;

app.use(cors());

app.use(json());

app.use(expressJWT([{url:/^\/api\//}]));

// global error controller
app.use((err,req,res,next) => {
    res.status(500).send({errMessage:err.message});
})

app.listen(port, () => {
    console.log(`express-little-cli is started on port ${port}`);
});