import {Router} from "express";
import pool from "../db/pool.js";
import passport from "passport";
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
//import res, { append } from "express/lib/response.js";

const userRouter = Router();
console.log("Router");

userRouter.get("/", (req, res) => {
  res.render("login-form", { user: req.user });
});

userRouter.get("/sign-up", (req, res) => res.render("sign-up-form"))

userRouter.post("/sign-up", async(req, res, next) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    //if err, do something
    //otherwise, store hashedPassword in DB
    if(err)
    {
      console.error(err);
      return next(err);
    }
    else
    {
      console.log(req.body);  // Log the request body to check if data is coming through
        const { username, firstName, lastName, email } = req.body;

        if (!username || !firstName || !lastName || !email || !hashedPassword) 
        {
          console.log("Missing a field");
          return res.status(400).send("All fields are required.");
        }

        console.log("User about to be added");

        const insert = await pool.query(
        "INSERT INTO CLIENT(USERNAME, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD) VALUES($1, $2, $3, $4, $5) RETURNING *;",
        [username, firstName, lastName, email, hashedPassword]  // Include 'username' in the insert
        );
        
        console.log("User added:", insert.rows);  // Log the insert result
        res.redirect("/");  // Redirect after successful insertion
    }
  });  
})
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      

      const { rows } = await pool.query("SELECT * FROM Client WHERE username = $1", [username]);
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" })
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);
passport.serializeUser((user, done) => {
  done(null, user.client_id);
});

passport.deserializeUser(async (client_id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM Client WHERE Client_ID = $1", [client_id]);
    const user = rows[0];

    done(null, user);
  } catch(err) {
    done(err);
  }
});

userRouter.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);
userRouter.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});



  

export default userRouter;