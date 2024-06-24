import { RadialProgressBar } from "rizzui";

const data = [
  {
    trackColor: "#EFF4FF",
    progressColor: "#3872FA",
  },
  {
    trackColor: "#EBFEF8",
    progressColor: "#10b981",
  },
  {
    trackColor: "#FFEEF2",
    progressColor: "#f1416c",
  },
  {
    trackColor: "#F7EEFF",
    progressColor: "#7928ca",
  },
];

export function RadialProgressbarColors() {
  return (
    <>
      {data.map((item, index) => (
        <RadialProgressBar
          key={index}
          value={70}
          trackColor={item.trackColor}
          progressColor={item.progressColor}
        />
      ))}
    </>
  );
}

const dataTwo = [
  {
    trackColor: "#EFF4FF",
    progressColor: "#3872FA",
    gradientColor: "#7928ca",
  },
  {
    trackColor: "#EBFEF8",
    progressColor: "#10b981",
    gradientColor: "#f1416c",
  },
  {
    trackColor: "#FFEEF2",
    progressColor: "#f1416c",
    gradientColor: "#10b981",
  },
  {
    trackColor: "#F7EEFF",
    progressColor: "#7928ca",
    gradientColor: "#3872FA",
  },
];

export function RadialProgressbarGradientColors() {
  return (
    <>
      {dataTwo.map((item, index) => (
        <RadialProgressBar
          key={index}
          value={70}
          trackColor={item.trackColor}
          progressColor={item.progressColor}
          gradientColor={item.gradientColor}
          gradientId={`gradient-${index}`}
        />
      ))}
    </>
  );
}
