import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<ul>
					<li>
						<Link to="/">LOGO</Link>
					</li>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/Juegos">Juegos</Link>
					</li>
					<li>
						<Link to="/Peliculas_Series">Películas y Series</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
