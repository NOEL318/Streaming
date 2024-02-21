const mongodb = require("../mongodb_config");
const { ObjectId } = require("mongodb");

module.exports = {
	SignUp: async function ({ username, email, password }) {
		const res = await mongodb.users.insertOne({ username, email, password });
		if (res.acknowledged == true) {
			const find = await mongodb.users.findOne({ _id: new ObjectId(res.insertedId) });
			return find;
		} else {
			return false;
		}
	},
	AccountExist: async function (email) {
		const res = await mongodb.users.findOne({ email });
		if (res != null) {
			if (res.email == email) {
				return res;
			} else {
				return null;
			}
		} else {
			return null;
		}
	},
	Avatar: async function (_id, avatar) {
		console.log(_id);
		const res = await mongodb.users.findOneAndUpdate({ _id: new ObjectId(_id) }, { $set: { avatar } });
		console.log(res, "aaaaaeeeeeiiiooouu");
	},
};
