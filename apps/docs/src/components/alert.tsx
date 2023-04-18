import React from "react";
import { Alert, Button } from "@redq/rizzui";

export default function AlertClearable() {
  const [state, setState] = React.useState(true);
  return (
    <>
      <Button
        color="info"
        onClick={() => setState(true)}
        className="tracking-wider"
      >
        Info Alert
      </Button>
      {state && (
        <Alert
          color="info"
          variant="flat"
          clearable
          onClear={() => setState(false)}
        >
          <p className="font-semibold">Alert with info</p>
          <p>Attention All! We are excited to announce the launch of our new product/service.</p>
        </Alert>
      )}
    </>
  );
}
