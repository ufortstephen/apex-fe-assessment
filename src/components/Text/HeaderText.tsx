import { textProps } from "../../types/user-types"; 

export const HeaderOne = ({
  className,
  text,
  weight,
  color,
  size,
  lineheight,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-[28px] lg:text-[48px]"} ${
        color ? color : "text-secondary-general"
      } ${weight ? weight : "font-bold"} ${className ? className : ""} ${
        lineheight ? lineheight : "leading-[57.2px]"
      }  `}
    >
      {text}
    </p>
  );
};
export const HeaderTwo = ({
  className,
  text,
  weight,
  color,
  size,
  lineheight,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-[22px] lg:text-[28px]"} ${
        color ? color : "text-secondary-general"
      } ${weight ? weight : "font-bold"} ${className ? className : ""} ${
        lineheight ? lineheight : "lg:leading-[40.8px]"
      }  `}
    >
      {text}
    </p>
  );
};
export const HeaderThree = ({
  className,
  text,
  weight,
  color,
  size,
  lineheight,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-lg lg:text-xl"} ${
        color ? color : "text-secondary-general"
      } ${weight ? weight : "font-[600]"} ${className ? className : ""} ${
        lineheight ? lineheight : ""
      }  `}
    >
      {text}
    </p>
  );
};
export const HeaderFour = ({
  className,
  text,
  weight,
  color,
  size,
  lineheight,
}: textProps) => {
  return (
    <p
      className={` ${size ? size : "text-sm lg:text-base"} ${
        color ? color : "text-secondary-general"
      } ${weight ? weight : "font-bold"} ${className ? className : ""} ${
        lineheight ? lineheight : ""
      }  `}
    >
      {text}
    </p>
  );
};
