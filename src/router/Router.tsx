import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Quiz from '../components/quiz/Quiz';
import App from '../App';
import Main from '../pages/Main';
import Resault from '../pages/result/Result';
import Email from '../pages/email/Email';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/question/1" />} />
      <Route path="/question/:step" element={<Main/>} />
      <Route path="/email" element={<Email/>} />
      <Route path="/result" element={<Resault/>} />
    </Routes>
  </BrowserRouter>
);
