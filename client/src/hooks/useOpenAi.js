import axios from "axios";

export async function main(base64Image) {
	console.log(base64Image, "xdxdxd");
	return await axios("https://api.openai.com/v1/images/variations", {
		method: "POST",
		headers: {
			"Content-type": "multipart/form-data",
			Authorization: "Bearer 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",
			"User-Agent": "Chrome",
		},
		data: {
			image: base64Image,
			n: 1,
			size: "256x256"
		},

	});
}
