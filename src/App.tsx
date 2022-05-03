import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import NoMatch from "./Pages/404/404";

const App: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/result" element={<Result />} />
				<Route
					path="*"
					element={<NoMatch />}
				/>
			</Routes>
		</div>
	);
};

export default App;
