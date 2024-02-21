const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Auth_Mongodb = require("../database/Auth");
module.exports = {
	signUp: async function ({ username, email, password }) {
		const exist = await Auth_Mongodb.AccountExist(email);
		if (exist != null) {
			return { status: 401, token: null, error: "Ya tienes una cuenta" };
		} else if (exist == null) {
			const salt = await bcrypt.genSalt(10);
			var hash = await bcrypt.hash(password, salt);
			var response = await Auth_Mongodb.SignUp({ username, email, password: hash });
			delete response.password;
			const token = jwt.sign(response, process.env.ENCODER_FOR_USER_TOKENS, { expiresIn: "3h" });
			return { status: 200, token };
		}
	},
	signIn: async function ({ email, password }) {
		const exist = await Auth_Mongodb.AccountExist(email);
		if (exist != null) {
			const verify = await bcrypt.compare(password, exist.password);
			if (verify == true && email == exist.email) {
				delete exist.password;
				const token = jwt.sign(exist, process.env.ENCODER_FOR_USER_TOKENS, { expiresIn: "3h" });
				return { status: 200, token };
			} else {
				return { status: 401, token: null, error: "Tus datos no coinciden." };
			}
		} else if (exist == null) {
			return { status: 401, token: null, error: "No tienes una cuenta." };
		}
	},
	loginwithoutpassword: async function ({ email }) {
		if (!email) {
			return { status: 400, message: "Algo ha salido mal con tu cuenta" };
		} else {
			const user = await Auth_Mongodb.AccountExist(email);
			if (user != null) {
				delete user.password;
				const token = jwt.sign(user, process.env.ENCODER_FOR_USER_TOKENS, { expiresIn: "3h" });
				return { status: 200, token };
			}
			if (user == null) {
				return { status: 400, message: "No tienes una cuenta" };
			}
		}
	},
	setAvatar: async function ({ _id, avatar }) {
		console.log(avatar + _id, "asjsajnjdnjbdahs");
		Auth_Mongodb.Avatar(_id, avatar);
	},
};
