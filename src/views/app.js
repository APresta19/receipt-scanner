import express from "express"; //don't need {} because this is your own variable name
import userRouter from "../routes/userRoute.js";
import path from "node:path";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import { fileURLToPath } from 'url';

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
app.set("views", path.join(__dirname));
app.set("view engine", "ejs");
console.log("Started My Server");
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);


const PORT = 5001;
app.listen(PORT, '127.0.0.1', () => {
    console.log("Listening on PORT " + PORT + " at 127.0.0.1.");
});
