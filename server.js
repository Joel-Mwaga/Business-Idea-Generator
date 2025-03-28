const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

env.config();

const app = express();
const port = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET || "supersecretkey";

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Database Connection
const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "business_ideas",
  password: "your_db_password",
  port: 5432,
});

// User Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
      [name, email, hashedPassword]
    );
    res.status(201).json({ message: "User created successfully", userId: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) return res.status(401).json({ message: "Invalid credentials" });
    
    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Invalid credentials" });
    
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Generate Business Idea
app.post("/generate-idea", async (req, res) => {
  const { salary, lifestyle } = req.body;
  try {
    const generatedIdea = `Start a side hustle in ${lifestyle} with an initial investment of ${salary * 0.1}`;
    res.json({ idea: generatedIdea });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save Business Idea
app.post("/save-idea", async (req, res) => {
  const { userId, idea } = req.body;
  try {
    await pool.query("INSERT INTO business_ideas (user_id, idea) VALUES ($1, $2)", [userId, idea]);
    res.status(201).json({ message: "Idea saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
