import React, { useState, useEffect } from 'react';
import mostZoomed from './assets/test/most_zoomed.png';
import secondZoomed from './assets/test/second_most_zoomed.png';
import fullImage from './assets/test/full_screen_picture.webp';
import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import InputBox from './components/InputBox/InputBox';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';


function App() {
  const images = [mostZoomed, secondZoomed, fullImage];
  const correctAnswer = 'SAMUEL L JACKSON';
  const [ answer, setAnswer ] = useState('');
  const [ attempt, setAttempt ] = useState('');
  const [ image, setImage ] = useState(images[0]);
  const [ attemptNumber, setAttemptNumber ] = useState(0);

  const handleLetterInput = (letter: string) => {
    setAnswer(answer + letter);
  }

  const handleSpaceInput = () => {
    setAnswer(answer + ' ');
  }

  const handleDeleteInput = () => {
    setAnswer(answer.slice(0, -1));
  }

  const handleEnterInput = () => {
    setAttempt(answer);
    setAttemptNumber(attemptNumber + 1);
    if (attempt !== correctAnswer) {
      setAnswer('');
    }
  }

  useEffect(() => {
    if (attemptNumber >= images.length) return;
    setImage(images[attemptNumber]);
  }, [attemptNumber, images])


  return (
    <>
      <Header />
      <div className='spacer'></div>
      <Layout>
        <img src={image} className="App-logo" alt="logo" />
      </Layout>
      <Layout>
        <InputBox input={answer}/>
      </Layout>
      <div className='spacer'></div>
      <Layout >
        {correctAnswer !== attempt && 
          <Keyboard 
            handleLetterInput={handleLetterInput} 
            handleSpaceInput={handleSpaceInput}
            handleDeleteInput={handleDeleteInput}
            handleEnterInput={handleEnterInput}
          />
        }
      </Layout>
      <div className='spacer'></div>
      <Layout>
        {correctAnswer === attempt && 
          <>You are correct</>
        }
        {attempt && correctAnswer !== attempt && 
          <>You are incorrect</>
        }
      </Layout>
  
    </>
  );
}

export default App;
