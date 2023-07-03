import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';

import RangeSlider from '.';

test.skip('Renders Range Slider Component', async () => {
  const onChange = jest.fn();
  render(<RangeSlider defaultValue={20} onChange={onChange} />);
  const rangeSliderElement = screen.getByRole('slider');

  expect(rangeSliderElement).toBeInTheDocument();
  expect(rangeSliderElement).toHaveAttribute('aria-valuemin', '0');
  expect(rangeSliderElement).toHaveAttribute('aria-valuenow', '20');
  expect(rangeSliderElement).toHaveAttribute('aria-valuemax', '100');

  // fireEvent.change(rangeSliderElement, { target: { 'aria-valuenow': '50' } });
  await user.tab();
  expect(rangeSliderElement).toHaveFocus();
  fireEvent.keyDown(rangeSliderElement, { key: 'ArrowUp' });
  expect(onChange).toHaveBeenCalled();
  // await waitFor(() => {
  //   expect(rangeSliderElement).toHaveAttribute('aria-valuenow', '51');
  //   expect(rangeSliderElement).toHaveStyle('left: 51%');
  // });
});
