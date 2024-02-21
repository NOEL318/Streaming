import { Link } from "react-router-dom";
import { SignOut } from "../hooks/userSlice";
import { useDispatch } from "react-redux";

export const Navbar = ({ user }) => {
	const dispatch = useDispatch();
	const logout = async () => {
		dispatch(SignOut());
	};
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
						<Link to="/Streaming">Streaming</Link>
					</li>
					<li>{user ? <Link to={"/Account"}>{user.username}</Link> : <Link to={"/Auth"}>Sesión</Link>}</li>

					{user && <li onClick={logout}>Cerrar Sesión</li>}
				</ul>
			</div>
		</>
	);
};
