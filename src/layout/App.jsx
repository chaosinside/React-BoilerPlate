import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "../routes/Home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>} />
			</Routes>
		</BrowserRouter>
	);
}