import { config, configDotenv } from "dotenv";
import pkg from "pg";

const { Pool, Client } = pkg;
config()
const pool = new Pool({
   host: process.env.PGHOST,
   user: process.env.PGUSER,
   password: process.env.PGPASSWORD,
   database: process.env.PGDATABASE,
   port: process.env.PGPORT
   }
)

export default pool
