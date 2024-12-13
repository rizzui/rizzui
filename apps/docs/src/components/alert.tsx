import React from "react";
// import { Alert, Button } from "rizzui";
import { Button } from "rizzui/button";
import { Alert } from "rizzui/alert";

export default function AlertClearable() {
  const [state, setState] = React.useState(true);
  return (
    <>
      <Button
        onClick={() => setState(true)}
        className="tracking-wider"
      >
        Info Alert
      </Button>
      {state && (
        <Alert
          closable
          color="info"
          variant="flat"
          onClose={() => setState(false)}
        >
          <p className="font-semibold">Alert with info</p>
          <p>Attention All! We are excited to announce the launch of our new product/service.</p>
        </Alert>
      )}
    </>
  );
}
