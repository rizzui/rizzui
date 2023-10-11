// advanced-checkbox.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { AdvancedCheckbox } from '../components/advanced-checkbox';

export default {
  title: 'Components/AdvancedCheckbox',
  component: AdvancedCheckbox,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof AdvancedCheckbox>;

export const NumbersInDefaultColor = () => (
  <div className="flex space-x-4 rtl:space-x-reverse">
    <AdvancedCheckbox
      name="numbers-default"
      value="any"
      className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
    >
      Any
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="numbers-default"
      value="one"
      className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
    >
      1
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="numbers-default"
      value="two"
      className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
    >
      2
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="numbers-default"
      value="three"
      defaultChecked
      className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
    >
      3
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="numbers-default"
      value="four"
      className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
    >
      4
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="numbers-default"
      value="five+"
      className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
    >
      5+
    </AdvancedCheckbox>
  </div>
);

export const CurrencyInPrimaryColor = () => (
  <div className="flex space-x-4 rtl:space-x-reverse">
    <AdvancedCheckbox
      name="currency-primary"
      value="taka"
      defaultChecked
      className="flex h-28 w-36 flex-col space-y-6 rounded-xl border border-primary-lighter p-3 text-gray-600 hover:cursor-pointer hover:border-primary"
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="font-semibold">Taka</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="currency-primary"
      value="dollar"
      className="flex h-28 w-36 flex-col space-y-6 rounded-xl border border-primary-lighter p-3 text-gray-600 hover:cursor-pointer hover:border-primary"
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="font-semibold">Dollar</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="currency-primary"
      value="euro"
      className="flex h-28 w-36 flex-col space-y-6 rounded-xl border border-primary-lighter p-3 text-gray-600 hover:cursor-pointer hover:border-primary"
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="font-semibold">Euro</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="currency-primary"
      value="pound"
      className="flex h-28 w-36 flex-col space-y-6 rounded-xl border border-primary-lighter p-3 text-gray-600 hover:cursor-pointer hover:border-primary"
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="font-semibold">Pound</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="currency-primary"
      value="rupee"
      className="flex h-28 w-36 flex-col space-y-6 rounded-xl border border-primary-lighter p-3 text-gray-600 hover:cursor-pointer hover:border-primary"
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="font-semibold">Rupee</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="currency-primary"
      value="yen"
      className="flex h-28 w-36 flex-col space-y-6 rounded-xl border border-primary-lighter p-3 text-gray-600 hover:cursor-pointer hover:border-primary"
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="h-9 w-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="font-semibold">Yen</h2>
    </AdvancedCheckbox>
  </div>
);

export const PaymentsInSecondaryColor = () => (
  <div className="flex space-x-4 rtl:space-x-reverse">
    <AdvancedCheckbox
      name="payment-secondary"
      value="single"
      className="flex h-24 w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
      inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
    >
      <div className="flex justify-between">
        <span className="font-medium">Single Payment</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon hidden h-5 w-5 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="text-gray-500">Charge a one-time fee.</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="payment-secondary"
      value="subscription"
      className="flex h-24 w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
      inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
    >
      <div className="flex justify-between">
        <span className="font-medium">Subscription</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon hidden h-5 w-5 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="text-gray-500">Charge an ongoing fee.</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="payment-secondary"
      value="lead"
      defaultChecked
      className="flex h-24 w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
      inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
    >
      <div className="flex justify-between">
        <span className="font-medium">Lead Magnet</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon hidden h-5 w-5 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="text-gray-500">Allow access for free.</h2>
    </AdvancedCheckbox>
    <AdvancedCheckbox
      name="payment-secondary"
      value="pay"
      className="flex h-24 w-52 flex-col space-y-2 rounded-xl border border-secondary-lighter p-5 text-sm hover:cursor-pointer hover:border-secondary"
      inputClassName="[&:checked~span>div>.icon]:block [&:checked~span]:ring-1 [&:checked~span]:ring-offset-0 [&:checked~span]:ring-secondary [&:checked~span]:!border-secondary"
    >
      <div className="flex justify-between">
        <span className="font-medium">Pay what you want</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon hidden h-5 w-5 text-secondary"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="text-gray-500">Customers set the price.</h2>
    </AdvancedCheckbox>
  </div>
);
