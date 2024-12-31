"use client";

import { useState } from "react";
import { Button } from "rizzui/button";
import { Drawer } from "rizzui/drawer";

export default function Page() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div>
      <Button onClick={() => setDrawerState(true)}>Open Drawer</Button>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        // className="z-[9999]"
        // customSize={384}
        // placement="left"
        customSize={384}
        enableResizer={true}
        resizerClassName="bg-red-500"
      >
        <div className="py-4 px-5">Default Drawer</div>
      </Drawer>
    </div>
  );
}
