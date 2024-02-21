import stream_icon from "../assets/stream_icon.png";
import tira_1 from "../assets/tira_1.jpg";
import tira_2 from "../assets/tira_2.jpg";
import tira_3 from "../assets/tira_3.jpg";
import dc_1 from "../assets/dc_1.avif";
import dc_2 from "../assets/dc_2.webp";
import dc_3 from "../assets/dc_3.jpg";
import meta_1 from "../assets/meta.png";
import multicast_icon from "../assets/multicast.png";
import { FaDownload } from "react-icons/fa6";

export const Inicio = () => {
	return (
		<div className="inicio">
			<div className="main">
				<img
					src={meta_1}
					alt=""
				/>
				<h1 className="title">GalaxyVerse</h1>
			</div>
			<div className="second">
				<div className="cards">
					<div className="card">
						<img
							src={multicast_icon}
							alt=""
							className="icon"
						/>
						<div className="text">
							<p>Explora una amplia selección de películas y videojuegos desde la comodidad de tu hogar.</p>
						</div>
					</div>
					<div className="card">
						<FaDownload className="icon" />
						<div className="text">
							<p>Descarga contenido para ver sin conexión en cualquier momento y en cualquier lugar.</p>
						</div>
					</div>
					<div className="card">
						<img
							src={stream_icon}
							alt=""
							className="icon"
						/>
						<div className="text">
							<p>Disfruta de transmisiones en vivo de eventos especiales y lanzamientos exclusivos solo en GalaxyVerse</p>
						</div>
					</div>
				</div>
			</div>
			<div className="third">
				<h1>Algunos de los Juegos:</h1>
				<div className="joinner">
					<img
						src={tira_1}
						alt=""
						className="tira l"
					/>
					<img
						src={tira_1}
						alt=""
						className="tira l"
					/>
				</div>
				<div className="joinner">
					<img
						src={tira_2}
						alt=""
						className="tira r"
					/>
					<img
						src={tira_2}
						alt=""
						className="tira r"
					/>
				</div>
				<div className="joinner">
					<img
						src={tira_3}
						alt=""
						className="tira d"
					/>
					<img
						src={tira_3}
						alt=""
						className="tira d"
					/>
				</div>
			</div>
			<div className="fourth">
				<div className="right">""</div>
				<div className="left">
					<h1 className="title">"El poder del sol</h1>
					<h1 className="title c-black">En la palma de tus manos"</h1>
					-Otto Octavius
				</div>
			</div>
		</div>
	);
};
