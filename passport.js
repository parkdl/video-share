import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(USer.serializeUser());
passport.deserializeUser(User.deserializeUser());
