export interface Question {
  category: string;
  type: string;
  difficutly: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer: string;
}