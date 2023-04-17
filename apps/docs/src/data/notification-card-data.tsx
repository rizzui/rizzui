import React from "react";
import { NotificationCard, cn } from "@redq/rizz";
import toast from "react-hot-toast";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const notification = () =>
  toast.custom(
    (t) => (
      <NotificationCard
        title="Success"
        description="This is a success notification toast."
        media={<CheckCircleIcon className="h-6 w-6 text-green" />}
        variant="flat"
        color="success"
        onClear={() => toast.dismiss(t.id)}
        containerClassName={cn(
          "max-w-xs transition-transform ease-in-out bg-green-lighter",
          t.visible ? "" : "translate-x-[150%] duration-300"
        )}
        className="[&_h2]:!mb-0"
      />
    ),
    {
      duration: 10000,
      position: "top-right",
    }
  );
