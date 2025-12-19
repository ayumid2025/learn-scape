import PageLayout from '@/components/layout/PageLayout';
import { CatchyButton } from '@/components/custom/CatchyButton';
import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const quizQuestion = {
  question: 'What is 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctAnswer: '4',
};

const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === quizQuestion.correctAnswer);
  };

  return (
    <PageLayout title="Quiz Time!">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl-soft">
        <h2 className="text-3xl font-bold text-center text-brand-dark mb-6">{quizQuestion.question}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quizQuestion.options.map((option) => (
            <CatchyButton
              key={option}
              variant="default"
              size="lg"
              className={`justify-start text-left h-auto py-4 font-sans ${selectedAnswer === option ? (isCorrect ? 'bg-green-200 border-green-400 text-green-800' : 'bg-red-200 border-red-400 text-red-800') : ''}`}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </CatchyButton>
          ))}
        </div>
        {selectedAnswer && (
          <div className={`mt-6 text-center text-2xl font-bold flex items-center justify-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? <CheckCircle /> : <XCircle />}
            <span>{isCorrect ? 'Correct!' : 'Try again!'}</span>
          </div>
        )}
         <div className="mt-8 text-center">
            <CatchyButton variant="primary" onClick={() => { setSelectedAnswer(null); setIsCorrect(null); }} disabled={selectedAnswer === null}>
                Next Question
            </CatchyButton>
         </div>
      </div>
    </PageLayout>
  );
};

export default QuizPage;