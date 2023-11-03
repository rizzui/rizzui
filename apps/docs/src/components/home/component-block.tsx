import React from "react";
import { useHistory } from "@docusaurus/router";
import {
  Button,
  Title,
  Text,
  PinCode,
  Progressbar,
  Switch,
  Badge,
  Avatar,
} from "rizzui";
import Rate from "@site/src/components/rate";
import Pagination from "@site/src/components/pagination";

const components = [
  {
    id: 1,
    component: (
      <Avatar
        size="lg"
        src="https://randomuser.me/api/portraits/women/40.jpg"
        name="Jane Doe"
      />
    ),
    name: "Buttons",
    count: 2,
  },
  {
    id: 2,
    component: (
      <PinCode setValue={() => null} className="bg-white dark:bg-gray-50" />
    ),
    name: "Inputs",
    count: 12,
  },
  {
    id: 3,
    component: (
      <Rate
        defaultValue={3}
        tooltips={["Terrible", "Bad", "Normal", "Good", "Wonderful"]}
      />
    ),
    name: "Navigation",
    count: 3,
  },
  {
    id: 4,
    component: <Pagination defaultCurrent={1} total={25} />,
    name: "Feedback",
    count: 3,
  },
  {
    id: 5,
    component: <Badge>Badge</Badge>,
    name: "Overlays",
    count: 4,
  },
  {
    id: 6,
    component: <Progressbar value={75} size="xl" label="75%" />,
    name: "Data Display",
    count: 6,
  },
  {
    id: 7,
    component: <Button>Button</Button>,
    name: "Typography",
    count: 2,
  },
  {
    id: 8,
    component: <Switch size="lg" />,
    name: "Integrations",
    count: 3,
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
              className="flex flex-col rounded-xl border border-gray-200 flex-shrink-0 relative shadow-sm overflow-hidden"
            >
              <div className="flex h-full justify-center items-center px-6 py-12 min-h-[256px] border-b border-gray-200/80 before:h-1/2 before:absolute relative before:bg-gradient-to-t before:from-gray-50/60 before:bottom-0 before:w-full">
                <span className="grid-box ![background-size:4.22rem_4rem] absolute inset-2 -z-[1] opacity-70" />
                {item.component}
              </div>
              <div className="p-6">
                <Title as="h5" className="font-semibold !mb-1.5">
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
            className="min-w-[180px] shadow-sm"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
