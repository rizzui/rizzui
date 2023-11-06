import React from "react";
import { useHistory } from "@docusaurus/router";
import { Button, Title, Text } from "rizzui";
import ButtonBlock from "./button-block";
import TypographyBlock from "./typography-block";
import TabBlock from "./tab-block";
import FeedbackBlock from "./feedback-block";
import DataDisplayBlock from "./data-display-block";
import OverlayBlock from "./overlay-block";
import InputBlock from "./input-block";
import IntegrationBlock from "./integration-block";

const components = [
  {
    id: 1,
    component: <ButtonBlock />,
    name: "Buttons",
    count: 2,
    path: "/docs/buttons/action-icon",
  },
  {
    id: 2,
    component: <InputBlock />,
    name: "Inputs",
    count: 12,
    path: "/docs/inputs/input",
  },
  {
    id: 3,
    component: <TabBlock />,
    name: "Navigation",
    count: 3,
    path: "/docs/navigation/dropdown",
  },
  {
    id: 4,
    component: <FeedbackBlock />,
    name: "Feedback",
    count: 3,
    path: "/docs/feedback/alert",
  },
  {
    id: 5,
    component: <OverlayBlock />,
    name: "Overlays",
    count: 4,
    path: "/docs/overlays/tooltip",
  },
  {
    id: 6,
    component: <DataDisplayBlock />,
    name: "Data Display",
    count: 6,
    path: "/docs/data-display/accordion",
  },
  {
    id: 7,
    component: <TypographyBlock />,
    name: "Typography",
    count: 4,
    path: "/docs/typography/title",
  },
  {
    id: 8,
    component: <IntegrationBlock />,
    name: "Integrations",
    count: 6,
    path: "/docs/Integrations/rate",
  },
];

export default function ComponentBlock() {
  const history = useHistory();

  return (
    <section className="pt-10 md:pt-16 xl:pt-20 2xl:pt-24 pb-14 md:pb-20 group">
      <header className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="container mx-auto">
          <Text className="!mb-3 sm:!mb-5 !text-[11px] sm:!text-xs lg:!text-sm tracking-[4px] uppercase text-gray-500">
            Beautifully Crafted
          </Text>
          <Title
            as="h2"
            className="text-2xl sm:text-3xl lg:text-4xl leading-[1.35] sm:leading-[1.3] font-semibold"
          >
            35+ Production Ready Components
          </Title>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {components.map((item) => (
            <div
              key={"component-" + item.name + item.id}
              onClick={() => history.push(item.path)}
              className="flex flex-col rounded-xl border border-gray-200 flex-shrink-0 relative shadow-sm overflow-hidden group/card cursor-pointer"
            >
              <div className="flex h-full justify-center items-center px-6 py-12 min-h-[256px] border-b border-gray-200/80 before:h-1/2 before:absolute relative before:bg-gradient-to-t before:from-gray-50/70 before:-z-[1] before:bottom-0 before:w-full">
                <span className="grid-box ![background-size:4.22rem_4rem] absolute inset-2 -z-[2] opacity-70" />
                {item.component}
              </div>
              <div className="p-6">
                <Title as="h5" className="font-semibold !mb-1">
                  {item.name}
                </Title>
                <Text className="text-gray-500">{item.count} components</Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 xl:mt-10 2xl:mt-12 flex items-center justify-center">
          <Button
            size="lg"
            variant="outline"
            onClick={() => history.push("/docs/buttons/action-icon")}
            className="min-w-[180px] shadow-sm hover:ring-[0.5px] hover:ring-gray-900"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
