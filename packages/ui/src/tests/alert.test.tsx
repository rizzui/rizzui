import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Alert } from '../components/alert';
import { XIcon } from '../icons/x-mark';

describe('Alert Component', () => {
  describe('Color Variants', () => {
    test('Renders alert component with danger', () => {
      render(
        <Alert color="danger">
          <h2>Danger</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores.</p>
        </Alert>
      );
      const alertElement = screen.getByTestId('alert-parent');
      const xicon = screen.getByTestId('alert-xicon');
      const barElement = screen.getByTestId('alert-bar');
      const childrenElement = screen.getByText('Danger');
      
      expect(alertElement).toBeInTheDocument();
      expect(xicon).toBeInTheDocument();
      expect(barElement).toBeInTheDocument();
      expect(childrenElement).toBeInTheDocument();
    });

    test('Renders alert component with info', () => {
      render(<Alert color="info">Info</Alert>);
      const questionIcon = screen.getByTestId('alert-question-icon');
      const barElement = screen.getByTestId('alert-bar');
      
      expect(questionIcon).toBeInTheDocument();
      expect(barElement).toBeInTheDocument();
    });

    test('Renders alert component with success', () => {
      render(<Alert color="success">Success</Alert>);
      const checkIcon = screen.getByTestId('alert-check-icon');
      const barElement = screen.getByTestId('alert-bar');
      
      expect(checkIcon).toBeInTheDocument();
      expect(barElement).toBeInTheDocument();
    });

    test('Renders alert component with warning', () => {
      render(<Alert color="warning">Warning</Alert>);
      const warningIcon = screen.getByTestId('alert-warning-icon');
      const barElement = screen.getByTestId('alert-bar');
      
      expect(warningIcon).toBeInTheDocument();
      expect(barElement).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    test('Renders alert component with small size', () => {
      render(
        <Alert color="danger" size="sm">
          Small Alert
        </Alert>
      );
      const alertElement = screen.getByTestId('alert-parent');
      const xicon = screen.getByTestId('alert-xicon');
      
      expect(alertElement).toBeInTheDocument();
      expect(xicon).toBeInTheDocument();
    });

    test('Renders alert component with medium size (default)', () => {
      render(<Alert color="info">Medium Alert</Alert>);
      const alertElement = screen.getByTestId('alert-parent');
      
      expect(alertElement).toBeInTheDocument();
    });

    test('Renders alert component with large size', () => {
      render(
        <Alert color="success" size="lg">
          Large Alert
        </Alert>
      );
      const alertElement = screen.getByTestId('alert-parent');
      const checkIcon = screen.getByTestId('alert-check-icon');
      
      expect(alertElement).toBeInTheDocument();
      expect(checkIcon).toBeInTheDocument();
    });
  });

  describe('Closable Functionality', () => {
    test('Alert component with closable and onClose functionality', async () => {
      const onClose = jest.fn();
      render(
        <Alert closable onClose={onClose} color="danger">
          Closeable
        </Alert>
      );
      const alertClearIcon = screen.getByTestId('alert-clear-icon');
      
      expect(alertClearIcon).toBeInTheDocument();
      await user.click(alertClearIcon);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('Alert component with closable but no onClose handler', () => {
      render(
        <Alert closable color="info">
          Closeable without handler
        </Alert>
      );
      const alertClearIcon = screen.getByTestId('alert-clear-icon');
      
      expect(alertClearIcon).toBeInTheDocument();
    });

    test('Alert component with custom closeIcon', () => {
      const CustomCloseIcon = () => <div data-testid="custom-close-icon">X</div>;
      render(
        <Alert closable closeIcon={<CustomCloseIcon />} color="warning">
          Custom close icon
        </Alert>
      );
      const customCloseIcon = screen.getByTestId('custom-close-icon');
      
      expect(customCloseIcon).toBeInTheDocument();
      expect(screen.queryByTestId('alert-clear-icon')).not.toBeInTheDocument();
    });

    test('Alert component with closeIcon prop renders close button', () => {
      const CustomCloseIcon = () => <div data-testid="custom-close-icon">X</div>;
      render(
        <Alert closeIcon={<CustomCloseIcon />} color="success">
          Close icon without closable
        </Alert>
      );
      const customCloseIcon = screen.getByTestId('custom-close-icon');
      
      expect(customCloseIcon).toBeInTheDocument();
    });
  });

  describe('Custom Icon', () => {
    test('Alert component with custom icon prop', () => {
      const CustomIcon = () => <div data-testid="custom-icon">Custom</div>;
      render(
        <Alert icon={<CustomIcon />} color="danger">
          Custom icon alert
        </Alert>
      );
      const customIcon = screen.getByTestId('custom-icon');
      
      expect(customIcon).toBeInTheDocument();
      expect(screen.queryByTestId('alert-xicon')).not.toBeInTheDocument();
    });

    test('Alert component uses default icon when icon prop is not provided', () => {
      render(<Alert color="info">Default icon</Alert>);
      const questionIcon = screen.getByTestId('alert-question-icon');
      
      expect(questionIcon).toBeInTheDocument();
    });
  });

  describe('Custom ClassNames', () => {
    test('Alert component with custom className', () => {
      render(
        <Alert color="danger" className="custom-alert-class">
          Custom class
        </Alert>
      );
      const alertElement = screen.getByTestId('alert-parent');
      
      expect(alertElement).toHaveClass('custom-alert-class');
    });

    test('Alert component with custom barClassName', () => {
      render(
        <Alert color="warning" barClassName="custom-bar-class">
          Custom bar class
        </Alert>
      );
      const barElement = screen.getByTestId('alert-bar');
      
      expect(barElement).toHaveClass('custom-bar-class');
    });

    test('Alert component with custom iconContainerClassName', () => {
      render(
        <Alert color="success" iconContainerClassName="custom-icon-container-class">
          Custom icon container class
        </Alert>
      );
      const iconContainer = screen.getByTestId('alert-content');
      
      expect(iconContainer).toHaveClass('custom-icon-container-class');
    });

    test('Alert component with custom iconClassName', () => {
      render(
        <Alert color="info" iconClassName="custom-icon-class">
          Custom icon class
        </Alert>
      );
      const iconContainer = screen.getByTestId('alert-content');
      
      expect(iconContainer).toHaveClass('custom-icon-class');
    });
  });

  describe('Children Rendering', () => {
    test('Alert component renders children correctly', () => {
      render(
        <Alert color="danger">
          <h2>Title</h2>
          <p>Description</p>
        </Alert>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    test('Alert component renders text children', () => {
      render(<Alert color="info">Simple text content</Alert>);
      
      expect(screen.getByText('Simple text content')).toBeInTheDocument();
    });
  });

  describe('Component Structure', () => {
    test('Alert component has all required elements', () => {
      render(<Alert color="danger">Test</Alert>);
      
      expect(screen.getByTestId('alert-parent')).toBeInTheDocument();
      expect(screen.getByTestId('alert-bar')).toBeInTheDocument();
      expect(screen.getByTestId('alert-content')).toBeInTheDocument();
    });

    test('Alert component bar is always rendered', () => {
      render(<Alert color="success">Test</Alert>);
      
      const barElement = screen.getByTestId('alert-bar');
      expect(barElement).toBeInTheDocument();
    });

    test('Alert component icon wrapper is always rendered', () => {
      render(<Alert color="warning">Test</Alert>);
      
      const iconWrapper = screen.getByTestId('alert-content');
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    test('Alert component with empty children', () => {
      render(<Alert color="danger">{null}</Alert>);
      
      const alertElement = screen.getByTestId('alert-parent');
      expect(alertElement).toBeInTheDocument();
    });

    test('Alert component with multiple children elements', () => {
      render(
        <Alert color="info">
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </Alert>
      );
      
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
      expect(screen.getByText('Third')).toBeInTheDocument();
    });
  });
});
