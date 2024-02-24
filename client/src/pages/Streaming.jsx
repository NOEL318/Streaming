import { TwitchEmbed } from "react-twitch-embed";
import React, { useRef } from "react";

export const Streaming = () => {
	const embed = useRef(); // We use a ref instead of state to avoid rerenders.

	const handleReady = (e) => {
		embed.current = e;
	};

	return (
		<>
			<div className="peliculas">
				<h1>Juegos</h1>
				<div className="cards">
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=elfedelobo&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=elxokas&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=mongraal&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=akim&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=elmariana&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
				</div>
				<h1>Software y Desarrolladores de Juegos</h1>
				<div className="cards">
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=jitspoe&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=piratesoftware&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>

					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=booyagrandmma&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>

					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=cruelrice&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>

					<div className="card">
						<iframe
							src="https://player.twitch.tv/?autoplay=false&channel=evanmmo&parent=streaming-tan.vercel.app"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						></iframe>
					</div>
				</div>
				<p>Próximamente Tus Streamers Favoritos...</p>
			</div>
		</>
	);
};
