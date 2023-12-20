import React from "react";
import { useHistory } from "@docusaurus/router";
import { Title, Text, cn } from "rizzui";

export default function ComponentCard({ item }: any) {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(item.path)}
      className={cn(
        "flex flex-col rounded-lg border border-muted flex-shrink-0 relative shadow-sm overflow-hidden group/card cursor-pointer transition-all hover:[box-shadow:0_12px_28px_-8px_rgba(0,0,0,0.1)] dark:hover:[box-shadow:0_12px_28px_-8px_rgba(255,255,255,0.05)]"
      )}
    >
      <div className="flex h-full justify-center items-center px-6 py-12 min-h-[256px] border-b border-gray-200/80 before:h-1/2 before:absolute relative before:bg-gradient-to-t before:from-gray-50/70 before:-z-[1] before:bottom-0 before:w-full">
        <span className="grid-box ![background-size:4.22rem_4rem] absolute inset-2 -z-[2] opacity-60 dark:opacity-[0.04]" />
        {item.component}
      </div>
      <div className="p-6">
        <Title as="h5" className="font-semibold !mb-1">
          {item.name}
        </Title>
        <Text className="text-gray-500">{item.count} components</Text>
      </div>
    </div>
  );
}
