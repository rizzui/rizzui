import React from "react";
import { Text } from "rizzui";

export default function TypographyBlock() {
  return (
    <div className="flex items-end gap-1 text-gray-400">
      <Text
        as="span"
        className="text-8xl md:text-9xl font-bold group-hover/card:font-thin transition-all duration-200"
      >
        A
      </Text>
      <Text as="span" className="text-8xl md:text-9xl">
        a
      </Text>
    </div>
  );
}
