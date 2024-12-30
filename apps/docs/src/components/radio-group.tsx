import React from "react";
import { RadioGroup, Radio, AdvancedRadio } from "rizzui";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function RadioGroupDefault() {
  const [value, setValue] = React.useState("apple");

  return (
    <RadioGroup
      value={value}
      setValue={setValue}
      className="flex flex-wrap gap-6"
    >
      <Radio
        label="Apple"
        value="apple"
      />
      <Radio
        label="Pear"
        value="pear"
      />
      <Radio
        label="Orange"
        value="orange"
        disabled
      />
      <Radio
        label="Blueberry"
        value="blueberry"
      />
    </RadioGroup>
  );
}

export function RadioGroupWithCard() {
  const [value, setValue] = React.useState("single");

  return (
    <RadioGroup
      value={value}
      setValue={setValue}
      className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-4"
    >
      <AdvancedRadio
        name="payment"
        value="single"
        inputClassName="[&:checked~span_.icon]:block"
      >
        <span className="flex justify-between">
          <span className="font-medium text-black">Single Payment</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-primary" />
        </span>
        <p className="text-gray-500">Charge a one-time fee.</p>
      </AdvancedRadio>
      <AdvancedRadio
        name="payment"
        value="subscription"
        inputClassName="[&:checked~span_.icon]:block"
      >
        <span className="flex justify-between">
          <span className="font-medium text-black">Subscription</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-primary" />
        </span>
        <p className="text-gray-500">Charge an ongoing fee.</p>
      </AdvancedRadio>
      <AdvancedRadio
        name="payment"
        value="lead"
        inputClassName="[&:checked~span_.icon]:block"
      >
        <span className="flex justify-between">
          <span className="font-medium text-black">Lead Magnet</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-primary" />
        </span>
        <p className="text-gray-500">Allow access for free.</p>
      </AdvancedRadio>
    </RadioGroup>
  );
}
