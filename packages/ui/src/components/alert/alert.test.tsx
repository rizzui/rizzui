import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Alert from '.';

test('Renders alert component with danger', () => {
  render(
    <Alert color="danger">
      <h2>Danger</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores.</p>
    </Alert>
  );
  const alertElement = screen.getByTestId('alert-parent');
  const xicon = screen.getByTestId('alert-xicon');
  const childrenElement = screen.getByTestId('alert-content');
  expect(alertElement).toBeInTheDocument();
  expect(xicon).toBeInTheDocument();
  expect(childrenElement).toBeInTheDocument();
});

test('Renders alert component with info', () => {
  render(<Alert color="info">Info</Alert>);
  const questionIcon = screen.getByTestId('alert-question-icon');
  expect(questionIcon).toBeInTheDocument();
});

test('Renders alert component with success', () => {
  render(<Alert color="success">Success</Alert>);
  const checkIcon = screen.getByTestId('alert-check-icon');
  expect(checkIcon).toBeInTheDocument();
});

test('Renders alert component with warning', () => {
  render(<Alert color="warning">Warning</Alert>);
  const warningIcon = screen.getByTestId('alert-warning-icon');
  expect(warningIcon).toBeInTheDocument();
});

test('Renders alert component with bar', () => {
  render(
    <Alert bar color="danger">
      Bar
    </Alert>
  );
  const barElement = screen.getByTestId('alert-bar');
  expect(barElement).toBeInTheDocument();
});

test('Alert component with onClear functionality', async () => {
  const onClear = jest.fn();
  render(
    <Alert clearable onClear={onClear} color="danger">
      Clearable
    </Alert>
  );
  const alertClearIcon = screen.getByTestId('alert-clear-icon');
  expect(alertClearIcon).toBeInTheDocument();
  await user.click(alertClearIcon);
  expect(onClear).toHaveBeenCalledTimes(1);
});
