import { FormEventHandler, ReactNode } from "react";
import "../../../styles/components/layout/Form/FormLayout.css";

const FormLayout = (props: {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={props.onSubmit} className="form-layout flex centered">
      {props.children}
    </form>
  );
};

export default FormLayout;
