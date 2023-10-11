import React, { useState } from "react";
import {
  Button,
  Drawer,
  Text,
  ActionIcon,
  Badge,
  Empty,
  EmptyProductBoxIcon,
} from "rizzui";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function DrawerDefault() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <Button onClick={() => setDrawerState(true)}>Open Drawer</Button>
      <Drawer isOpen={drawerState} onClose={() => setDrawerState(false)}>
        <div className="py-4 px-5">Default Drawer</div>
      </Drawer>
    </>
  );
}

export function DrawerSizes() {
  const [drawerSate, setDrawerState] = useState<any>({
    isOpen: false,
    size: "DEFAULT",
  });

  return (
    <>
      <div className="flex items-center justify-around gap-2 flex-wrap">
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: "sm",
            }))
          }
        >
          sm
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: "DEFAULT",
            }))
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: "lg",
            }))
          }
        >
          lg
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: "xl",
            }))
          }
        >
          xl
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: "full",
            }))
          }
        >
          full
        </Button>
      </div>
      <Drawer
        isOpen={drawerSate.isOpen}
        size={drawerSate.size}
        onClose={() =>
          setDrawerState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        <div className="py-4 px-5">
          This is{" "}
          <Text as="strong">
            &quot;
            {drawerSate.size}
            &quot;
          </Text>{" "}
          size Drawer
        </div>
      </Drawer>
    </>
  );
}

export function DrawerPlacement() {
  const [drawerSate, setDrawerState] = useState<any>({
    isOpen: false,
    placement: "left",
  });

  return (
    <>
      <div className="relative py-5">
        <div className="flex h-72 flex-col items-center justify-between">
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: "top",
              }))
            }
          >
            Top Drawer
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: "bottom",
              }))
            }
          >
            Bottom Drawer
          </Button>
        </div>
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-around">
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: "left",
              }))
            }
          >
            Left Drawer
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: "right",
              }))
            }
          >
            Right Drawer
          </Button>
        </div>
      </div>
      <Drawer
        isOpen={drawerSate.isOpen}
        placement={drawerSate.placement}
        onClose={() =>
          setDrawerState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        <div className="py-4 px-5">
          The drawer placement on the{" "}
          <Text as="strong">
            &quot;
            {drawerSate.placement}
            &quot;
          </Text>
        </div>
      </Drawer>
    </>
  );
}

export function DrawerCustomSize() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <Button onClick={() => setDrawerState(true)}>Custom Size Drawer</Button>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        customSize="600px"
      >
        <div className="py-4 px-5">Custom Size = 600px</div>
      </Drawer>
    </>
  );
}

export function DrawerCustomStyle() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <Button onClick={() => setDrawerState(true)}>Custom Style Drawer</Button>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        overlayClassName="backdrop-blur"
        containerClassName="!max-w-[calc(100%-480px)] !shadow-2xl"
      >
        <div className="py-4 px-5">Custom Style</div>
      </Drawer>
    </>
  );
}

export function DrawerIcons() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setDrawerState(true)}
        className="relative inline-flex cursor-pointer"
      >
        <ShoppingBagIcon className="h-auto w-8" strokeWidth={1.2} />
        <Badge
          size="sm"
          enableOutlineRing
          className="absolute right-1 top-0.5 -translate-y-1/3 translate-x-1/2"
        >
          0
        </Badge>
      </div>
      <Drawer isOpen={drawerState} onClose={() => setDrawerState(false)}>
        <div className="flex min-h-full flex-col py-4 px-5">
          <header className="flex items-center justify-between">
            <Text as="h4">Shopping Cart</Text>
            <ActionIcon
              size="sm"
              variant="outline"
              rounded="DEFAULT"
              onClick={() => setDrawerState(false)}
            >
              <XMarkIcon className="h-auto w-5" strokeWidth={1.5} />
            </ActionIcon>
          </header>
          {/* End of drawer header */}
          <div className="flex flex-grow flex-col items-center justify-center">
            <Empty
              image={<EmptyProductBoxIcon />}
              text="No Product Available"
              textClassName="mt-1 text-gray-500"
            />
          </div>
          {/* End of drawer body */}
          <Button size="lg" className="sticky bottom-0 z-10">
            Proceed to Checkout
          </Button>
          {/* End of drawer footer */}
        </div>
      </Drawer>
    </>
  );
}
