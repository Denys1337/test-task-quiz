import { QuizAnswer } from "../types/types";
import { getStoredData } from "./answerStorage";

export const generateCSVData = () => {
    const storedData = getStoredData();
    const data = [
      ['order', 'title', 'type', 'answer'],
      ...storedData.map((item: QuizAnswer) => [
        item.order,
        item.title,
        item.type,
        item.answer.join('; '),
      ]),
    ];

    return data.map((row) => row.join(',')).join('\n');
  };

export const downloadCSV = () => {
    const csvData = generateCSVData();
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'answers.csv');
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };