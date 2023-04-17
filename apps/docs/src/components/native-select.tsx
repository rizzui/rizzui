import React, { useState } from "react";
import { NativeSelect } from "@redq/rizz";

const options = [
  {
    id: 1,
    name: "John",
    value: "John",
  },
  {
    age: 20,
    id: 2,
    name: "Doe",
    value: "Doe",
  },
  {
    class: 12,
    id: 3,
    name: "Miller",
    value: "Miller",
  },
  {
    id: 4,
    name: "James",
    value: "James",
  },
  {
    disabled: true,
    id: 5,
    name: "Franky",
    value: "Franky",
  },
];

export default function NativeSelectDefault({
  variant,
  label,
  size,
  rounded,
  color,
  disabled,
  clearable,
  dropDownIcon,
  helperText,
  error,
}) {
  const [value, setValue] = useState([]);

  return (
    <NativeSelect
      size={size}
      label={label}
      variant={variant}
      options={options}
      rounded={rounded}
      selectedValue={value}
      setSelectedValue={setValue}
      placeholder="Choose option from below"
      color={color}
      disabled={disabled}
      clearable={clearable}
      dropDownIcon={dropDownIcon}
      helperText={helperText}
      error={error}
    />
  );
}
