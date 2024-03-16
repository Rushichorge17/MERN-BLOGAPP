import { useState } from 'react';

export default function RandomQuestions() {
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  });

  const handleChange = (e, questionNumber) => {
    const { value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNumber]: value
    }));
  };

  const handleSubmit = () => {
    // Handle submission of answers here, you can send answers to backend or perform any other action
    console.log(answers);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Random Questions for JourneyJot</h1>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Question 1: How do I create an account on JourneyJot?</h2>
          <textarea
            className="w-full h-20 border rounded-md p-2"
            value={answers[1]}
            onChange={e => handleChange(e, 1)}
          ></textarea>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Question 2: Can I publish my own blog posts on JourneyJot?</h2>
          <textarea
            className="w-full h-20 border rounded-md p-2"
            value={answers[2]}
            onChange={e => handleChange(e, 2)}
          ></textarea>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Question 3: Is there a limit to the number of blog posts I can read per day?</h2>
          <textarea
            className="w-full h-20 border rounded-md p-2"
            value={answers[3]}
            onChange={e => handleChange(e, 3)}
          ></textarea>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Question 4: How can I reset my password if I forget it?</h2>
          <textarea
            className="w-full h-20 border rounded-md p-2"
            value={answers[4]}
            onChange={e => handleChange(e, 4)}
          ></textarea>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Question 5: Does JourneyJot offer any premium features for users?</h2>
          <textarea
            className="w-full h-20 border rounded-md p-2"
            value={answers[5]}
            onChange={e => handleChange(e, 5)}
          ></textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
