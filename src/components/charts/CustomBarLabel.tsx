/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSpring, animated } from "@react-spring/web";

const formatValue = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return `${value}`;
};

export const CustomBarLabel = (props: any) => {
  const { x, y, width, value } = props;

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const xOffset = x + width / 2;
  const yOffset = y - 6;

  return (
    <animated.text
      x={xOffset}
      y={yOffset}
      fill="#4b5563"
      textAnchor="middle"
      fontSize={12}
      fontWeight="500"
    >
      {number.to((n) => formatValue(n))}
    </animated.text>
  );
};
