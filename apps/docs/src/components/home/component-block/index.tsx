import React from "react";
import NumberFlow from "@number-flow/react";
import { useHistory } from "@docusaurus/router";
import { Button, Title, Text, Box } from "rizzui";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ButtonBlock from "./button-block";
import TypographyBlock from "./typography-block";
import TabBlock from "./tab-block";
import FeedbackBlock from "./feedback-block";
import DataDisplayBlock from "./data-display-block";
import OverlayBlock from "./overlay-block";
import InputBlock from "./input-block";
import IntegrationBlock from "./integration-block";
import ComponentCard from "./component-card";
import { useInView } from "@site/src/utils/hooks/useInView";

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
    count: 15,
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
    count: 4,
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
    count: 7,
    path: "/docs/Integrations/rate",
  },
];

export default function ComponentBlock() {
  const ref = React.useRef(null);
  const history = useHistory();
  const isInView = useInView(ref, {
    rootMargin: "-100px",
    threshold: 0.5,
  });

  return (
    <section className="pt-10 md:pt-16 xl:pt-20 2xl:pt-24 pb-14 md:pb-20 group">
      <header className="text-center mb-8 sm:mb-10 md:mb-12">
        <div ref={ref} className="container mx-auto">
          <Text className="!mb-3 lg:!mb-4 !text-[11px] sm:!text-xs lg:!text-sm tracking-[4px] uppercase text-gray-500">
            Beautifully Crafted
          </Text>
          <Title
            as="h2"
            className="!text-2xl lg:!text-3xl !leading-[1.35] lg:!leading-[1.3] font-semibold"
          >
            <NumberFlow
              value={isInView ? 40 : 0}
              animated={isInView ? true : false}
            />
            + Production Ready Components
          </Title>
        </div>
      </header>

      <div className="!container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {components.map((item, idx) => (
            <ComponentCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>

        <div className="mt-8 xl:mt-10 2xl:mt-12 flex items-center justify-center">
          <Button
            size="lg"
            rounded="pill"
            onClick={() => history.push("/docs/buttons/action-icon")}
            className="min-w-[180px] shadow-sm hover:ring-[0.5px] hover:ring-gray-900 relative !pe-14"
          >
            Explore More{" "}
            <Box
              as={"span"}
              className="size-7 rounded-full inline-flex items-center justify-center bg-gradient-to-tr from-primary to-white/30 dark:to-black/20 text-white dark:text-black absolute end-2"
            >
              <ArrowRightIcon className="size-[17px]" />
            </Box>
          </Button>
        </div>
      </div>
    </section>
  );
}
