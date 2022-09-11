import { Pool } from "pg";

let con: any;

if (!con) {
  con = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5433,
    database: "tasksdb",
  });
}

export {con};