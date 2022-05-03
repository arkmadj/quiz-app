import axios from "axios";

export const getAllQuestions = async () => {
		const response = await axios.get(
			"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
		);
    return response;
};
