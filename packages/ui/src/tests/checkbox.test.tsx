import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Checkbox } from '../components/checkbox';

test('Checkbox element and functionality', async () => {
  render(
    <div className="flex">
      <Checkbox label="one" value="one" className="m-2" name="numbers" />
      <Checkbox label="two" value="two" className="m-2" name="numbers" />
      <Checkbox value="three" label="three" className="m-2" name="numbers" />
    </div>
  );
  const firstCheckbox = screen.getByRole('checkbox', { name: 'one' });
  const secondCheckbox = screen.getByRole('checkbox', { name: 'two' });
  const thirdCheckbox = screen.getByRole('checkbox', { name: 'three' });

  expect(firstCheckbox).toBeInTheDocument();
  expect(secondCheckbox).toBeInTheDocument();
  expect(thirdCheckbox).toBeInTheDocument();

  await user.click(firstCheckbox);
  expect(firstCheckbox).toBeChecked();
  expect(secondCheckbox).not.toBeChecked();
  expect(thirdCheckbox).not.toBeChecked();

  await user.click(thirdCheckbox);
  expect(firstCheckbox).toBeChecked();
  expect(secondCheckbox).not.toBeChecked();
  expect(thirdCheckbox).toBeChecked();
});

test('Checkbox with helper and error text', () => {
  render(
    <div className="flex">
      <Checkbox
        label="one"
        value="one"
        className="m-2"
        name="numbers"
        helperText="Remember me"
      />
      <Checkbox
        label="two"
        value="two"
        className="m-2"
        name="numbers"
        error="This field is required"
      />
    </div>
  );
  const errorHelperText = screen.getAllByRole('alert');
  expect(errorHelperText[0]).toHaveTextContent(/remember me/i);
  expect(errorHelperText[1]).toHaveTextContent(/this field is required/i);
  expect(errorHelperText[1]).toHaveClass('text-red');
});

test('Disabled checkbox', async () => {
  render(
    <Checkbox label="two" value="two" className="m-2" name="numbers" disabled />
  );
  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).toBeDisabled();
  await user.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
});
