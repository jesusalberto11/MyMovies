import "../../styles/shared/ActionButton.css";

const ActionButton = (props: {
  title: string;
  icon: string;
  type: any;
  onClickButton: Function;
}) => {
  return (
    <button
      className="action-button centered"
      title={props.title}
      type={props.type ? props.type : "button"}
      onClick={(e) => props.onClickButton(e)}
    >
      <svg width="16" height="16" fill="#FFF" viewBox="0 0 16 16">
        <path d={props.icon} />
      </svg>
      {props.title}
    </button>
  );
};

export default ActionButton;
