import React from "react";
import "./ResultItem.css";

interface ResultItemProps {
	correct: boolean;
	question: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ correct, question }) => {
	return (
		<div className="item-container">
			<div className="item-icon">{correct ? "+" : "-"}</div>
			<div className="item-question">{question}</div>
		</div>
	);
};

export default ResultItem;
