import { RadialProgressBar } from "rizzui";

const data = [
  {
    size: 80,
    trackColor: "#F7EEFF",
    progressColor: "#7928ca",
  },
  {
    size: 100,
    trackColor: "#EBFEF8",
    progressColor: "#10b981",
  },
  {
    size: 120,
    trackColor: "#FFEEF2",
    progressColor: "#f1416c",
  },
];

export function RadialProgressbarColors() {
  return (
    <>
      {data.map((item, index) => (
        <RadialProgressBar
          key={index}
          value={70}
          size={item.size}
          trackColor={item.trackColor}
          progressColor={item.progressColor}
        />
      ))}
    </>
  );
}
