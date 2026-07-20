// import express from "express";
// import dotenv from "dotenv";
// const app = express();

// //  config:
// dotenv.config();

// //  middlewares:
// app.use(express.json());

// //  routes:
// const arr = [
//   {
//     id: 1,
//     name: "A",
//     class: 12,
//   },
//   {
//     id: 2,
//     name: "B",
//     class: 10,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.post("/", (req, res) => {
//   arr.push(req.body);
//   res.json({
//     message: "Added successfully",
//     data: arr,
//   });
// });

// app.get("/home", (req, res) => {
//   res.json(arr);
// });

// app.put("/home/:id", (req, res) => {
//   const productId = Number(req.params.id);

//   const index = arr.findIndex((s) => s.id === productId);
//   arr[index] = req.body;
//   res.json({
//     message: "Updated successfully",
//     data: arr,
//   });
// });

// app.delete("/home/:id", (req, res) => {
//   const productId = Number(req.params.id);

//   const index = arr.findIndex((s) => s.id === productId);
//   arr.splice(index, 1);
//   res.json({
//     message: "deleted successfully",
//     data: arr,
//   });
// });

// export default app;



import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js"
const app = express();

//  config:
dotenv.config();

//  middlewares:
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}))
app.use("/users" , userRoutes);

export default app;