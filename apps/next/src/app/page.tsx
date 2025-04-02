"use client";

import { ActionIcon } from "@/components/action-icon";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Password } from "@/components/password";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex justify-between items-center p-12">
      <Button variant="outline">Hello</Button>
      <ActionIcon variant="outline" size="lg">
        <AdjustmentsHorizontalIcon className="w-5 h-5" />
      </ActionIcon>
      <Input
        label="Input"
        suffix={<AdjustmentsHorizontalIcon className="w-5 h-5" />}
        prefix={<AdjustmentsHorizontalIcon className="w-5 h-5" />}
        error="Error message"
      />
      <Password
        label="Password"
        placeholder="Enter your password"
        error="This field is required."
      />
    </div>
  );
}
