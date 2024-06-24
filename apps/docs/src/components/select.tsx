import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Select, Text, type SelectProps, type SelectOption, Button } from "rizzui";
import { z } from "zod";

const options = [
  { label: "Apple 🍎", value: "apple" },
  { label: "Banana 🍌", value: "banana" },
  { label: "Cherry 🍒", value: "cherry" },
  { label: "Orange 🍊", value: "orange" },
  { label: "Strawberry 🍓", value: "strawberry" },
  { label: "Watermelon 🍉", value: "watermelon" },
  { label: "Pineapple 🍍", value: "pineapple" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Kiwi 🥝", value: "kiwi" },
  { label: "Blueberry 🫐", value: "blueberry" },
  { label: "Peach 🍑", value: "peach" },
  { label: "Plum 🍑", value: "plum" },
  { label: "Raspberry 🍇", value: "raspberry" },
  { label: "Blackberry 🫐", value: "blackberry" },
  { label: "Pear 🍐", value: "pear" },
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Lemon 🍋", value: "lemon" },
  { label: "Lime 🫒", value: "lime" },
  { label: "Cucumber 🥒", value: "cucumber" },
  { label: "Avocado 🥑", value: "avocado" },
];

export default function SelectBox({
  clearable,
  label = "Select",
  ...props
}: SelectProps<SelectOption>) {
  const [value, setValue] = React.useState<any>(null);

  return (
    <>
      <Select
        options={options}
        onChange={setValue}
        value={value}
        {...(clearable && {
          clearable: value !== null,
          onClear: () => setValue(null),
        })}
        label={label}
        {...props}
      />
    </>
  );
}

export function SelectBoxClearable({
  clearable,
  label = "Select",
  ...props
}: SelectProps<SelectOption>) {
  const [value, setValue] = React.useState<any>(options[0]);

  return (
    <>
      <Select
        options={options}
        onChange={setValue}
        value={value}
        {...(clearable && {
          clearable: value !== null,
          onClear: () => setValue(null),
        })}
        label={label}
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

export function CustomOptionSelectBox({
  clearable,
  label = "Select",
  ...props
}: SelectProps<SelectOption>) {
  const [value, setValue] = React.useState(null);

  return (
    <Select
      label={label}
      options={customOptions}
      value={value}
      onChange={setValue}
      displayValue={(value) => renderDisplayValue(value as any)}
      getOptionDisplayValue={(option) => renderOptionDisplayValue(option)}
      {...props}
    />
  );
}

function renderDisplayValue(value: SelectOption) {
  return (
    <span className="flex items-center gap-2">
      <img
        src={value.avatar}
        alt={value.label}
        className="w-7 h-7 object-cover rounded-full"
      />
      <Text>{value.label}</Text>
    </span>
  );
}

function renderOptionDisplayValue(option: SelectOption) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={option.avatar}
        alt={option.label}
        className="w-9 h-9 object-cover rounded bg-muted"
      />
      <div>
        <Text fontWeight="medium">{option.label}</Text>
        <Text>{option.value}</Text>
      </div>
    </div>
  );
}

// with react hook form and zod validation

const schema = z.object({
  select: z.string().min(1, { message: "Select an option" }),
});

type SchemaType = z.infer<typeof schema>;

export function SelectWithForm() {
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
        name="select"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Select
            label="Select"
            value={value}
            options={options}
            onChange={onChange}
            getOptionValue={(option) => option.value}
            displayValue={(selected) => options?.find((r) => r.value === selected)?.label ?? ""}
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
