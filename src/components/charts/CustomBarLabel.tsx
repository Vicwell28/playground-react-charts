import { useSpring, animated } from "@react-spring/web";
import { formatBarLabelValue } from "@/lib/formatters";

interface CustomBarLabelProps {
  x: number;
  y: number;
  width: number;
  value: number;
}

export const CustomBarLabel = (props: CustomBarLabelProps) => {
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
      {number.to((n) => formatBarLabelValue(n))}
    </animated.text>
  );
};
