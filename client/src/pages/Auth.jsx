import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignIn, SignUp } from "../hooks/userSlice";

export const Auth = () => {
	const [username, setusername] = useState();
	const [password, setpassword] = useState();
	const [email, setemail] = useState();
	const dispatch = useDispatch();

	const [signpassword, setsignpassword] = useState();
	const [signemail, setsignemail] = useState();

	const createAccount = async () => {
		dispatch(SignUp({ username, email, password }));
	};
	const signToAccount = async () => {
		dispatch(SignIn({ email: signemail, password: signpassword }));
	};
	return (
		<>
			<div className="sign">
				<div className="float">
					<h1>Crear cuenta</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type="text"
							placeholder="Nombre"
							onChange={(e) => setusername(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Email"
							onChange={(e) => setemail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							onChange={(e) => setpassword(e.target.value)}
						/>
						{username && password && email && (
							<button
								type="submit"
								className="button"
								onClick={createAccount}
							>
								Crear Cuenta
							</button>
						)}
					</form>
					<h1>Iniciar Sesión</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							placeholder="Email"
							onChange={(e) => setsignemail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Contraseña"
							onChange={(e) => setsignpassword(e.target.value)}
						/>
						{signemail && signpassword && (
							<button
								type="submit"
								className="button"
								onClick={signToAccount}
							>
								Iniciar Sesión
							</button>
						)}
					</form>
				</div>
			</div>
		</>
	);
};
