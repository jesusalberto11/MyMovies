import "../../styles/shared/BackgroundCloser.css";

const BackgroundCloser = (props: { close: Function }) => {
  return (
    <div
      className="background-closer"
      role="presentation"
      onClick={() => props.close()}
    ></div>
  );
};

export default BackgroundCloser;
