import express from "express";
import employeeRouter from "./routes/employee.route";
import loggerMiddleware from "./loggerMiddleware"
import datasource from "./db/data-source";
import { errorHandler } from "./middlewares/error.middleware";
import authRouter from "./routes/auth.route";
import { authMiddleware } from "./middlewares/auth.middleware";
import { LoggerService } from "./services/logger.service";
const { Client } = require('pg');

const server = express();
const logger=LoggerService.getInstance('app()')
server.use(express.json());
server.use(loggerMiddleware);

server.use("/employee",authMiddleware, employeeRouter);
server.use("/auth",authRouter)
server.use(errorHandler)
server.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send("Hello world typescript");
});
// server.use(errorHandler)
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
      logger.info("Database connected")
    }catch (e) {
      logger.error("Failed to connect")
      process.exit(1)
    }
    server.listen(3000, () => {
  logger.info("server listening to 3000");
});
  }
)();
