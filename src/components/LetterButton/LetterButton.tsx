interface LetterButtonProps {
  letter: string;
  handleLetterInput: Function;
}

const LetterButton = ({ letter, handleLetterInput }: LetterButtonProps) => {
  return (
    <div className="button">
      <button onClick={() => handleLetterInput(letter)}>{letter}</button>
    </div>
  );
}

export default LetterButton;
