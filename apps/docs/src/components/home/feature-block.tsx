import React from "react";
import { Title, Text } from "rizzui";
import MegaPhoneIcon from "../icons/mega-phone";
import ColorSwatchIcon from "../icons/color-swatch";
import RocketIcon from "../icons/rocket";
import ShieldIcon from "../icons/shield";

const features = [
  {
    id: 1,
    icon: <ColorSwatchIcon className="w-6 h-auto" />,
    title: "Fully Customizable",
    description:
      "If you need to customize a component beyond what is available through TailwindCSS classes, you can easily do so by using the component's props.",
  },
  {
    id: 2,
    icon: <RocketIcon className="w-6 h-auto" />,
    title: "Easy to Use",
    description:
      "Our components have a simple and intuitive API that makes them easy to use in your React application.",
  },
  {
    id: 3,
    icon: <ShieldIcon className="w-[26px] h-auto" />,
    title: "Type Safety",
    description:
      "Build type safe applications, all components export types it easier to use TypeScript in your project and provide better type support",
  },
  {
    id: 4,
    icon: <MegaPhoneIcon className="w-[25px] h-auto" />,
    title: "Accessibility",
    description:
      "We have made sure that our components meet accessibility standards so that they can be used by people with disabilities",
  },
];

export default function FeatureBlock() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto">
        <header className="text-center mb-8 sm:mb-10 md:mb-12">
          <Text className="!mb-3 lg:!mb-4 !text-[11px] sm:!text-xs lg:!text-sm tracking-[4px] uppercase text-gray-500">
            Why RizzUI?
          </Text>
          <Title
            as="h2"
            className="text-2xl lg:text-3xl leading-[1.35] lg:leading-[1.3] font-semibold"
          >
            A Next Gen UI Library with <br className="hidden sm:inline-block" /> Limitless
            Customization Options
          </Title>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title + feature.id}
              className="border border-gray-200 shadow-sm rounded-lg pt-8 pb-7 px-6"
            >
              <div className="h-11 w-11 xl:w-12 xl:h-12 rounded-md text-gray-900 mb-6 border border-gray-200 bg-gradient-to-t from-gray-100/60 flex items-center justify-center">
                {feature.icon}
              </div>
              <Title
                as="h5"
                className="font-semibold"
              >
                {feature.title}
              </Title>
              <Text className="leading-loose text-gray-600 dark:text-gray-500">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
