import axios from "axios";
import * as jose from "jose";
import { url } from "./hooksConfig";
import { main } from "./useOpenAi";

export const signup = async ({ username, email, password }) => {
	const res = await axios.post(`${url}/api/signup`, { username, email, password });
	const json = await res.data;
	if (res.status == 200 && res.data.status == 200) {
		// save the user to local storage
		localStorage.setItem("user", JSON.stringify(json.token));
		// update the auth context
		const token = json.token;
		return jose.decodeJwt(token);
	} else {
		var { error, token, status } = res.data;
		if (error || (status != 200 && token == null)) {
			window.alert(error);
		}
	}
};

export const signin = async ({ email, password }) => {
	const res = await axios.post(`${url}/api/signin`, { email, password });
	const json = await res.data;
	if (res.status == 200 && res.data.status == 200) {
		// save the user to local storage
		localStorage.setItem("user", JSON.stringify(json.token));
		// update the auth context
		const token = json.token;
		return jose.decodeJwt(token);
	} else {
		var { error, token, status } = res.data;
		if (error || (status != 200 && token == null)) {
			window.alert(error);
		}
	}
};

export const setAvatar = async (_id, base64Image) => {
	var x = await main(base64Image);
	console.log(x, "xxxxx");
	var avatar = x.data.data[0].url;
	const res = await axios.post(`${url}/api/setavatar`, { _id, avatar });
	if (res.status == 200 && res.data.status == 200) {
		window.location.reload();
	} else {
		var { error, token, status } = res.data;
		if (error || (status != 200 && token == null)) {
			window.location.reload();
		}
	}
};

export const loginwithoutpassword = async (user) => {
	const token = user;
	const payl = jose.decodeJwt(token);
	const tokenduration = payl.exp - payl.iat;
	const currenttime = Date.now();
	const verify = currenttime - payl.iat * 1000;
	const verified = parseFloat((verify / 1000).toFixed(0));
	if (tokenduration > verified) {
		const response = await axios({
			url: `${url}/api/loginwithoutpassword`,
			method: "POST",
			data: { email: payl.email },
		});
		const json = response.data;
		if (json.status == 200) {
			localStorage.setItem("user", JSON.stringify(json.token));
			var x = jose.decodeJwt(token);

			return x;
		} else {
			return response;
		}
	} else {
		localStorage.removeItem("user");
	}
};

export const signout = async () => {
	return localStorage.removeItem("user");
};

const authServices = {
	signup,
	signin,
	signout,
	loginwithoutpassword,
};
export default authServices;
