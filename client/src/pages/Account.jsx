import { useEffect, useState } from "react";

import { setAvatar } from "../hooks/useAuth";

export const Account = ({ user }) => {
	const [base64, setbase64] = useState();
	const [visible, setvisible] = useState(false);
	const [loading, setloading] = useState(false);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		console.log(file, "eeeeeaaaa");
		if (file) {
			setbase64(file);
			// const reader = new FileReader();
			// reader.onload = (e) => {
			// 	const tempbase64 = e.target.result;
			// };
			// reader.readAsDataURL(file);
			setvisible(true);
		}
	};

	const sendConfiP = async () => {
		setloading(true);
		setvisible(false);
		setAvatar(user._id, base64);
	};

	return (
		<>
			<div className="main-account">
				<div className="account">
					<div className="left">
						<h3>Editar Avatar</h3>

						<div className="img">
							<img
								src={user.avatar}
								alt=""
							/>
						</div>
						<h1>{user.username}</h1>
						<h1>{user.email}</h1>
					</div>
					<div className="right">
						<div className="form">
							<p>Ingresa la imagen que deseas generar por IA: (Únicamente formato .PNG)</p>
							<label className="input">
								<input
									type="file"
									onChange={handleFileChange}
									accept="image/png"
								/>
								Subir Imagen
							</label>
							<img
								src={base64}
								alt=""
							/>
							{visible && (
								<button
									type="button"
									className="button"
									onClick={() => sendConfiP()}
								>
									Guardar Configuración
								</button>
							)}
							{loading && (
								<>
									<img
										src="https://media.tenor.com/BINsHS7Uo-0AAAAi/temple-loader.gif"
										width={200}
										height={200}
										alt=""
									/>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
