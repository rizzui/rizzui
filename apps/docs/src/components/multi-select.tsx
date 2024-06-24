import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import {
  MultiSelect,
  type MultiSelectProps,
  type MultiSelectOption,
  Text,
  cn,
  Button,
} from "rizzui";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const options = [
  { label: "Apple 🍎", value: "apple", customOptionKey: "movie" },
  { label: "Banana 🍌", value: "banana", customOptionKey: "footballPlayer" },
  { label: "Cherry 🍒", value: "cherry", customOptionKey: "fight" },
  { label: "Orange 🍊", value: "orange", customOptionKey: "quote" },
  { label: "Strawberry 🍓", value: "strawberry", customOptionKey: "buy" },
  { label: "Watermelon 🍉", value: "watermelon", customOptionKey: "dragon" },
  { label: "Pineapple 🍍", value: "pineapple", customOptionKey: "pLanguage" },
  { label: "Mango 🥭", value: "mango", customOptionKey: "education" },
  { label: "Kiwi 🥝", value: "kiwi", customOptionKey: "serial" },
  { label: "Blueberry 🫐", value: "blueberry", customOptionKey: "name" },
  { label: "Peach 🍑", value: "peach", customOptionKey: "movie" },
  { label: "Plum 🍑", value: "plum", customOptionKey: "footballPlayer" },
  { label: "Raspberry 🍇", value: "raspberry", customOptionKey: "fight" },
  { label: "Blackberry 🫐", value: "blackberry", customOptionKey: "quote" },
  { label: "Pear 🍐", value: "pear", customOptionKey: "buy" },
  { label: "Grapes 🍇", value: "grapes", customOptionKey: "dragon" },
  { label: "Lemon 🍋", value: "lemon", customOptionKey: "pLanguage" },
  { label: "Lime 🫒", value: "lime", customOptionKey: "education" },
  { label: "Cucumber 🥒", value: "cucumber", customOptionKey: "serial" },
  { label: "Avocado 🥑", value: "avocado", customOptionKey: "name" },
];

export default function MultiSelectBox({
  label = "Multi Select",
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([]);
  console.log("customOptionKey", value);
  return (
    <>
      <MultiSelect
        label={label}
        value={value}
        options={options}
        onChange={setValue}
        {...props}
      />
    </>
  );
}

export function MultiSelectBoxClearable({
  label = "Multi Select",
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([options[0].value, options[1].value]);

  return (
    <>
      <MultiSelect
        label={label}
        value={value}
        options={options}
        onChange={setValue}
        {...props}
      />
    </>
  );
}

const customOptions = [
  {
    label: "Wolverine",
    value: "wolverine@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    label: "MessiJr",
    value: "messijr@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    label: "Fighter",
    value: "fighter@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    label: "Missme",
    value: "missme@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    label: "Price",
    value: "price@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    label: "Nightfury",
    value: "nightfury@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    label: "Django",
    value: "django@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    label: "Professor",
    value: "professor@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    label: "Top 4",
    value: "top4@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    label: "Bucky",
    value: "bucky@rizzui.io",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export function MultiSelectBoxCustomOption({
  label = "Multi Select",
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([customOptions[0].value, customOptions[1].value]);

  return (
    <>
      <MultiSelect
        label={label}
        value={value}
        options={customOptions}
        onChange={setValue}
        displayValue={renderDisplayValue}
        getOptionDisplayValue={renderOptionDisplayValue}
        optionClassName="p-0"
        {...props}
      />
    </>
  );
}

function renderDisplayValue(option: MultiSelectOption, handleClearItem: (value: string) => void) {
  return (
    <div className="flex items-center gap-3 p-1">
      <img
        src={option.avatar}
        alt={option.label}
        className="size-8 object-cover rounded-full bg-muted"
      />
      <div>
        <Text fontWeight="medium">{option.label}</Text>
        <Text>{option.value}</Text>
      </div>
      <span
        className="p-1 hover:bg-muted rounded-full cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleClearItem(option.value);
        }}
      >
        <XMarkIcon className="size-4" />
      </span>
    </div>
  );
}

function renderOptionDisplayValue(option: MultiSelectOption, selected: boolean) {
  return (
    <div className={cn("flex items-center gap-3 py-1.5 px-3 pe-4 w-full")}>
      <img
        src={option.avatar}
        alt={option.label}
        className="size-9 object-cover rounded bg-muted"
      />
      <div>
        <Text fontWeight="medium">{option.label}</Text>
        <Text>{option.value}</Text>
      </div>
      {selected && <CheckIcon className="ms-auto size-5" />}
    </div>
  );
}

// with react hook form and zod validation

const schema = z.object({
  multiSelect: z.array(z.string()),
});

type SchemaType = z.infer<typeof schema>;

export function MultiSelectWithForm() {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SchemaType) => {
    console.log("Submitted data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md"
    >
      <Controller
        control={control}
        name="multiSelect"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <MultiSelect
            label="Multi Select"
            value={value}
            options={options}
            onChange={onChange}
            error={error?.message}
            className="w-full max-w-md"
          />
        )}
      />

      <Button
        type="submit"
        className="mt-4 w-full"
      >
        Submit
      </Button>
    </form>
  );
}
