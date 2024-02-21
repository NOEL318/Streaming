const express = require("express");
const mongodb = require("./mongodb_config");
const path = require("path");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const { signUp, signIn, loginwithoutpassword, setAvatar } = require("./auth/auth");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/hi", async (req, res) => {
	res.json({ message: "Hola desde el servidor!" });
});

app.post("/api/signup", async (req, res) => {
	res.json(await signUp(req.body));
});

app.post("/api/setavatar", async (req, res) => {
	res.json(await setAvatar(req.body));
});
app.post("/api/signin", async (req, res) => {
	res.json(await signIn(req.body));
});

app.post("/api/loginwithoutpassword", async (req, res) => {
	res.json(await loginwithoutpassword(req.body));
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
