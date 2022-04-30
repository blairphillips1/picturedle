import ActionButton from '../ActionButton/ActionButton';
import LetterButton from '../LetterButton/LetterButton';

const topRowLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const middleRowLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const bottomRowLetter = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

interface KeyboardProps {
  handleLetterInput: Function;
  handleDeleteInput: Function;
  handleSpaceInput: Function;
  handleEnterInput: Function;
}

const Keyboard = ({ handleLetterInput, handleSpaceInput, handleDeleteInput, handleEnterInput }: KeyboardProps) => {
  return (
    <div className="keyboard">
      <div className='row'>
        {topRowLetters.map((letter) => <LetterButton key={letter} letter={letter} handleLetterInput={handleLetterInput} />)}
      </div>
      <div className='row'>
        {middleRowLetters.map((letter) => <LetterButton key={letter} letter={letter} handleLetterInput={handleLetterInput} />)}
      </div>
      <div className='row'>
        <ActionButton label={'ENTER'} handleEnterInput={handleEnterInput} />
        {bottomRowLetter.map((letter) => <LetterButton key={letter} letter={letter} handleLetterInput={handleLetterInput} />)}
        <ActionButton label={'DELETE'} handleDeleteInput={handleDeleteInput} />
      </div>
      <div className='row'>
        <ActionButton label={'SPACE'} handleSpaceInput={handleSpaceInput} />
      </div>
    </div>
  );
}

export default Keyboard;
