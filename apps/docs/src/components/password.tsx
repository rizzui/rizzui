import React from "react";
import { Button, Flex, Password } from "rizzui";

export default function PasswordClearable({ label }) {
  const [state, setState] = React.useState("my_password");
  return (
    <Password
      label={label}
      value={state}
      clearable={true}
      onClear={() => setState("")}
      onChange={(e) => setState(e.target.value)}
      placeholder="Your password"
    />
  );
}

export function PasswordVisibilityToggle() {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Flex
      align="end"
      justify="center"
    >
      <Password
        label="Visibility toggle outside"
        placeholder="Your password"
        hideVisibilityToggleIcon={true}
        isPasswordVisible={showPassword}
        className="grow"
      />
      <Button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </Button>
    </Flex>
  );
}
