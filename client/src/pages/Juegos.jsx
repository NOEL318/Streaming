import { Card } from "../components/Card";

export const Juegos = () => {
	const games = [
		{
			img_url:
				"https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/o488o/0c02d05f009789c334190f84437b375645bd102f.png",
			title: "GTA V",
			stars: 5,
			_id: "52990",
			categoria: "aventura",
		},
		{
			img_url: "https://m.media-amazon.com/images/I/81KGsbq8ekL.jpg",
			title: "The Legend of Zelda: Breath of the Wild",
			stars: 5,
			_id: "54782",
			categoria: "aventura",
		},
		{
			img_url: "https://eggnsemulator.com/wp-content/uploads/2023/04/Super-Mario-Odyssey-NSP-XCI-ROM.webp",
			title: "Super Mario Odyssey",
			stars: 4,
			_id: "63825",
			categoria: "aventura",
		},
		{
			img_url: "https://i.3djuegos.com/juegos/17805/fifa_22/fotos/ficha/fifa_22-5479208.jpg",
			title: "FIFA 22",
			stars: 4,
			_id: "73951",
			categoria: "deportes",
		},
		{
			img_url: "https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg",
			title: "Call of Duty: Warzone",
			stars: 4,
			_id: "85632",
			categoria: "shooter",
		},
		{
			img_url:
				"https://i.blogs.es/juegos/13424/red_dead_3__nombre_temporal_/fotos/maestras/red_dead_3__nombre_temporal_-4030936.jpg",
			title: "Red Dead Redemption 2",
			stars: 5,
			_id: "96587",
			categoria: "aventura",
		},
		{
			img_url: "https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png",
			title: "Minecraft",
			stars: 5,
			_id: "102345",
			categoria: "sandbox",
		},
		{
			img_url: "https://i.pinimg.com/736x/a4/aa/0b/a4aa0bbacac121b2b14569fc07b50860.jpg",
			title: "Fortnite",
			stars: 4,
			_id: "112233",
			categoria: "battle royale",
		},
		{
			img_url: "https://i.pinimg.com/736x/5d/8a/41/5d8a41501af6aab5d2e754de44f58834.jpg",
			title: "The Witcher 3: Wild Hunt",
			stars: 5,
			_id: "124578",
			categoria: "aventura",
		},
		{
			img_url: "https://images.igdb.com/igdb/image/upload/t_1080p/co1rcb.jpg",
			title: "Overwatch",
			stars: 4,
			_id: "135792",
			categoria: "shooter",
		},
		{
			img_url: "https://i.etsystatic.com/11277520/r/il/bd236d/1676005621/il_570xN.1676005621_gt1d.jpg",
			title: "Super Smash Bros. Ultimate",
			stars: 5,
			_id: "145678",
			categoria: "lucha",
		},
		{
			img_url: "https://i.pinimg.com/736x/31/96/c1/3196c14ef4255c0965436f0f85497fbb.jpg",
			title: "Assassin's Creed Valhalla",
			stars: 4,
			_id: "156789",
			categoria: "aventura",
		},
		{
			img_url: "https://i.pinimg.com/474x/37/09/e5/3709e5fc07c93f1d39a98826cf000748.jpg",
			title: "Rocket League",
			stars: 4,
			_id: "167890",
			categoria: "deportes",
		},
		{
			img_url:
				"https://w0.peakpx.com/wallpaper/998/27/HD-wallpaper-pokemon-sword-shield-pokemon-shield-pokemon-sword-pokemon-sword-and-shield.jpg",
			title: "Pokemon Sword and Shield",
			stars: 4,
			_id: "178901",
			categoria: "aventura",
		},
		{
			img_url: "https://cdn.atomix.vg/wp-content/uploads/2017/07/Splatoon-2-Review.jpg",
			title: "Splatoon 2",
			stars: 4,
			_id: "189012",
			categoria: "shooter",
		},
		{
			img_url: "https://sm.ign.com/ign_es/game/m/mortal-kom/mortal-kombat-11_d1sx.jpg",
			title: "Mortal Kombat 11",
			stars: 5,
			_id: "190123",
			categoria: "lucha",
		},
		{
			img_url:
				"https://ds-images.bolavip.com/news/image?src=https://images.bolavip.com/webp/full/BVP_20230706_BVP_26287_NBA-2K24-Kobe-Bryant-Edition-Cover-Art-Vertical-853x1024.webp&width=853&height=1024",
			title: "NBA 2K24",
			stars: 4,
			_id: "201234",
			categoria: "deportes",
		},
		{
			img_url: "https://crazydiscostu.files.wordpress.com/2019/03/destiny-2-crazydiscostu.jpg",
			title: "Destiny 2",
			stars: 4,
			_id: "212345",
			categoria: "shooter",
		},
		{
			img_url: "https://i.pinimg.com/736x/c2/9a/f7/c29af78d0a359c0ba24a18a579d09a78.jpg",
			title: "Animal Crossing: New Horizons",
			stars: 5,
			_id: "223456",
			categoria: "simulación",
		},
		{
			img_url:
				"https://content.halocdn.com/media/Default/community/InfiniteCoverArt/halo_infinite_wallpaper-mobile_1080x1920-a49fb4f750fc4a4d9ae2cc9f58f4e366.jpg",
			title: "Halo Infinite",
			stars: 4,
			_id: "234567",
			categoria: "shooter",
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
								key={game._id}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
