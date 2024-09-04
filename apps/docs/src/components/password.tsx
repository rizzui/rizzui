import React from "react";
import { Password } from "rizzui";

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
  const [state, setState] = React.useState("my_password");
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <Password
        label={"Visibility Toggle from outside"}
        value={state}
        clearable={true}
        onClear={() => setState("")}
        onChange={(e) => setState(e.target.value)}
        placeholder="Your password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
}
