import express, { query } from "express";
import dotenv from "dotenv";
import path from "path";
import Router from "./routes/Customers.js";
import {
  getUser,
  createUser,
  updateCompleteUser,
  updateUserPartialy,
  deleteUser,
} from "./controllers/Users.controllers.js";
import EjsRouter from "./routes/EJS.js";

const app = express();
dotenv.config();
console.clear();
const port = process.env.PORT || 6174;
// EJS
app.set("view engine", "ejs");

app.use(EjsRouter);

// express.Router()
app.use("/api/customers", Router);

// Serving Static Files
// app.use(express.static)
// express.static is a built-in middleware, which allow us to serve our static files.
app.use(express.static("./public"));
app.get("/serveStaticFiles", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "./public/index.html"));
});

app.get("/", (req, res) => {
  res.send("Home Page🏡");
});

// Basic Routing: GET,POST,PUT,PATCH,DELETE & controllers

app.get("/user", getUser);

app.post("/user", createUser);

app.put("/user", updateCompleteUser);

app.patch("/user", updateUserPartialy);
app.delete("/user", deleteUser);

// Route:

app
  .route("/students")
  .get((req, res) => {
    res.send(`Get All Students From DB (${req.method})`);
  })
  .post((req, res) => {
    res.send(`New Students Created! (${req.method})`);
  })
  .put((req, res) => {
    res.send(`Students Data Updated Completely! (${req.method})`);
  })
  .patch((req, res) => {
    res.send(`Students Data Updated Partially! (${req.method})`);
  })
  .delete((req, res) => {
    res.send(`Students Deleted SuccessFully! (${req.method})`);
  });

// Route parameters(are strings)(:id) are named URL segments that are used to capture the values specified at their position in the URL.
// The captured values are populated in the (req.params) object, with the name of the route parameter specified in the path as their respective keys

const Users = [
  { id: 4881, name: "Vandana", email: "vandana@gmail.com" },
  { id: 4882, name: "Chandra Mohan", email: "chandra@gmail.com" },
  { id: 4883, name: "Vijay Kuymar", email: "vijay@gmail.com" },
  { id: 4884, name: "Aravind", email: "aravind@gmail.com" },
  { id: 4885, name: "Shiva", email: "shiva@gmail.com" },
];

app.get("/api/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const User = Users.find((user) => user.id === parseInt(id));
  console.log(User);
  if (!User) return res.send({ msg: "User Not Found(404)!" });
  return res.send(User);
});
// Query Strings:(key:values pair--> ?&)
// A query string is the part of a URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// The query string consists of one or more key-value pairs separated by ampersands (&), where each key is separated from its value by an equals sign (=).

app.get("/api/products", (req, res) => {
  const { id, name } = req.query;
  console.log(query);
  console.log(`ProductID: ${id} & ProductName: ${name}`);
}); // localhost:5173/api/products/?id=100&name="apple 16 pro"

// Sending Json to client:

app.get("/sendJson", (req, res) => {
  res.json(Users);
});

// App Listening:
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
