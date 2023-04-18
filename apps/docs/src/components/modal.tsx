import React, { useState } from "react";
import { Modal, Button, Text, ActionIcon, Input, Password, Checkbox } from "@redq/rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function ModalDefault() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Button onClick={() => setModalState(true)}>Open Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
      >
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text tag="h3">Welcome to RizzUI</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon
                className="h-auto w-6"
                strokeWidth={1.8}
              />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input
              label="First Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Last Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to RizzUI&lsquo;s <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState(false)}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function ModalSizes() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    size: "DEFAULT",
  });

  return (
    <>
      <div className="flex items-center justify-around">
        <Button
          variant="outline"
          onClick={() =>
            setModalState((prevState) => ({
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
            setModalState((prevState) => ({
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
            setModalState((prevState) => ({
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
            setModalState((prevState) => ({
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
            setModalState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: "full",
            }))
          }
        >
          full
        </Button>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        size={modalState.size}
        onClose={() => setModalState((prevState) => ({ ...prevState, isOpen: false }))}
      >
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text tag="h3">Welcome to RizzUI</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState((prevState) => ({ ...prevState, isOpen: false }))}
            >
              <XMarkIcon
                className="h-auto w-6"
                strokeWidth={1.8}
              />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input
              label="First Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Last Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to RizzUI&lsquo;s <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState((prevState) => ({ ...prevState, isOpen: false }))}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function ModalRounded() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    rounded: "DEFAULT",
  });

  return (
    <>
      <div className="flex items-center justify-around">
        <Button
          variant="outline"
          onClick={() =>
            setModalState((prevState) => ({
              ...prevState,
              isOpen: true,
              rounded: "none",
            }))
          }
        >
          None
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setModalState((prevState) => ({
              ...prevState,
              isOpen: true,
              rounded: "sm",
            }))
          }
        >
          sm
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setModalState((prevState) => ({
              ...prevState,
              isOpen: true,
              rounded: "DEFAULT",
            }))
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setModalState((prevState) => ({
              ...prevState,
              isOpen: true,
              rounded: "lg",
            }))
          }
        >
          lg
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setModalState((prevState) => ({
              ...prevState,
              isOpen: true,
              rounded: "xl",
            }))
          }
        >
          xl
        </Button>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        rounded={modalState.rounded}
        onClose={() => setModalState((prevState) => ({ ...prevState, isOpen: false }))}
      >
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text tag="h3">Welcome to RizzUI</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState((prevState) => ({ ...prevState, isOpen: false }))}
            >
              <XMarkIcon
                className="h-auto w-6"
                strokeWidth={1.8}
              />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input
              label="First Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Last Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to RizzUI&lsquo;s <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState((prevState) => ({ ...prevState, isOpen: false }))}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function ModalCustomSize() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Button onClick={() => setModalState(true)}>Custom Size Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        customSize="1080px"
      >
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text tag="h3">Welcome to RizzUI</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon
                className="h-auto w-6"
                strokeWidth={1.8}
              />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input
              label="First Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Last Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to RizzUI&lsquo;s <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState(false)}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function ModalCustomStyle() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Button onClick={() => setModalState(true)}>Custom Style Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        overlayClassName="backdrop-blur"
        containerClassName="!max-w-4xl !shadow-2xl"
      >
        <div className="m-auto px-7 pt-6 pb-8">
          <div className="mb-7 flex items-center justify-between">
            <Text tag="h3">Welcome to RizzUI</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XMarkIcon
                className="h-auto w-6"
                strokeWidth={1.8}
              />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-y-6 gap-x-5 [&_label>span]:font-medium">
            <Input
              label="First Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Last Name *"
              inputClassName="border-2"
              size="lg"
            />
            <Input
              label="Email *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Password
              label="Confirm Password *"
              inputClassName="border-2"
              size="lg"
              className="col-span-2"
            />
            <Checkbox
              size="lg"
              inputClassName="border-2"
              className="col-span-2"
              label={
                <Text className="text-sm">
                  I agree to RizzUI&lsquo;s <a className="underline">Terms of Service</a> and{" "}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() => setModalState(false)}
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
