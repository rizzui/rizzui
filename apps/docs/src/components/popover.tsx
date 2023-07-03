import React from "react";
import { Popover, Button, Avatar } from "rizzui";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function PopoverActionable() {
  return (
    <Popover
      content={({ setOpen }) => (
        <div className="w-56 text-start">
          <span className="inline-flex items-center gap-2 mt-2 text-base">
            <InformationCircleIcon className="w-5 h-5" />
            <p className="font-medium">Delete the task</p>
          </span>
          <p className="mt-2 text-sm">
            Are you sure you want to delete the task?
          </p>
          <div className="flex gap-3 mt-3 mb-2">
            <Button size="sm" onClick={() => setOpen(false)}>
              Yes
            </Button>
            <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
              No
            </Button>
          </div>
        </div>
      )}
      placement="bottom"
    >
      <Button variant="outline">Click Me!</Button>
    </Popover>
  );
}

export function PopoverAvatar() {
  return (
    <Popover
      content={({ setOpen }) => (
        <div className="py-3">
          <div className="flex items-center gap-3 mb-3">
            <Avatar
              name="John Doe"
              src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              className="ring-2 ring-blue ring-offset-2"
              size="lg"
            />
            <div className="text-left">
              <p className="text-base font-medium text-gray-900">
                Fred Chaparro
              </p>
              <p className="text-sm font-light text-gray-500">@fredchaparro</p>
            </div>
          </div>
          <div className="max-w-[240px] text-left text-sm">
            <p className="text-gray-600">
              Full-stack Developer, love to work with @redq. 🎉{" "}
            </p>
            <span className="inline-flex gap-3 mt-3 text-gray-400">
              <p>
                <span className="font-medium">8</span> Following
              </p>
              <p>
                <span className="font-medium">10.5k</span> Followers
              </p>
            </span>
          </div>
          <Button
            className="w-full mt-4"
            variant="solid"
            color="info"
            size="sm"
            onClick={() => setOpen(false)}
          >
            Follow
          </Button>
        </div>
      )}
      placement="bottom"
    >
      <div className="cursor-pointer w-14">
        <Avatar
          name="John Doe"
          src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          size="lg"
        />
      </div>
    </Popover>
  );
}
