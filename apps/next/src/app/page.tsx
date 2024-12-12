"use client";

import { Input } from "rizzui/input";
import { NumberInput } from "rizzui/number-input";

export default function Page() {
  return (
    <div className="p-12">
      <NumberInput
        formatType="numeric"
        value="20000000"
        suffix=".00"
        prefix="$"
        displayType="input"
        customInput={Input as React.ComponentType<unknown>}
        {...{ label: "Number Input" }}
      />
    </div>
  );
}
