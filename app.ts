import express from "express";
import employeeRouter from "./employee_router";
import loggerMiddleware from "./loggerMiddleware"
import datasource from './data-source'
const { Client } = require('pg');

const server = express();
server.use(express.json());
server.use(loggerMiddleware);

server.use("/employee", employeeRouter);

server.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send("Hello world typescript");
});

// Database connection configuration
// const dbConfig = {
//   user: 'postgres',
//   password: 'postgres',
//   host: 'localhost',
//   port: '5432',
//   database: 'training',
// };

// const client = new Client(dbConfig);

// client.connect()
//   .then(() => {
//     client.query('SELECT * FROM employee', (err, result) => {
//       if (!err) {
//         console.log('Query result:', result.rows);
//       }
//       client.end();
//     });
//   })
//   .catch((err) => {});

(
  async()=>{
    try{
      await datasource.initialize();
      console.log("Connected")
    }catch (e) {
      console.error('Failed to connect', e)
      process.exit(1)
    }
    server.listen(3000, () => {
  console.log("server listening to 3000");
});
  }
)();
