import { ActionIcon } from "@/components/action-icon";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Password } from "@/components/password";
import { Switch } from "@/components/switch";
import { Textarea } from "@/components/textarea";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function Page() {
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
      {/* <Switch label="Default" />
      <Switch label="None" rounded="none" />
      <Switch label="Small" rounded="sm" />
      <Switch label="Medium" rounded="md" />
      <Switch label="Large" rounded="lg" /> */}
    </div>
  );
}
