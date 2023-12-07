import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { AdvancedCheckbox } from '../components/advanced-checkbox';

test('Renders advanced checkbox and functionality', async () => {
  render(
    <div className="flex gap-4">
      <AdvancedCheckbox name="numbers" value="any">
        Any
      </AdvancedCheckbox>
      <AdvancedCheckbox name="numbers" value="one">
        1
      </AdvancedCheckbox>
      <AdvancedCheckbox name="numbers" value="two">
        2
      </AdvancedCheckbox>
    </div>
  );
  const firstElement = screen.getByRole('checkbox', { name: /any/i });
  const secondElement = screen.getByRole('checkbox', { name: '1' });
  const thirdElement = screen.getByRole('checkbox', { name: '2' });

  expect(firstElement).toBeInTheDocument();
  expect(secondElement).toBeInTheDocument();
  expect(thirdElement).toBeInTheDocument();

  await user.click(firstElement);
  expect(firstElement).toBeChecked();
  expect(secondElement).not.toBeChecked();
  expect(thirdElement).not.toBeChecked();

  await user.click(thirdElement);
  expect(firstElement).toBeChecked();
  expect(secondElement).not.toBeChecked();
  expect(thirdElement).toBeChecked();
});
