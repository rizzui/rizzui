import React from "react";
import { Popconfirm, Button, Avatar } from "rizzui";
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
          Click Me!
        </Button>
      </Popconfirm>
    </div>
  );
}

export function PopconfirmAvatar() {
  const [state, setState] = React.useState(false);

  return (
    <div className="h-44">
      <Popconfirm
        isOpen={state}
        setIsOpen={setState}
        content={
          <div className="py-3">
            <div className="mb-3 flex items-center gap-3">
              <Avatar
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="ring-2 ring-blue ring-offset-2"
                size="48px"
              />
              <div className="text-left">
                <p className="text-base font-medium text-gray-900">Fred Chaparro</p>
                <p className="text-sm font-light text-gray-500">@fredchaparro</p>
              </div>
            </div>
            <div className="max-w-[240px] text-left text-sm">
              <p className="text-gray-600">Full-stack Developer, love to work with @redq. 🎉 </p>
              <span className="mt-3 inline-flex gap-3 text-gray-400">
                <p>
                  <span className="font-medium">8</span> Following
                </p>
                <p>
                  <span className="font-medium">10.5k</span> Followers
                </p>
              </span>
            </div>
            <Button
              className="mt-4 w-full"
              variant="solid"
              color="info"
              size="sm"
              onClick={() => setState(false)}
            >
              Follow
            </Button>
          </div>
        }
        placement="bottom-start"
      >
        <div className="w-14 cursor-pointer">
          <Avatar
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            size="48px"
          />
        </div>
      </Popconfirm>
    </div>
  );
}
