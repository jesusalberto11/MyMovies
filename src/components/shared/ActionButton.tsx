import "../../styles/shared/ActionButton.css";

const ActionButton = (props: {
  title: string;
  icon: string;
  onClickButton: Function;
}) => {
  return (
    <button
      className="action-button centered"
      role="button"
      title={props.title}
      onClick={() => props.onClickButton()}
    >
      <svg width="16" height="16" fill="#FFF" viewBox="0 0 16 16">
        <path d={props.icon} />
      </svg>
      {props.title}
    </button>
  );
};

export default ActionButton;
