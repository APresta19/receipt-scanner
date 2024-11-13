import express from "express"; //don't need {} because this is your own variable name
import userRouter from "../routes/userRoute.js";

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.set("view engine", "ejs");
app.use("/", userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log("Listening on PORT" + PORT + "."));