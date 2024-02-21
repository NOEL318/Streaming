import { Card } from "../components/Card";

export const Juegos = () => {
	const games = [
		{
			img_url:
				"https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/o488o/0c02d05f009789c334190f84437b375645bd102f.png",
			title: "GTA V",
			stars: 5,
			descripcion:
				"Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Es el quinto título principal de la serie Grand Theft Auto y fue lanzado en 2013.",
			_id: "52990",
			categoria: "aventura",
			licencia_xbox: "123XBL",
			licencia_playstation: "456PSN",
			licencia_nintendo: "789NIN",
			licencia_steam: "012STM",
		},
		{
			img_url: "https://m.media-amazon.com/images/I/81KGsbq8ekL.jpg",
			title: "The Legend of Zelda: Breath of the Wild",
			stars: 5,
			_id: "54782",
			descripcion:
				"Breath of the Wild: The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura desarrollado y distribuido por Nintendo para las consolas Nintendo Switch y Wii U.",
			categoria: "aventura",
			licencia_xbox: "321XBL",
			licencia_playstation: "654PSN",
			licencia_nintendo: "987NIN",
			licencia_steam: "210STM",
		},
		{
			img_url: "https://eggnsemulator.com/wp-content/uploads/2023/04/Super-Mario-Odyssey-NSP-XCI-ROM.webp",
			title: "Super Mario Odyssey",
			stars: 4,
			_id: "63825",
			descripcion:
				"Super Mario Odyssey es un videojuego de plataformas desarrollado y publicado por Nintendo para la consola Nintendo Switch.",
			categoria: "aventura",
			licencia_xbox: "456XBL",
			licencia_playstation: "789PSN",
			licencia_nintendo: "012NIN",
			licencia_steam: "345STM",
		},
		{
			img_url: "https://i.3djuegos.com/juegos/17805/fifa_22/fotos/ficha/fifa_22-5479208.jpg",
			title: "FIFA 22",
			stars: 4,
			_id: "73951",
			descripcion:
				"FIFA 22 es un videojuego de simulación de fútbol desarrollado y publicado por Electronic Arts como parte de la serie FIFA.",
			categoria: "deportes",
			licencia_xbox: "789XBL",
			licencia_playstation: "012PSN",
			licencia_nintendo: "345NIN",
			licencia_steam: "678STM",
		},
		{
			img_url: "https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg",
			title: "Call of Duty: Warzone",
			stars: 4,
			_id: "85632",
			descripcion: "Warzone es un videojuego gratuito de tipo battle royale desarrollado y publicado por Activision.",
			categoria: "shooter",
			licencia_xbox: "987XBL",
			licencia_playstation: "210PSN",
			licencia_nintendo: "543NIN",
			licencia_steam: "876STM",
		},
		{
			img_url:
				"https://i.blogs.es/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg",
			title: "Red Dead Redemption 2",
			stars: 5,
			_id: "96587",
			descripcion:
				"Red Dead Redemption 2 es un videojuego de acción-aventura desarrollado y publicado por Rockstar Games. Es la precuela de Red Dead Redemption y la tercera entrega de la serie Red Dead.",
			categoria: "aventura",
			licencia_xbox: "210XBL",
			licencia_playstation: "543PSN",
			licencia_nintendo: "876NIN",
			licencia_steam: "098STM",
		},
		{
			img_url: "https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png",
			title: "Minecraft",
			stars: 5,
			descripcion:
				"Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson,​ y posteriormente desarrollado por su empresa, Mojang Studios, fundada por él mismo.",
			_id: "102345",
			categoria: "sandbox",
			licencia_xbox: "XBOX1234",
			licencia_playstation: "PS5678",
			licencia_nintendo: "SWITCH910",
			licencia_steam: "STEAM1122",
		},
		{
			img_url: "https://i.pinimg.com/736x/a4/aa/0b/a4aa0bbacac121b2b14569fc07b50860.jpg",
			title: "Fortnite",
			stars: 4,
			descripcion:
				"Fortnite es un videojuego en línea del tipo battle royale desarrollado y publicado por Epic Games en el año 2017.",
			_id: "112233",
			categoria: "battle royale",
			licencia_xbox: "XBOX2233",
			licencia_playstation: "PS6789",
			licencia_nintendo: "SWITCH345",
			licencia_steam: "STEAM3344",
		},
		{
			img_url: "https://i.pinimg.com/736x/5d/8a/41/5d8a41501af6aab5d2e754de44f58834.jpg",
			title: "The Witcher 3: Wild Hunt",
			stars: 5,
			descripcion: "The Witcher 3: Wild Hunt es un videojuego de rol de acción desarrollado y publicado por CD Projekt RED.",
			_id: "124578",
			categoria: "aventura",
			licencia_xbox: "XBOX4455",
			licencia_playstation: "PS3456",
			licencia_nintendo: "SWITCH678",
			licencia_steam: "STEAM5566",
		},
		{
			img_url: "https://images.igdb.com/igdb/image/upload/t_1080p/co1rcb.jpg",
			title: "Overwatch",
			stars: 4,
			descripcion:
				"Overwatch es un videojuego de disparos en primera persona multijugador en línea desarrollado y publicado por Blizzard Entertainment.",
			_id: "135792",
			categoria: "shooter",
			licencia_xbox: "XBOX6677",
			licencia_playstation: "PS5674",
			licencia_nintendo: "SWITCH345",
			licencia_steam: "STEAM7788",
		},
		{
			img_url: "https://i.etsystatic.com/11277520/r/il/bd236d/1676005621/il_570xN.1676005621_gt1d.jpg",
			title: "Super Smash Bros. Ultimate",
			stars: 5,
			descripcion:
				"Ultimate: Super Smash Bros. Ultimate es un videojuego de lucha desarrollado por Bandai Namco Studios y Sora Ltd. y publicado por Nintendo.",
			_id: "145678",
			categoria: "lucha",
			licencia_xbox: "XBOX9900",
			licencia_playstation: "PS7890",
			licencia_nintendo: "SWITCH876",
			licencia_steam: "STEAM9900",
		},
		{
			img_url: "https://i.pinimg.com/736x/31/96/c1/3196c14ef4255c0965436f0f85497fbb.jpg",
			title: "Assassin's Creed Valhalla",
			stars: 4,
			descripcion:
				"Assassin's Creed Valhalla es un videojuego de acción-aventura desarrollado y publicado por Ubisoft. Es el duodécimo título principal de la serie Assassin's Creed y la secuela directa de Assassin's Creed Odyssey.",
			_id: "156789",
			categoria: "aventura",
			licencia_xbox: "XBOX1122",
			licencia_playstation: "PS2345",
			licencia_nintendo: "SWITCH234",
			licencia_steam: "STEAM1122",
		},
		{
			img_url: "https://i.pinimg.com/474x/37/09/e5/3709e5fc07c93f1d39a98826cf000748.jpg",
			title: "Rocket League",
			stars: 4,
			descripcion:
				"Rocket League es un videojuego que combina el fútbol con los vehículos. Fue desarrollado y publicado por Psyonix.",
			_id: "167890",
			categoria: "deportes",
			licencia_xbox: "XBOX3344",
			licencia_playstation: "PS7890",
			licencia_nintendo: "SWITCH789",
			licencia_steam: "STEAM3344",
		},
		{
			img_url:
				"https://content.halocdn.com/media/Default/community/InfiniteCoverArt/halo_infinite_wallpaper-mobile_1080x1920-a49fb4f750fc4a4d9ae2cc9f58f4e366.jpg",
			title: "Halo Infinite",
			stars: 4,
			descripcion:
				"Halo Infinite es un videojuego de disparos en primera persona desarrollado por 343 Industries y publicado por Xbox Game Studios. Es el sexto juego principal de la serie Halo y sigue al Jefe Maestro en su lucha contra una fuerza alienígena conocida como el Covenant en un vasto mundo abierto.",
			_id: "234567",
			categoria: "shooter",
			licencia_xbox: "XBOX4455",
			licencia_playstation: "PS1122",
			licencia_nintendo: "SWITCH123",
			licencia_steam: "STEAM4455",
		},
		{
			img_url:
				"https://w0.peakpx.com/wallpaper/998/27/HD-wallpaper-pokemon-sword-shield-pokemon-shield-pokemon-sword-pokemon-sword-and-shield.jpg",
			title: "Pokemon Sword and Shield",
			stars: 4,
			descripcion:
				"Pokémon Sword y Shield son dos videojuegos de rol desarrollados por Game Freak y publicados por Nintendo y The Pokémon Company para la consola Nintendo Switch.",
			_id: "178901",
			categoria: "aventura",
			licencia_xbox: "XBOX9999",
			licencia_playstation: "PS8888",
			licencia_nintendo: "SWITCH777",
			licencia_steam: "STEAM7788",
		},
		{
			img_url: "https://cdn.atomix.vg/wp-content/uploads/2017/07/Splatoon-2-Review.jpg",
			title: "Splatoon 2",
			stars: 4,
			descripcion:
				"Splatoon 2 es un videojuego de disparos en tercera persona multijugador en línea desarrollado y publicado por Nintendo para la consola Nintendo Switch.",
			_id: "189012",
			categoria: "shooter",
			licencia_xbox: "XBOX2233",
			licencia_playstation: "PS3344",
			licencia_nintendo: "SWITCH567",
			licencia_steam: "STEAM3344",
		},
		{
			img_url: "https://sm.ign.com/ign_es/game/m/mortal-kom/mortal-kombat-11_d1sx.jpg",
			title: "Mortal Kombat 11",
			stars: 5,
			descripcion:
				"Mortal Kombat 11 es un videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment.",
			_id: "190123",
			categoria: "lucha",
			licencia_xbox: "XBOX6655",
			licencia_playstation: "PS4433",
			licencia_nintendo: "SWITCH332",
			licencia_steam: "STEAM4455",
		},
		{
			img_url:
				"https://ds-images.bolavip.com/news/image?src=https://images.bolavip.com/webp/full/BVP_20230706_BVP_26287_NBA-2K24-Kobe-Bryant-Edition-Cover-Art-Vertical-853x1024.webp&width=853&height=1024",
			title: "NBA 2K24",
			stars: 4,
			descripcion:
				"NBA 2K24 es un videojuego de simulación de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports. Es la entrega más reciente de la serie NBA 2K, que simula la experiencia de la NBA con gráficos realistas y una jugabilidad auténtica.",
			_id: "201234",
			categoria: "deportes",
			licencia_xbox: "XBOX9876",
			licencia_playstation: "PS7654",
			licencia_nintendo: "SWITCH456",
			licencia_steam: "STEAM7788",
		},
		{
			img_url: "https://crazydiscostu.files.wordpress.com/2019/03/destiny-2-crazydiscostu.jpg",
			title: "Destiny 2",
			stars: 4,
			descripcion:
				"Destiny 2 es un videojuego de disparos en primera persona de mundo abierto desarrollado por Bungie. Ambientado en un universo de ciencia ficción, los jugadores asumen el papel de Guardianes, protectores de la última ciudad segura de la Tierra, mientras luchan contra fuerzas alienígenas y protegen la humanidad.",
			_id: "212345",
			categoria: "shooter",
			licencia_xbox: "XBOX4433",
			licencia_playstation: "PS5555",
			licencia_nintendo: "SWITCH789",
			licencia_steam: "STEAM4455",
		},
		{
			img_url: "https://i.pinimg.com/736x/c2/9a/f7/c29af78d0a359c0ba24a18a579d09a78.jpg",
			title: "Animal Crossing: New Horizons",
			stars: 5,
			descripcion:
				"Animal Crossing es una serie de videojuegos de simulación social desarrollada y publicada por Nintendo. Los jugadores se trasladan a un pueblo habitado por animales antropomórficos, donde pueden pescar, atrapar insectos, decorar sus hogares y socializar con los habitantes del pueblo.",
			_id: "223456",
			categoria: "simulación",
			licencia_xbox: "XBOX9876",
			licencia_playstation: "PS8765",
			licencia_nintendo: "SWITCH987",
			licencia_steam: "STEAM5566",
		},
	];

	return (
		<>
			<div className="juegos">
				<h1>Todos los Juegos</h1>
				<div className="cards">
					{games.map((game) => {
						return (
							<Card
								img_url={game.img_url}
								title={game.title}
								stars={game.stars}
								categoria={game.categoria}
								_id={game._id}
								descripcion={game.descripcion}
								key={game._id}
								licencia_xbox={game.licencia_xbox}
								licencia_playstation={game.licencia_playstation}
								licencia_nintendo={game.licencia_nintendo}
								licencia_steam={game.licencia_steam}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
