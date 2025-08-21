const fs = require("fs");
const pool = require("../db");

async function seed() {
  const data = JSON.parse(fs.readFileSync(__dirname + "US_recipes.json", "utf8"));

  for (const recipe of Object.values(data)) {
    const {
      cuisine,
      title,
      rating,
      prep_time,
      cook_time,
      total_time,
      description,
      nutrients,
      serves,
    } = recipe;

    await pool.query(
      `INSERT INTO recipes 
      (cuisine, title, rating, prep_time, cook_time, total_time, description, nutrients, serves) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        cuisine || null,
        title || null,
        isNaN(rating) ? null : rating,
        isNaN(prep_time) ? null : prep_time,
        isNaN(cook_time) ? null : cook_time,
        isNaN(total_time) ? null : total_time,
        description || null,
        JSON.stringify(nutrients || {}),
        serves || null,
      ]
    );
  }

  console.log("Database seeded successfully");
  process.exit();
}

seed();
