import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import AdvancedRadio from '.';

test('Renders advanced radio buttons and functionality', async () => {
  render(
    <div className="flex gap-4">
      <AdvancedRadio
        name="numbers"
        value="any"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        Any
      </AdvancedRadio>
      <AdvancedRadio
        name="numbers"
        value="one"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        1
      </AdvancedRadio>
      <AdvancedRadio
        name="numbers"
        value="two"
        className="rounded-full border border-gray-300 px-6 py-1.5 hover:cursor-pointer hover:border-gray-900 peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-gray-0"
      >
        2
      </AdvancedRadio>
    </div>
  );
  const firstElement = screen.getByRole('radio', { name: /any/i });
  const secondElement = screen.getByRole('radio', { name: '1' });
  const thirdElement = screen.getByRole('radio', { name: '2' });

  expect(firstElement).toBeInTheDocument();
  expect(secondElement).toBeInTheDocument();
  expect(thirdElement).toBeInTheDocument();

  await user.click(firstElement);
  expect(firstElement).toBeChecked();
  expect(secondElement).not.toBeChecked();
  expect(thirdElement).not.toBeChecked();

  await user.click(thirdElement);
  expect(firstElement).not.toBeChecked();
  expect(secondElement).not.toBeChecked();
  expect(thirdElement).toBeChecked();
});

test('Advanced Radio with complex design and disabled element', async () => {
  render(
    <div className="flex gap-4">
      <AdvancedRadio
        name="payment-secondary"
        value="single"
        disabled
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
      </AdvancedRadio>
      <AdvancedRadio
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
      </AdvancedRadio>
      <AdvancedRadio
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
      </AdvancedRadio>
    </div>
  );

  const firstElement = screen.getByRole('radio', {
    name: /single payment/i,
  });
  const secondElement = screen.getByRole('radio', { name: /subscription/i });
  const thirdElement = screen.getByRole('radio', { name: /lead magnet/i });

  expect(firstElement).toBeInTheDocument();
  expect(secondElement).toBeInTheDocument();
  expect(thirdElement).toBeInTheDocument();

  await user.click(secondElement);
  expect(firstElement).not.toBeChecked();
  expect(secondElement).toBeChecked();
  expect(thirdElement).not.toBeChecked();

  await user.click(thirdElement);
  expect(firstElement).not.toBeChecked();
  expect(secondElement).not.toBeChecked();
  expect(thirdElement).toBeChecked();

  expect(firstElement).toBeDisabled();
  await user.click(firstElement);
  expect(firstElement).not.toBeChecked();
});
