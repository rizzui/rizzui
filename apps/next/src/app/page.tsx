import { Button } from "rizzui/button";
import { ThemeSwitcher } from "./theme";

export default function Page() {
  return (
    <div className="p-12 flex justify-between items-center">
      <Button color="primary">Open Drawer</Button>

      <ThemeSwitcher />
    </div>
  );
}
