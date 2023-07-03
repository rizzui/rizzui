import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Announcement from './announcement';

test('Renders announcement component with text', () => {
  render(
    <Announcement badgeText="Trending" highlightedText="25% discount">
      on our new product
    </Announcement>
  );
  const badgeText = screen.getByText(/trending/i);
  const highlightedText = screen.getByText(/25% discount/i);
  const announcmentText = screen.getByText(/on our new product/i);

  expect(badgeText).toBeInTheDocument();
  expect(highlightedText).toBeInTheDocument();
  expect(announcmentText).toBeInTheDocument();
});

test('Renders announcement component with icon', () => {
  render(
    <Announcement
      badgeText="Trending"
      highlightedText="25% discount"
      startIcon={
        <svg
          data-testid="announcement-startIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-1 h-3.5 w-3.5 stroke-[2.5px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      }
      endIcon={
        <svg
          data-testid="announcement-endIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-1 h-3.5 w-3.5 stroke-[2.5px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      }
    >
      on our new product
    </Announcement>
  );
  const announcementStartIcon = screen.getByTestId('announcement-startIcon');
  const announcementEndIcon = screen.getByTestId('announcement-endIcon');

  expect(announcementStartIcon).toBeInTheDocument();
  expect(announcementEndIcon).toBeInTheDocument();
});
