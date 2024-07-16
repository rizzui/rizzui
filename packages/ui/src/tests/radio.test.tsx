import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Radio } from '../components/radio';

test('Renders radio buttons and radio functionality', async () => {
  render(
    <div className="flex">
      <Radio label="one" value="one" className="m-2" name="numbers" />
      <Radio label="two" value="two" className="m-2" name="numbers" />
      <Radio value="three" label="three" className="m-2" name="numbers" />
    </div>
  );
  const firstRadio = screen.getByRole('radio', { name: 'one' });
  const secondRadio = screen.getByRole('radio', { name: 'two' });
  const thirdRadio = screen.getByRole('radio', { name: 'three' });

  expect(firstRadio).toBeInTheDocument();
  expect(secondRadio).toBeInTheDocument();
  expect(thirdRadio).toBeInTheDocument();

  await user.click(firstRadio);
  expect(firstRadio).toBeChecked();
  expect(secondRadio).not.toBeChecked();
  expect(thirdRadio).not.toBeChecked();

  await user.click(thirdRadio);
  expect(firstRadio).not.toBeChecked();
  expect(secondRadio).not.toBeChecked();
  expect(thirdRadio).toBeChecked();
});

test('Radio button with helper and error text', () => {
  render(
    <div className="flex">
      <Radio
        label="one"
        value="one"
        className="m-2"
        name="numbers"
        helperText="This radio has value of one"
      />
      <Radio
        label="two"
        value="two"
        className="m-2"
        name="numbers"
        error="This field is required"
      />
    </div>
  );
  const errorHelperText = screen.getAllByRole('alert');
  expect(errorHelperText[0]).toHaveTextContent(/this radio has value of one/i);
  expect(errorHelperText[1]).toHaveTextContent(/this field is required/i);
  expect(errorHelperText[1]).toHaveClass('text-red');
});

test('Disabled radio button', async () => {
  render(
    <Radio label="two" value="two" className="m-2" name="numbers" disabled />
  );
  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeDisabled();
  await user.click(radioElement);
  expect(radioElement).not.toBeChecked();
});
