const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  host: 'db.lfoeumjnajvygplkdvqd.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres.lfoeumjnajvygplkdvqd',
  password: process.env.DB_PASSWORD
});

module.exports = pool;