import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send(`Get All Customers From DB (${req.method})`);
});

Router.post("/", (req, res) => {
  res.send(`New Customer Created! (${req.method})`);
});

Router.put("/", (req, res) => {
  res.send(`Customer Data Updated Completely! (${req.method})`);
});

Router.patch("/", (req, res) => {
  res.send(`Customer Data Updated Partially! (${req.method})`);
});
Router.delete("/", (req, res) => {
  res.send(`Customer Deleted SuccessFully! (${req.method})`);
});

export default Router;
