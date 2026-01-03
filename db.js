const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres.lfoeumjnajvygplkdvqd:Naruto@123()OPisreal9@aws-1-ap-south-1.pooler.supabase.com:6543/postgres",
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;