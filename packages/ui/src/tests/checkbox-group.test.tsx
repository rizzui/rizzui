import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { CheckboxGroup } from '../components/checkbox-group';
import { Checkbox } from '../components/checkbox';

function CheckboxGroupWrapper({ initialValues = [] }: { initialValues?: string[] }) {
  const [values, setValues] = React.useState<string[]>(initialValues);
  
  return (
    <CheckboxGroup values={values} setValues={setValues}>
      <Checkbox label="Option 1" value="option1" name="group" />
      <Checkbox label="Option 2" value="option2" name="group" />
      <Checkbox label="Option 3" value="option3" name="group" />
    </CheckboxGroup>
  );
}

test('Renders checkbox group component', () => {
  render(<CheckboxGroupWrapper />);
  
  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });
  const option2 = screen.getByRole('checkbox', { name: 'Option 2' });
  
  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
});

test('Checkbox group allows multiple selections', async () => {
  render(<CheckboxGroupWrapper />);
  
  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });
  const option2 = screen.getByRole('checkbox', { name: 'Option 2' });
  const option3 = screen.getByRole('checkbox', { name: 'Option 3' });
  
  await user.click(option1);
  expect(option1).toBeChecked();
  
  await user.click(option2);
  expect(option2).toBeChecked();
  expect(option1).toBeChecked();
  
  await user.click(option3);
  expect(option3).toBeChecked();
  expect(option1).toBeChecked();
  expect(option2).toBeChecked();
});

test('Checkbox group allows unchecking selected options', async () => {
  render(<CheckboxGroupWrapper initialValues={['option1', 'option2']} />);
  
  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });
  const option2 = screen.getByRole('checkbox', { name: 'Option 2' });
  
  expect(option1).toBeChecked();
  expect(option2).toBeChecked();
  
  await user.click(option1);
  expect(option1).not.toBeChecked();
  expect(option2).toBeChecked();
});

