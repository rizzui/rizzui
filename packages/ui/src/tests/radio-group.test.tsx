import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { RadioGroup } from '../components/radio-group';
import { Radio } from '../components/radio';

function RadioGroupWrapper({ initialValue = '' }: { initialValue?: string }) {
  const [value, setValue] = React.useState<string>(initialValue);
  
  return (
    <RadioGroup value={value} setValue={setValue}>
      <Radio label="Option 1" value="option1" name="group" />
      <Radio label="Option 2" value="option2" name="group" />
      <Radio label="Option 3" value="option3" name="group" />
    </RadioGroup>
  );
}

test('Renders radio group component', () => {
  render(<RadioGroupWrapper />);
  
  const option1 = screen.getByRole('radio', { name: 'Option 1' });
  const option2 = screen.getByRole('radio', { name: 'Option 2' });
  
  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
});

test('Radio group allows single selection', async () => {
  render(<RadioGroupWrapper />);
  
  const option1 = screen.getByRole('radio', { name: 'Option 1' });
  const option2 = screen.getByRole('radio', { name: 'Option 2' });
  const option3 = screen.getByRole('radio', { name: 'Option 3' });
  
  await user.click(option1);
  expect(option1).toBeChecked();
  expect(option2).not.toBeChecked();
  expect(option3).not.toBeChecked();
  
  await user.click(option2);
  expect(option1).not.toBeChecked();
  expect(option2).toBeChecked();
  expect(option3).not.toBeChecked();
});

test('Radio group respects initial value', () => {
  render(<RadioGroupWrapper initialValue="option2" />);
  
  const option1 = screen.getByRole('radio', { name: 'Option 1' });
  const option2 = screen.getByRole('radio', { name: 'Option 2' });
  
  expect(option1).not.toBeChecked();
  expect(option2).toBeChecked();
});

