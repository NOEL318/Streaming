const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb+srv://noel:root@nmtech.uirs6uv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("nmtech");
const content = database.collection("content");
const users = database.collection("users");

module.exports = {
	content,
	users,
};