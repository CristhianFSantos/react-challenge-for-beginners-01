import React from "react";
import "./styles.scss";

export interface CustomButtomProps {
  label: string;
  onClick: () => void;
}

const CustomButtom: React.FC<CustomButtomProps> = (
  props: CustomButtomProps
) => {
  return (
    <button className="custom-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export { CustomButtom };
