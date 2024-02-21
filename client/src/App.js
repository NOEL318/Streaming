import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Juegos } from "./pages/Juegos";
import { Auth } from "./pages/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginwithoutpassword } from "./hooks/userSlice";
import { Account } from "./pages/Account";
import { Streaming } from "./pages/Streaming";
import { Item_Page } from "./components/Item_Page";

function App() {
	const dispatch = useDispatch();
	const { isSucces, user, isLoading } = useSelector((state) => state.Auth);

	useEffect(() => {
		dispatch(loginwithoutpassword());
	}, [isSucces]);

	return (
		<>
			<BrowserRouter>
				<Navbar user={user} />
				<Routes>
					<Route
						index
						path="/"
						element={<Inicio />}
					/>
					<Route
						path="/Auth"
						element={user ? <Inicio /> : <Auth />}
					/>
					<Route
						path="/Account"
						element={user ? <Account user={user} /> : <Auth />}
					/>
					<Route
						path="/Juegos"
						element={<Juegos />}
					/>
					<Route
						path="/Streaming"
						element={<Streaming />}
					/>
					<Route
						path="/Juegos/:_id"
						element={user ? <Item_Page user={user} /> : <Auth />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
