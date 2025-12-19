import express from "express";
import authRouter from "./src/routes/auth.js"
import productsRouter from "./src/routes/products.js"
import usersRouter from "./src/routes/users.js"


const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);




app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});