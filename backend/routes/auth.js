const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../database");

const router = express.Router();

// register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // check that all fields were provided
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please provide name, email, and password.",
    });
  }

  try {
    // check if the email already exists
    db.get(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, user) => {
        if (err) {
          return res.status(500).json({
            message: "Database error.",
          });
        }

        if (user) {
          return res.status(400).json({
            message: "An account with this email already exists.",
          });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // save the new user
        db.run(
          `INSERT INTO users (name, email, password)
                     VALUES (?, ?, ?)`,
          [name, email, hashedPassword],
          function (err) {
            if (err) {
              return res.status(500).json({
                message: "Could not create account.",
              });
            }

            res.status(201).json({
              message: "Account created successfully.",
              userId: this.lastID,
            });
          },
        );
      },
    );
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
});

// login an existing user
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // check that all fields were provided
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email and password.",
    });
  }

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) {
      return res.status(500).json({
        message: "Database error.",
      });
    }

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // compare the password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // create a JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.json({
      message: "Login successful.",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
});

module.exports = router;
