import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Juegos } from "./pages/Juegos";
import { Peliculas_Series } from "./pages/Peliculas_Series";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					index
					path="/"
					element={<Inicio />}
				/>
				<Route
					path="/Juegos"
					element={<Juegos />}
				/>
				<Route
					path="/Peliculas_Series"
					element={<Peliculas_Series />}
				/>
			</Routes>
		</>
	);
}

export default App;
