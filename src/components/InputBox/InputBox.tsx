interface InputBoxProps {
  input: string;
}

const InputBox = ({ input }: InputBoxProps) => {
  return (
    <div className="inputBox">
      <p>{input}</p>
    </div>
  );
}

export default InputBox;
