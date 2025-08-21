const express = require("express");
const pool = require("../db");
const router = express.Router();


// GET /api/recipes?page&limit — sorted by rating desc
router.get("/", async (req, res, next) => {
try {
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const offset = (page - 1) * limit;


const [rows] = await pool.query(
`SELECT * FROM recipes ORDER BY rating DESC LIMIT ? OFFSET ?`,
[limit, offset]
);
const [[{ total }]] = await pool.query(`SELECT COUNT(*) AS total FROM recipes`);


res.json({ page, limit, total, data: rows });
} catch (e) { next(e); }
});


// GET /api/recipes/search?title=&cuisine=&total_time=>=120&rating=>=4.5&calories=<=400
router.get("/search", async (req, res, next) => {
try {
const { title, cuisine, total_time, rating, calories } = req.query;
const clauses = [];
const params = [];


if (title) { clauses.push("title LIKE ?"); params.push(`%${title}%`); }
if (cuisine) { clauses.push("cuisine = ?"); params.push(cuisine); }


const addOp = (field, raw, isJson) => {
if (!raw) return;
const ops = [["<=", "<="], [">=", ">="], ["=", "="]];
for (const [sig, op] of ops) {
if (raw.startsWith(sig)) {
if (isJson) {
clauses.push(`CAST(JSON_UNQUOTE(JSON_EXTRACT(nutrients, '$.${field}')) AS DECIMAL(10,2)) ${op} ?`);
} else {
clauses.push(`${field} ${op} ?`);
}
params.push(raw.slice(sig.length));
return;
}
}
};


addOp("total_time", total_time, false);
addOp("rating", rating, false);
addOp("calories", calories, true);


let sql = "SELECT * FROM recipes";
if (clauses.length) sql += " WHERE " + clauses.join(" AND ");


const [rows] = await pool.query(sql, params);
res.json({ data: rows });
} catch (e) { next(e); }
});


module.exports = router;