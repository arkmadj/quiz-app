import React from "react";
import Button from "../../Components/Button/Button";
import ResultItem from "../../Components/ResultItem/ResultItem";
import "./Result.css";

const Result: React.FC = () => {
	return (
		<div className="page-container">
			<div className="result-container">
				<span className="result-title">You scored</span>
				<span className="result-score">3 / 10</span>
			</div>
			<div className="result-list">
				{[...Array(10)].map((_, i) => (
          <ResultItem correct={false} question="My name is Zultan"/>
				))}
			</div>
			<div className="button-container">
				<Button label="TRUE" />
				<Button label="FALSE" />
			</div>
		</div>
	);
};

export default Result;
