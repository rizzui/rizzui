import React, { useState } from "react";
import { RadioGroup, Radio, AdvancedRadio } from "@redq/rizz";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function RadioGroupDefault() {
  const [value, setValue] = useState("");

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

export function RadioGroupStartLabel() {
  const [value, setValue] = useState("");
  return (
    <RadioGroup
      value={value}
      setValue={setValue}
      className="justify-center space-x-4 space-y-4"
    >
      <div className="divide-slate-300 flex w-[500px] flex-col divide-y">
        <Radio
          name="column-label-start-group"
          label="Default"
          value="default"
          className="p-2"
          labelPlacement="start"
          containerClassName="justify-between"
          helperText="This project would be available to anyone who have the link"
        />
        <Radio
          name="column-label-start-group"
          label="Primary"
          value="primary"
          className="p-2"
          labelPlacement="start"
          containerClassName="justify-between"
          helperText="This project would be available to anyone who have the link"
        />
        <Radio
          name="column-label-start-group"
          label="Secondary"
          value="secondary"
          className="p-2"
          labelPlacement="start"
          containerClassName="justify-between"
          helperText="This project would be available to anyone who have the link"
        />
      </div>
    </RadioGroup>
  );
}

export function RadioGroupEndLabel() {
  const [value, setValue] = useState("");

  return (
    <RadioGroup
      value={value}
      setValue={setValue}
      className="justify-center space-x-4 space-y-4"
    >
      <div className="divide-slate-300 flex w-[500px] flex-col divide-y">
        <Radio
          name="column-label-end-group"
          label="Warning"
          value="warning"
          className="p-2"
          labelClassName="pl-2"
          helperClassName="ml-8"
          helperText="This project would be available to anyone who have the link"
        />
        <Radio
          name="column-label-end-group"
          label="Success"
          value="success"
          className="p-2"
          labelClassName="pl-2"
          helperClassName="ml-8"
          helperText="This project would be available to anyone who have the link"
        />
        <Radio
          name="column-label-end-group"
          value="Info"
          label="info"
          className="p-2"
          labelClassName="pl-2"
          helperClassName="ml-8"
          helperText="This project would be available to anyone who have the link"
        />
      </div>
    </RadioGroup>
  );
}

export function RadioGroupAdvanced() {
  const [value, setValue] = useState("one");

  return (
    <RadioGroup
      value={value}
      setValue={setValue}
      className="flex gap-4"
    >
      <AdvancedRadio
        value="any"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        Any
      </AdvancedRadio>
      <AdvancedRadio
        value="one"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        1
      </AdvancedRadio>
      <AdvancedRadio
        value="two"
        className="cursor-not-allowed rounded-full border border-gray-300 px-6 py-1.5 text-gray-300"
        disabled
      >
        2
      </AdvancedRadio>
      <AdvancedRadio
        value="three"
        defaultChecked
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        3
      </AdvancedRadio>
      <AdvancedRadio
        value="four"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        4
      </AdvancedRadio>
      <AdvancedRadio
        value="five+"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        5+
      </AdvancedRadio>
    </RadioGroup>
  );
}

export function RadioGroupWithCard() {
  const [value, setValue] = useState("one");

  return (
    <RadioGroup
      value={value}
      setValue={setValue}
      className="flex gap-4"
    >
      <AdvancedRadio
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
      </AdvancedRadio>
      <AdvancedRadio
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
      </AdvancedRadio>
      <AdvancedRadio
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
      </AdvancedRadio>
    </RadioGroup>
  );
}
