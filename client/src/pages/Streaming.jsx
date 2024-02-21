import { Card } from "../components/Card";

export const Streaming = () => {
	const movies = [
		{
			img_url:
				"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
			title: "The Shawshank Redemption",
			stars: 5,
			_id: "12345",
			categoria: "Drama",
		},
		{
			img_url:
				"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
			title: "The Godfather",
			stars: 5,
			_id: "23456",
			categoria: "Crime",
		},
		{
			img_url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
			title: "Inception",
			stars: 4,
			_id: "34567",
			categoria: "Sci-Fi",
		},
		{
			img_url:
				"https://m.media-amazon.com/images/S/pv-target-images/2d0c9e38968936e6711c7fb2bc7895b82d8bb9178b5a854e14dffa4b17b88487.jpg",
			title: "Forrest Gump",
			stars: 4,
			_id: "45678",
			categoria: "Drama",
		},
		{
			img_url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
			title: "The Dark Knight",
			stars: 5,
			_id: "56789",
			categoria: "Action",
		},
		{
			img_url: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15684_p_v10_ag.jpg",
			title: "Pulp Fiction",
			stars: 5,
			_id: "67890",
			categoria: "Crime",
		},
		{
			img_url:
				"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
			title: "The Matrix",
			stars: 4,
			_id: "78901",
			categoria: "Action",
		},
		{
			img_url: "https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF894,1000_QL80_.jpg",
			title: "Schindler's List",
			stars: 5,
			_id: "89012",
			categoria: "Drama",
		},
		{
			img_url: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28828_p_v8_ao.jpg",
			title: "The Lord of the Rings: The Fellowship of the Ring",
			stars: 5,
			_id: "90123",
			categoria: "Fantasy",
		},
		{
			img_url:
				"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
			title: "The Silence of the Lambs",
			stars: 4,
			_id: "01234",
			categoria: "Thriller",
		},
		{
			img_url: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894,1000_QL80_.jpg",
			title: "Interstellar",
			stars: 5,
			_id: "234567",
			categoria: "Sci-Fi",
		},
		{
			img_url: "https://m.media-amazon.com/images/I/81ZOilPKzYL._AC_UF894,1000_QL80_.jpg",
			title: "The Departed",
			stars: 5,
			_id: "345678",
			categoria: "Thriller",
		},
		{
			img_url: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
			title: "The Green Mile",
			stars: 4,
			_id: "456789",
			categoria: "Fantasy",
		},
		{
			img_url: "https://musicart.xboxlive.com/7/095a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
			title: "Gladiator",
			stars: 4,
			_id: "678901",
			categoria: "Action",
		},
		{
			img_url: "https://musicart.xboxlive.com/7/5f021100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
			title: "Titanic",
			stars: 4,
			_id: "789012",
			categoria: "Romance",
		},
		{
			img_url:
				"https://lh3.googleusercontent.com/proxy/oR40iAM7iCjwjbrxQYnx-U7dVeHS-WViXa7WlMd5B8u5ouVY5NtdsRixq9n9lOGnq7Lsr9zUFrHRQg1sYGbR9UUnjkZs6Ts1oclXr6RUVV9c",
			title: "The Lion King",
			stars: 5,
			_id: "890123",
			categoria: "Adventure",
		},
		{
			img_url:
				"https://static.displate.com/857x1200/displate/2021-12-16/bbce3b4d6226685ecef18ead6594e3d0_bdf788ecf62a64ca8ede416229568c23.jpg",
			title: "Jurassic Park",
			stars: 5,
			_id: "901234",
			categoria: "Adventure",
		},
		{
			img_url:
				"https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
			title: "Inglourious Basterds",
			stars: 4,
			_id: "012345",
			categoria: "War",
		},
	];

	return (
		<>
			<div className="peliculas">
				<h1>Todas las Películas</h1>
				<div className="cards">
					{movies.map((movie) => {
						return (
							<Card
								img_url={movie.img_url}
								title={movie.title}
								stars={movie.stars}
								categoria={movie.categoria}
								_id={movie._id}
								key={movie._id}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
