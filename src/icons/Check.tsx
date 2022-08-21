import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

type Props = {
  color?: string;
  strokeWidth?: number;
  height?: number;
  width?: number;
  visible?: boolean;
}

export function Check({
  color, 
  strokeWidth = 3, 
  height = 8, 
  width = 10,
  visible = true,
  ...rest
}: Props){
  const { colors } = useContext(ThemeContext);
  const padding = strokeWidth / 2;

  return(
    <svg     
      {...rest}   
      width={width}
      height={height}
      fill='none'
    >
      <polyline 
        points={`
          ${width - padding}, 
          ${padding} ${width/3},
          ${height - padding} ${padding},
          ${height/2}
        `}
        strokeOpacity={visible ? '1' : '0'}
        stroke={color ? color : colors.text}
        strokeWidth={strokeWidth ? strokeWidth : 2}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </svg>
  );
}