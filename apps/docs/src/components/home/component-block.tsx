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
    name: "Avatar",
    description:
      "A reusable UI element that represents a user or entity with a profile image or icon",
  },
  {
    id: 2,
    component: (
      <PinCode setValue={() => null} className="bg-white dark:bg-gray-50" />
    ),
    name: "PinCode",
    description:
      "It provides a simple and intuitive way for users to enter a numeric code, such as a PIN or password",
  },
  {
    id: 3,
    component: (
      <Rate
        defaultValue={3}
        tooltips={["Terrible", "Bad", "Normal", "Good", "Wonderful"]}
      />
    ),
    name: "Rate",
    description:
      "It allows users to rate or provide feedback on a particular item, such as a product or service",
  },
  {
    id: 4,
    component: <Pagination defaultCurrent={1} total={25} />,
    name: "Pagination",
    description:
      "A long list can be divided into several pages using Pagination",
  },
  {
    id: 5,
    component: <Badge>Badge</Badge>,
    name: "Badge",
    description:
      "Badges are used as a small numerical value or status descriptor for UI elements",
  },
  {
    id: 6,
    component: <Progressbar value={75} size="xl" label="75%" />,
    name: "Progressbar",
    description:
      "The Progress component display the current progress of an operation flow",
  },
  {
    id: 7,
    component: <Button>Button</Button>,
    name: "Button",
    description: "Primary action button to trigger an operation",
  },
  {
    id: 8,
    component: <Switch size="lg" />,
    name: "Switch",
    description: "A basic widget for getting the user input",
  },
];

export default function ComponentBlock() {
  const history = useHistory();

  return (
    <section className="pt-10 md:pt-16 pb-14 md:pb-20 group">
      <header className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="container mx-auto">
          <Text className="!mb-3 sm:!mb-5 !text-[11px] sm:!text-xs lg:!text-sm font-medium tracking-[4px] uppercase text-gray-500">
            Beautifully Crafted
          </Text>
          <Title
            as="h2"
            className="text-2xl sm:text-3xl lg:text-4xl leading-[1.35] sm:leading-[1.3]"
          >
            35+ Production Ready Components
          </Title>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {components.map((item) => (
            <div
              key={"component-" + item.id}
              className="flex flex-col rounded-xl border border-gray-200 flex-shrink-0 relative shadow-sm overflow-hidden"
            >
              <div className="flex h-full justify-center items-center px-6 py-12 min-h-[256px] border-b border-gray-200 before:h-1/2 before:absolute relative before:bg-gradient-to-t before:from-gray-200/20 before:bottom-0 before:w-full">
                <span className="grid-box absolute inset-0 -z-[1] opacity-70" />
                {item.component}
              </div>
              <div className="p-6">
                <Title as="h5" className="font-semibold !mb-1.5">
                  {item.name}
                </Title>
                <Text className="text-gray-500">5 components</Text>
                {/* <Text className="text-gray-500">{item.description}</Text> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Button
            size="lg"
            variant="outline"
            onClick={() => history.push("/docs/buttons/action-icon")}
            className="min-w-[180px]"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
