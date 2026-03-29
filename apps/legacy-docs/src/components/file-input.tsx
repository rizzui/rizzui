import React from "react";
import { FileInput } from "rizzui";

export default function FileInputClearable() {
  const [state, setState] = React.useState<any>("");
  return (
    <FileInput
      value={state}
      onChange={(e) => setState(e.target.value)}
      clearable={!!state}
      onClear={() => {
        setState("");
      }}
    />
  );
}
