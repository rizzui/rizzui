import React, { useState } from "react";
import { CheckboxGroup, Checkbox, AdvancedCheckbox } from "rizzui";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function CheckboxGroupDefault() {
  const [values, setValues] = useState<string[]>([]);
  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex flex-row gap-4"
    >
      <Checkbox
        label="Apple"
        value="apple"
      />
      <Checkbox
        label="Pear"
        value="pear"
      />
      <Checkbox
        label="Orange"
        value="orange"
        disabled
      />
      <Checkbox
        label="Blueberry"
        value="blueberry"
      />
    </CheckboxGroup>
  );
}

export function CheckboxGroupLabelStart() {
  const [values, setValues] = useState<string[]>([]);
  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex flex-col divide-y"
    >
      <Checkbox
        name="column-label-start-group"
        label="Checked Item"
        value="default"
        className="p-2 py-4"
        labelPlacement="start"
        containerClassName="justify-between"
        labelClassName="text-gray-1000 font-medium"
        helperClassName="pr-8"
        helperText="This project would be available to anyone who have the link"
      />
      <Checkbox
        name="column-label-start-group"
        label="Checked Item"
        value="primary"
        className="p-2 py-4"
        labelPlacement="start"
        containerClassName="justify-between"
        labelClassName="text-gray-1000 font-medium"
        helperClassName="pr-8"
        helperText="This project would be available to anyone who have the link"
      />
      <Checkbox
        name="column-label-start-group"
        label="Checked Item"
        value="secondary"
        className="p-2 py-4"
        labelPlacement="start"
        labelClassName="text-gray-1000 font-medium"
        helperText="This project would be available to anyone who have the link"
        helperClassName="pr-8"
        containerClassName="justify-between"
      />
    </CheckboxGroup>
  );
}

export function CheckboxGroupLabelEnd() {
  const [values, setValues] = useState<string[]>([]);
  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex flex-col divide-y"
    >
      <Checkbox
        name="column-label-end-group"
        label="Checked Item"
        value="default"
        helperText="This project would be available to anyone who have the link"
        className="p-2 py-4"
        labelClassName="pl-2 font-medium text-gray-1000"
        helperClassName="ml-8"
      />
      <Checkbox
        name="column-label-end-group"
        label="Checked Item"
        value="primary"
        helperText="This project would be available to anyone who have the link"
        className="p-2 py-4"
        labelClassName="pl-2 font-medium text-gray-1000"
        helperClassName="ml-8"
      />
      <Checkbox
        name="column-label-end-group"
        label="Checked Item"
        value="secondary"
        helperText="This project would be available to anyone who have the link"
        className="p-2 py-4"
        labelClassName="pl-2 font-medium text-gray-1000"
        helperClassName="ml-8"
      />
    </CheckboxGroup>
  );
}

export function CheckboxGroupAdvanced() {
  const [values, setValues] = React.useState<string[]>(["one"]);
  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex gap-4"
    >
      <AdvancedCheckbox
        value="any"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        Any
      </AdvancedCheckbox>
      <AdvancedCheckbox
        value="one"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        1
      </AdvancedCheckbox>
      <AdvancedCheckbox
        value="two"
        className="cursor-not-allowed rounded-full border border-gray-300 px-6 py-1.5 text-gray-300"
        disabled
      >
        2
      </AdvancedCheckbox>
      <AdvancedCheckbox
        value="three"
        defaultChecked
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        3
      </AdvancedCheckbox>
      <AdvancedCheckbox
        value="four"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        4
      </AdvancedCheckbox>
      <AdvancedCheckbox
        value="five+"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        5+
      </AdvancedCheckbox>
    </CheckboxGroup>
  );
}

export function CheckboxGroupWithCard() {
  const [values, setValues] = React.useState<string[]>(["one"]);

  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex gap-4"
    >
      <AdvancedCheckbox
        name="payment-secondary"
        value="single"
        className="flex w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
        inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
      >
        <div className="flex justify-between">
          <span className="font-medium text-black">Single Payment</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-secondary" />
        </div>
        <p className="text-gray-500">Charge a one-time fee.</p>
      </AdvancedCheckbox>
      <AdvancedCheckbox
        name="payment-secondary"
        value="subscription"
        className="flex w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
        inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
      >
        <div className="flex justify-between">
          <span className="font-medium text-black">Subscription</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-secondary" />
        </div>
        <p className="text-gray-500">Charge an ongoing fee.</p>
      </AdvancedCheckbox>
      <AdvancedCheckbox
        name="payment-secondary"
        value="lead"
        defaultChecked
        className="flex w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
        inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
      >
        <div className="flex justify-between">
          <span className="font-medium text-black">Lead Magnet</span>
          <CheckCircleIcon className="icon hidden h-5 w-5 text-secondary" />
        </div>
        <p className="text-gray-500">Allow access for free.</p>
      </AdvancedCheckbox>
    </CheckboxGroup>
  );
}
