import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { AdvancedRadio } from '../components/advanced-radio';

test('Renders advanced radio buttons and functionality', async () => {
  render(
    <div className="flex gap-4">
      <AdvancedRadio name="numbers" value="any">
        Any
      </AdvancedRadio>
      <AdvancedRadio name="numbers" value="one">
        1
      </AdvancedRadio>
      <AdvancedRadio name="numbers" value="two">
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
