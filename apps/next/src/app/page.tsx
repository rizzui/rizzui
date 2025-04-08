"use client";

import { ActionIcon } from "@/components/action-icon";
import { AdvancedCheckbox } from "@/components/advanced-checkbox";
import { AdvancedRadio } from "@/components/advanced-radio";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Input } from "@/components/input";
import { MultiSelect } from "@/components/multi-select";
import { Password } from "@/components/password";
import { PinCode } from "@/components/pin-code";
import { Radio } from "@/components/radio";
import { Select } from "@/components/select";
import { Switch } from "@/components/switch";
import { Textarea } from "@/components/textarea";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const options = [
  { label: "Apple 🍎", value: "apple" },
  { label: "Banana 🍌", value: "banana" },
  { label: "Cherry 🍒", value: "cherry" },
  { label: "Date 🍇", value: "date" },
  { label: "Elderberry 🍇", value: "elderberry" },
  { label: "Fig 🍈", value: "fig" },
  { label: "Grape 🍇", value: "grape" },
  { label: "Honeydew 🍈", value: "honeydew" },
  { label: "Kiwi 🥝", value: "kiwi" },
  { label: "Lemon 🍋", value: "lemon" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Nectarine 🍑", value: "nectarine" },
  { label: "Orange 🍊", value: "orange" },
  { label: "Papaya 🍈", value: "papaya" },
  { label: "Quince 🍐", value: "quince" },
  { label: "Raspberry 🍓", value: "raspberry" },
  { label: "Strawberry 🍓", value: "strawberry" },
  { label: "Tangerine 🍊", value: "tangerine" },
  { label: "Ugli Fruit 🍊", value: "ugli-fruit" },
  { label: "Watermelon 🍉", value: "watermelon" },
];

export default function Page() {
  // const [value, setValue] = useState<string[]>([]);
  return (
    <div className=" p-12">
      {/* <Button variant="outline">Hello</Button>
      <ActionIcon variant="outline" size="lg">
        <AdjustmentsHorizontalIcon className="w-5 h-5" />
      </ActionIcon>
      */}
      {/* <Input
        label="Input"
        suffix={<AdjustmentsHorizontalIcon className="w-5 h-5" />}
        prefix={<AdjustmentsHorizontalIcon className="w-5 h-5" />}
        placeholder="Enter your password"
        error="Error message"
      /> */}
      {/* <Password
        label="Password"
        placeholder="Enter your password"
        helperText="Hello"
      /> */}
      {/* <Textarea
        label="Textarea"
        placeholder="Write your message..."
        error="Error message"
        helperText="Hello"
        clearable
        disabled
        /> */}
      {/* <Switch label="None" rounded="none" disabled /> */}
      {/* <Switch label="Default" />
      <Switch label="Small" rounded="sm" />
      <Switch label="Medium" rounded="md" />
      <Switch label="Large" rounded="lg" /> */}
      {/* <Checkbox className="m-2" label="Outline" variant="outline" disabled /> */}
      {/* <Checkbox className="m-2" label="Flat" variant="flat" disabled /> */}
      {/* <div className="flex flex-wrap gap-6">
        <AdvancedCheckbox name="age" value="any" alignment="center">
          Any
        </AdvancedCheckbox>
        <AdvancedCheckbox
          name="age"
          value="one"
          defaultChecked
          alignment="center"
        >
          1
        </AdvancedCheckbox>
        <AdvancedCheckbox name="age" value="two" alignment="center">
          2
        </AdvancedCheckbox>
        <AdvancedCheckbox name="age" value="three" disabled alignment="center">
          3
        </AdvancedCheckbox>
        <AdvancedCheckbox name="age" value="four" alignment="center">
          4
        </AdvancedCheckbox>
        <AdvancedCheckbox name="age" value="five+" alignment="center">
          5+
        </AdvancedCheckbox>
      </div> */}
      {/* <Radio className="m-2" label="Outline" disabled />
      <Radio className="m-2" label="Flat" variant="flat" disabled /> */}
      {/* <div className="flex flex-wrap gap-6">
        <AdvancedRadio name="age" value="any" alignment="center">
          Any
        </AdvancedRadio>
        <AdvancedRadio name="age" value="one" defaultChecked alignment="center">
          1
        </AdvancedRadio>
        <AdvancedRadio name="age" value="two" alignment="center">
          2
        </AdvancedRadio>
        <AdvancedRadio name="age" value="three" disabled alignment="center">
          3
        </AdvancedRadio>
        <AdvancedRadio name="age" value="four" alignment="center">
          4
        </AdvancedRadio>
        <AdvancedRadio name="age" value="five+" alignment="center">
          5+
        </AdvancedRadio>
      </div> */}
      {/* <Select
        label="Select"
        options={options}
        value={value}
        onChange={setValue}
        inPortal={false}
      /> */}
      {/* <MultiSelect
        value={value}
        options={options}
        label="Multi Select"
        onChange={setValue}
        error="Error message"
        helperText="Helper text"
      /> */}

      {/* <PinCode center={false} error="This field is required" /> */}
    </div>
  );
}
