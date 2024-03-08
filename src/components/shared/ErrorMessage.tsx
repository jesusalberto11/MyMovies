import { SVG_ICONS } from "../../helpers/svgIcons";
import "../../styles/shared/ErrorMessage.css";
import SimpleButton from "./SimpleButton";

const ErrorMessage = (props: { message: string; close: Function }) => {
  return (
    <div className="error-message-container flex centered">
      <p>{props.message}</p>
      <SimpleButton
        showTitle={false}
        title="Close"
        icon={SVG_ICONS.CLOSE}
        onClickItem={() => props.close()}
      />
    </div>
  );
};

export default ErrorMessage;
