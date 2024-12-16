import React from "react";
import { CheckboxGroup, Checkbox, AdvancedCheckbox } from "rizzui";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function CheckboxGroupDefault() {
  const [values, setValues] = React.useState<string[]>(["apple"]);
  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex flex-row gap-4 flex-wrap"
    >
      <Checkbox label="Apple" value="apple" />
      <Checkbox label="Pear" value="pear" />
      <Checkbox label="Orange" value="orange" disabled />
      <Checkbox label="Blueberry" value="blueberry" />
    </CheckboxGroup>
  );
}

export function CheckboxGroupWithCard() {
  const [values, setValues] = React.useState<string[]>(["single"]);

  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-4"
    >
      <AdvancedCheckbox
        name="payment"
        value="single"
        inputClassName="[&:checked~span_.icon]:block"
      >
        <span className="flex justify-between">
          <span className="font-medium text-black">Single Payment</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-primary" />
        </span>
        <p className="text-gray-500">Charge a one-time fee.</p>
      </AdvancedCheckbox>
      <AdvancedCheckbox
        name="payment"
        value="subscription"
        inputClassName="[&:checked~span_.icon]:block"
      >
        <span className="flex justify-between">
          <span className="font-medium text-black">Subscription</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-primary" />
        </span>
        <p className="text-gray-500">Charge an ongoing fee.</p>
      </AdvancedCheckbox>
      <AdvancedCheckbox
        name="payment"
        value="lead"
        inputClassName="[&:checked~span_.icon]:block"
      >
        <span className="flex justify-between">
          <span className="font-medium text-black">Lead Magnet</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-primary" />
        </span>
        <p className="text-gray-500">Allow access for free.</p>
      </AdvancedCheckbox>
    </CheckboxGroup>
  );
}
