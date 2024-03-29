// modal.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Modal, type ModalSize } from '../components/modal';
import { Button } from '../components/button';
import { Title, Text } from '../components/typography';
import { ActionIcon } from '../components/action-icon';
import { Input } from '../components/input';
import { Password } from '../components/password';
import { Checkbox } from '../components/checkbox';
import { XIcon } from '../icons/x-mark';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Modal>;

type ModalPropsType = {
  isOpen: boolean;
  size?: ModalSize;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Default = () => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setModalState(true)}>Open Modal</Button>
      <Modal isOpen={modalState} onClose={() => setModalState(false)}>
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Title as="h3">Welcome to AegonUI</Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
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
                  I agree to AegonUI&lsquo;s{' '}
                  <a className="underline">Terms of Service</a> and{' '}
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
};

export const Sizes = () => {
  const [modalState, setModalState] = React.useState<ModalPropsType>({
    isOpen: false,
    size: 'md',
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
              size: 'sm',
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
              size: 'md',
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
              size: 'lg',
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
              size: 'xl',
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
              size: 'full',
            }))
          }
        >
          full
        </Button>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        size={modalState.size}
        onClose={() =>
          setModalState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Title as="h3">Welcome to AegonUI</Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() =>
                setModalState((prevState) => ({ ...prevState, isOpen: false }))
              }
            >
              <XIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
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
                  I agree to AegonUI&lsquo;s{' '}
                  <a className="underline">Terms of Service</a> and{' '}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() =>
                setModalState((prevState) => ({ ...prevState, isOpen: false }))
              }
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const Rounded = () => {
  const [modalState, setModalState] = React.useState<ModalPropsType>({
    isOpen: false,
    rounded: 'md',
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
              rounded: 'none',
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
              rounded: 'sm',
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
              rounded: 'md',
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
              rounded: 'lg',
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
              rounded: 'xl',
            }))
          }
        >
          xl
        </Button>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        rounded={modalState.rounded}
        onClose={() =>
          setModalState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Title as="h3">Welcome to AegonUI</Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() =>
                setModalState((prevState) => ({ ...prevState, isOpen: false }))
              }
            >
              <XIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
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
                  I agree to AegonUI&lsquo;s{' '}
                  <a className="underline">Terms of Service</a> and{' '}
                  <a className="underline">Privacy Policy</a>
                </Text>
              }
            />
            <Button
              type="submit"
              size="lg"
              className="col-span-2 mt-2"
              onClick={() =>
                setModalState((prevState) => ({ ...prevState, isOpen: false }))
              }
            >
              Create an Account
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const WithCustomSize = () => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setModalState(true)}>Custom Size Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        customSize="1080px"
      >
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Title as="h3">Welcome to AegonUI</Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
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
                  I agree to AegonUI&lsquo;s{' '}
                  <a className="underline">Terms of Service</a> and{' '}
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
};

export const WithCustomStyle = () => {
  const [modalState, setModalState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setModalState(true)}>Custom Style Modal</Button>
      <Modal
        isOpen={modalState}
        onClose={() => setModalState(false)}
        overlayClassName="backdrop-blur"
        containerClassName="!max-w-4xl !shadow-2xl"
      >
        <div className="m-auto px-7 pb-8 pt-6">
          <div className="mb-7 flex items-center justify-between">
            <Title as="h3">Welcome to AegonUI</Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => setModalState(false)}
            >
              <XIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 [&_label>span]:font-medium">
            <Input label="First Name *" inputClassName="border-2" size="lg" />
            <Input label="Last Name *" inputClassName="border-2" size="lg" />
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
                  I agree to AegonUI&lsquo;s{' '}
                  <a className="underline">Terms of Service</a> and{' '}
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
};
