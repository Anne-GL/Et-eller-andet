const express = require("express");
const expessLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const socketIO = require("socket.io");
const http = require("http");

// Init app and middleware
const app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "./layouts/layout");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(expessLayouts);
app.use(cookieParser());

//Routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

server.listen(8080, async () => {
  console.log("Server is running on port http://localhost:8080");
});
