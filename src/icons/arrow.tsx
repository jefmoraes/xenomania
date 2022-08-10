import { HTMLAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";


function Arrow( {...rest}:HTMLAttributes<HTMLOrSVGElement>
  ) {
  const {colors} = useContext(ThemeContext)
  return (
    <svg
      fill={colors.sendInput}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      transform="rotate(-270)"
      {...rest}
    >
      <path d="M8.122 24L4 20l8-8-8-8 4.122-4L20 12z"></path>
    </svg>
  );
}

export default Arrow;