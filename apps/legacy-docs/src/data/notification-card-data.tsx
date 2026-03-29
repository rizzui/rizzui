import React from "react";
import { NotificationCard, cn } from "rizzui";
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
          "max-w-xs transition-all ease-in-out duration-300 bg-green-lighter",
          t.visible ? "" : "translate-x-[150%]",
        )}
        className="[&_h2]:!mb-0"
      />
    ),
    {
      duration: 5000,
      position: "top-right",
    },
  );
