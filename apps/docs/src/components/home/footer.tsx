import { Text } from 'rizzui/typography';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 sm:mt-6 md:mt-12 border-t border-gray-200 py-3">
      <div className="!container mx-auto text-center">
        <div className="flex items-center justify-between text-[15px]">
          <Text className="text-gray-500 dark:text-gray-500">
            © {year} RizzUI. All rights reserved.
          </Text>
          <a
            href="https://redq.io/"
            aria-label="View on Github"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-opacity opacity-60 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="size-[18px]"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
