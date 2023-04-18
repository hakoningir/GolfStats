import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

function cors(req, res, next){
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
}

app.use(cors);
const port = process.env.PORT || 3000;

const indexRouter = express.Router();

app.use("/", indexRouter);
app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}/`);
});