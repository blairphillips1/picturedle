interface ActionButtonProps {
  label: string;
  handleDeleteInput?: Function;
  handleSpaceInput?: Function;
  handleEnterInput?: Function;
}

const ActionButton = ({ 
  label, 
  handleDeleteInput = () => undefined,
  handleSpaceInput = () => undefined,
  handleEnterInput = () => undefined
 }: ActionButtonProps) => {

  const actionButton = () => {
    if (label === 'ENTER') {
      handleEnterInput();
    }
    if (label === 'DELETE') {
      handleDeleteInput();
    }
    if (label === 'SPACE') {
      handleSpaceInput();
    }
  }

  return (
    <div className="button">
      <button onClick={() => actionButton()}>{label}</button>
    </div>
  );
}

export default ActionButton;
