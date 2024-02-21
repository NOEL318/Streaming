import { useEffect, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { setAvatar } from "../hooks/useAuth";

export const Account = ({ user }) => {
	const [sex, setsex] = useState();
	const [facecolor, setfacecolor] = useState();
	const [earSize, setearSize] = useState();
	const [hairColor, sethairColor] = useState();
	const [hairStyle, sethairStyle] = useState();
	const [hatColor, sethatColor] = useState();
	const [hatStyle, sethatStyle] = useState();
	const [eyeStyle, seteyeStyle] = useState();
	const [glassesStyle, setglassesStyle] = useState();
	const [noseStyle, setnoseStyle] = useState();
	const [mouthStyle, setmouthStyle] = useState();
	const [shirtStyle, setshirtStyle] = useState();
	const [shirtColor, setshirtColor] = useState();
	const [bgColor, setbgColor] = useState();
	const [eyeBrowStyle, seteyeBrowStyle] = useState();
	useEffect(() => {
		if (user && user.avatar) {
			console.log(user);
			var avatar = user.avatar;
			setsex(avatar.sex);
			sethairStyle(avatar.hairStyle);
			setfacecolor(avatar.faceColor);
			sethairColor(avatar.hairColor);
			setearSize(avatar.earSize);
			seteyeStyle(avatar.eyeStyle);
			setnoseStyle(avatar.noseStyle);
			setmouthStyle(avatar.mouthStyle);
			setshirtStyle(avatar.shirtStyle);
			setglassesStyle(avatar.glassesStyle);
			sethatStyle(avatar.hatStyle);
			sethatColor(avatar.hatColor);
			setshirtColor(avatar.shirtColor);
			seteyeBrowStyle(avatar.eyeBrowStyle);
			setbgColor(avatar.bgColor);
		}
	}, []);
	const config = {
		sex: sex || "man",
		hairStyle: hairStyle || "womanShort",
		faceColor: facecolor || "#695e57",
		hairColor: hairColor || "#000000",
		earSize: earSize || "big",
		eyeStyle: eyeStyle || "smile",
		noseStyle: noseStyle || "round",
		mouthStyle: mouthStyle || "peace",
		shirtStyle: shirtStyle || "polo",
		glassesStyle: glassesStyle || "none",
		hatStyle: hatStyle || "none",
		hatColor: hatColor || "#ffffff",
		shirtColor: shirtColor || "#ffffff",
		eyeBrowStyle: eyeBrowStyle || "upWoman",
		bgColor: bgColor || "#FC909F",
	};
	const sendConfig = () => {
		setAvatar(user._id, config);
	};

	return (
		<>
			<div className="main-account">
				<div className="account">
					<div className="left">
						<h3>Editar Avatar</h3>
						<Avatar
							style={{ width: "500px", height: "500px" }}
							{...config}
						/>
						<h1>{user.username}</h1>
						<h1>{user.email}</h1>
					</div>

					<div className="right">
						<div className="form">
							<div className="part">
								<p>Sexo:</p>
								<button
									type="button"
									className="button"
									onClick={() => setsex("man")}
								>
									Hombre
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setsex("woman")}
								>
									Mujer
								</button>
							</div>

							<p>Color de Cara:</p>
							<input
								className="input"
								onChange={(e) => {
									setfacecolor(e.target.value);
								}}
								type="color"
							></input>

							<div className="part">
								<p>Estilo de Cabello:</p>
								<button
									type="button"
									className="button"
									onClick={() => sethairStyle("normal")}
								>
									Normal
								</button>
								<button
									type="button"
									className="button"
									onClick={() => sethairStyle("thick")}
								>
									Thick
								</button>
								<button
									type="button"
									className="button"
									onClick={() => sethairStyle("mohawk")}
								>
									Mohawk
								</button>
								<button
									type="button"
									className="button"
									onClick={() => sethairStyle("womanLong")}
								>
									Largo
								</button>
								<button
									type="button"
									className="button"
									onClick={() => sethairStyle("womanShort")}
								>
									Corto
								</button>
							</div>

							<p>Color de Cabello:</p>
							<input
								className="input"
								onChange={(e) => {
									sethairColor(e.target.value);
								}}
								type="color"
							></input>

							<div className="part">
								<p>Oído:</p>
								<button
									type="button"
									className="button"
									onClick={() => setearSize("small")}
								>
									Pequeño
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setearSize("big")}
								>
									Grande
								</button>
							</div>

							<div className="part">
								<p>Ojos:</p>
								<button
									type="button"
									className="button"
									onClick={() => seteyeStyle("circle")}
								>
									Circulo
								</button>
								<button
									type="button"
									className="button"
									onClick={() => seteyeStyle("oval")}
								>
									Ovalo
								</button>
								<button
									type="button"
									className="button"
									onClick={() => seteyeStyle("smile")}
								>
									Sonrisa
								</button>
							</div>

							<div className="part">
								<p>Nariz:</p>
								<button
									type="button"
									className="button"
									onClick={() => setnoseStyle("short")}
								>
									Corta
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setnoseStyle("long")}
								>
									Larga
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setnoseStyle("round")}
								>
									Redonda
								</button>
							</div>
							<div className="part">
								<p>Boca:</p>
								<button
									type="button"
									className="button"
									onClick={() => setmouthStyle("laugh")}
								>
									Risa
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setmouthStyle("smile")}
								>
									Sonrisa
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setmouthStyle("peace")}
								>
									Feliz
								</button>
							</div>

							<div className="part">
								<p>Ropa:</p>
								<button
									type="button"
									className="button"
									onClick={() => setshirtStyle("hoody")}
								>
									Hoody
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setshirtStyle("short")}
								>
									Corta
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setshirtStyle("polo")}
								>
									Polo
								</button>
							</div>

							<p>Color de Ropa:</p>
							<input
								className="input"
								onChange={(e) => {
									setshirtColor(e.target.value);
								}}
								type="color"
							></input>

							<div className="part">
								<p>Lentes:</p>
								<button
									type="button"
									className="button"
									onClick={() => setglassesStyle("none")}
								>
									Ninguno
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setglassesStyle("round")}
								>
									Redondos
								</button>
								<button
									type="button"
									className="button"
									onClick={() => setglassesStyle("square")}
								>
									Cuadrados
								</button>
							</div>

							<div className="part">
								<p>Estilo de Sombrero:</p>
								<button
									type="button"
									className="button"
									onClick={() => sethatStyle("none")}
								>
									Ninguno
								</button>
								<button
									type="button"
									className="button"
									onClick={() => sethatStyle("beanie")}
								>
									Gorra
								</button>
								<button
									type="button"
									className="button"
									onClick={() => sethatStyle("turban")}
								>
									Turbante
								</button>
							</div>

							<p>Color de Sombrero:</p>
							<input
								className="input"
								onChange={(e) => {
									sethatColor(e.target.value);
								}}
								type="color"
							></input>

							<div className="part">
								<p>Pestañas: </p>
								<button
									type="button"
									className="button"
									onClick={() => seteyeBrowStyle("up")}
								>
									Normal
								</button>
								<button
									type="button"
									className="button"
									onClick={() => seteyeBrowStyle("upWoman")}
								>
									Fancy
								</button>
							</div>

							<p>Color de Fondo:</p>
							<input
								className="input"
								onChange={(e) => {
									setbgColor(e.target.value);
								}}
								type="color"
							></input>

							<button
								type="button"
								className="button"
								onClick={() => sendConfig()}
							>
								Guardar Configuración
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
