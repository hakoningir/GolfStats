// import { sign } from "jsonwebtoken";
// import { compare } from "bcryptjs";
// import cookie from "cookie";

// const secret = "supersecret";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default async (req, res) => {
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { username, password } = req.body;

//   // TODO: Check the username and password against your database
//   const hashedPasswordFromDB = "hash123"; // Replace with actual hashed password from your database
//   const isValid = await compare(password, hashedPasswordFromDB);

//   if (!isValid) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }

//   // Generate JWT token
//   const token = sign({ username }, secret, { expiresIn: "1h" });

//   // Set token as cookie
//   res.setHeader(
//     "Set-Cookie",
//     cookie.serialize("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 3600,
//       path: "/", //user?
//     })
//   );

//   return res.status(200).json({ message: "Login successful" });
// };
import passport from 'passport';
import { Strategy } from 'passport-local';
import { comparePasswords, findById, findByUsername } from './users.js';

/**
 * Athugar hvort username og password sé til í notandakerfi.
 * Callback tekur við villu sem fyrsta argument, annað argument er
 * - `false` ef notandi ekki til eða lykilorð vitlaust
 * - Notandahlutur ef rétt
 *
 * @param {string} username Notandanafn til að athuga
 * @param {string} password Lykilorð til að athuga
 * @param {function} done Fall sem kallað er í með niðurstöðu
 */
async function strat(username, password, done) {
  try {
    const user = await findByUsername(username);

    if (!user) {
      return done(null, false);
    }

    // Verður annað hvort notanda hlutur ef lykilorð rétt, eða false
    const result = await comparePasswords(password, user.password);
    return done(null, result ? user : false);
  } catch (err) {
    console.error(err);
    return done(err);
  }
}

// Notum local strategy með „strattinu“ okkar til að leita að notanda
passport.use(new Strategy(strat));

// getum stillt með því að senda options hlut með
// passport.use(new Strategy({ usernameField: 'email' }, strat));

// Geymum id á notanda í session, það er nóg til að vita hvaða notandi þetta er
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Sækir notanda út frá id
passport.deserializeUser(async (id, done) => {
  try {
    const user = await findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});


// Hjálpar middleware sem athugar hvort notandi sé innskráður og hleypir okkur
// þá áfram, annars sendir á /login
export function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
}

// export async function ensureAdmin(req, res, next) {
//   const {user: {username} = {}} = req;

//   if(await isAdmin(username)){
//     return next();
//   }
//   return res.redirect('/login');
// }
export default passport;
