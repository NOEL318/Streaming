import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const Item_Page = ({ user }) => {
	const [game, setgame] = useState();
	const [visible, setvisible] = useState(true);
	var x = "";
	useEffect(() => {
		x = localStorage.getItem("view-game");
		setgame(JSON.parse(x));
	}, [1]);

	emailjs.init({
		publicKey: "5kHfOLAqGNXJ0Ard1",
		// Do not allow headless browsers
		blockHeadless: true,
		limitRate: {
			// Set the limit rate for the application
			id: "app",
			// Allow 1 request per 10s
			throttle: 10000,
		},
	});

	const sendEmail = (key) => {
		setvisible(false);
		if (user) {
			var templateParams = {
				from_name: "Galaxy Verse",
				to_name: user.username,
				email: user.email,
				message: key,
			};

			emailjs.send("service_jyjy7kn", "template_galaxy_verse", templateParams).then(
				(response) => {
					//asasa
					const notify = () => toast("Se envió tu Licencia a tu email!", { type: "success" });
					notify();
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
		}
	};

	if (game) {
		return (
			<>
				<ToastContainer />
				<div className="item-page">
					<div className="left">
						<h1>{game.title}</h1>
						<p>{game.descripcion}</p>
						<ReactStars
							count={game.stars}
							color1={"#ffd700"}
							color2={"#FFBF00"}
						/>
						<p className="categoria">Categoría: {game.categoria}</p>
						{visible && (
							<>
								<h4>Obten tu código para tu plataforma favorita:</h4>
								<button
									className="platform xbox"
									onClick={() => sendEmail(game.licencia_xbox)}
								>
									<FaXbox />
									Xbox
								</button>
								<button
									className="platform ps"
									onClick={() => sendEmail(game.licencia_playstation)}
								>
									<FaPlaystation />
									PlayStation
								</button>
								<button
									className="platform nintendo"
									onClick={() => sendEmail(game.licencia_nintendo)}
								>
									<BsNintendoSwitch />
									Nintendo
								</button>
								<button
									className="platform steam"
									onClick={() => sendEmail(game.licencia_steam)}
								>
									<FaSteam />
									Steam
								</button>
							</>
						)}
					</div>
					<div
						className="right"
						style={{ backgroundImage: `url(${game.img_url})` }}
					></div>
				</div>
			</>
		);
	}
};
