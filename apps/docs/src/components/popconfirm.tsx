import React from "react";
import { Popconfirm, Button } from "@redq/rizzui";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function PopconfirmActionable() {
  const [state, setState] = React.useState(false);
  return (
    <div className="h-44">
      <Popconfirm
        isOpen={state}
        setIsOpen={setState}
        content={
          <div className="w-56 text-start">
            <span className="mt-2 inline-flex items-center gap-2 text-base">
              <InformationCircleIcon className="h-5 w-5" />
              <p className="font-medium">Delete the task</p>
            </span>
            <p className="mt-2 text-sm">Are you sure you want to delete the task?</p>
            <div className="mt-3 mb-2 flex gap-3">
              <Button
                size="sm"
                onClick={() => setState(false)}
              >
                Yes
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setState(false)}
              >
                No
              </Button>
            </div>
          </div>
        }
        placement="bottom-start"
      >
        <Button
          variant="text"
          className="focus:!ring-0"
        >
          Click on Me!
        </Button>
      </Popconfirm>
    </div>
  );
}
