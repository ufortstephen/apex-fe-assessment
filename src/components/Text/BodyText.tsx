 
import { textProps } from "../../types/user-types";
export const BodyText = ({
  className,
  text,
  weight,
  color,
  size,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-xs lg:text-sm"} ${
        color ? color : "text-grey"
      } ${weight ? weight : "font-normal"} ${className ? className : ""}   `}
    >
      {text}
    </p>
  );
};

export const SubText = ({
  className,
  text,
  weight,
  color,
  size,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-[12px] lg:text-sm"} ${
        color ? color : "text-secondary-regular"
      } ${weight ? weight : "font-normal"} ${className ? className : ""}   `}
    >
      {text}
    </p>
  );
};
export const LabelText = ({
  className,
  text,
  weight,
  color,
  size,
  lineheight,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-sm lg:text-sm"} ${
        color ? color : "text-label"
      } ${weight ? weight : "font-medium"} ${className ? className : ""} ${
        lineheight ? lineheight : ""
      }    `}
    >
      {text}
    </p>
  );
};
