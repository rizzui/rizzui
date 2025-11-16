import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Dropdown } from 'rizzui/dropdown';
import { Button } from 'rizzui/button';
import TurndownService from 'turndown';
import { Box } from 'rizzui/box';
import {
  ClipboardDocumentIcon,
  ChevronDownIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

// Icons for dropdown items - matching the design from the image
const MarkdownIcon = () => (
  <svg
    strokeLinejoin="round"
    viewBox="0 0 22 16"
    className="size-4.5 -translate-x-px"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.5 2.25h-17c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h17c.69 0 1.25-.56 1.25-1.25v-9c0-.69-.56-1.25-1.25-1.25ZM2.5 1A2.5 2.5 0 0 0 0 3.5v9A2.5 2.5 0 0 0 2.5 15h17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 1h-17ZM3 4.5h1.69l.297.324L7 7.02l2.013-2.196.297-.324H11v7H9V7.798L7.737 9.176 7 9.98l-.737-.804L5 7.798V11.5H3v-7ZM15 8V4.5h2V8h2.5L17 10.5l-1 1-1-1L12.5 8H15Z"
      clipRule="evenodd"
    />
  </svg>
);

const V0Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="size-4.5 -translate-x-0.5"
    viewBox="0 0 147 70"
  >
    <path d="M56 50.203V14h14v46.156C70 65.593 65.593 70 60.156 70c-2.596 0-5.158-1-7-2.843L0 14h19.797L56 50.203ZM147 56h-14V23.953L100.953 56H133v14H96.687C85.814 70 77 61.186 77 50.312V14h14v32.156L123.156 14H91V0h36.312C138.186 0 147 8.814 147 19.688V56Z" />
  </svg>
);

const ChatGPTIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-3.5"
  >
    <path
      fill="currentColor"
      d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z"
    />
  </svg>
);

const ClaudeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-3.5"
  >
    <path
      fill="currentColor"
      d="m4.714 15.956 4.718-2.648.079-.23-.08-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.57-.121-.535-.704.055-.353.48-.321.685.06 1.518.104 2.277.157 1.651.098 2.447.255h.389l.054-.158-.133-.097-.103-.098-2.356-1.596-2.55-1.688-1.336-.972-.722-.491L2 6.223l-.158-1.008.655-.722.88.06.225.061.893.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.644-1.032-.17-.619a2.972 2.972 0 0 1-.103-.729L6.287.133 6.7 0l.995.134.42.364.619 1.415L9.735 4.14l1.555 3.03.455.898.243.832.09.255h.159V9.01l.127-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.558 2.903-.365 1.942h.213l.243-.242.983-1.306 1.652-2.064.728-.82.85-.904.547-.431h1.032l.759 1.129-.34 1.166-1.063 1.347-.88 1.142-1.263 1.7-.79 1.36.074.11.188-.02 2.853-.606 1.542-.28 1.84-.315.832.388.09.395-.327.807-1.967.486-2.307.462-3.436.813-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.08.485-1.213.62-1.64-.389-3.825-.91-1.31-.329h-.183v.11l1.093 1.068 2.003 1.81 2.508 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.343 3.521.122 1.08-.17.353-.607.213-.668-.122-1.372-1.924-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589 2.386-3.036 1.439-1.882.929-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312Z"
    />
  </svg>
);

function PageActionsDropdownContent() {
  const [copied, setCopied] = useState(false);

  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  // Fallback method for copying to clipboard
  const fallbackCopyToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Markdown copied to clipboard!');
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy markdown:', err);
    }
    document.body.removeChild(textArea);
  };

  const handleViewAsMarkdown = () => {
    if (typeof window !== 'undefined') {
      // Get the main content area
      const mainContent =
        document.querySelector('.markdown') ||
        document.querySelector('article');
      if (!mainContent) return;

      // Create a clone to avoid modifying the original DOM
      const contentClone = mainContent.cloneNode(true) as HTMLElement;

      // Remove unwanted elements (navigation, ads, etc.)
      const elementsToRemove = contentClone.querySelectorAll(
        'nav, .navbar, .sidebar, .footer, script, style, .ad, [class*="advertisement"]'
      );
      elementsToRemove.forEach((el) => el.remove());

      // Initialize Turndown service with options
      const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        bulletListMarker: '-',
        emDelimiter: '*',
        strongDelimiter: '**',
        linkStyle: 'inlined',
        linkReferenceStyle: 'full',
      });

      // Add custom rules for better conversion
      turndownService.addRule('strikethrough', {
        filter: ['del', 's', 'strike'],
        replacement: (content) => `~~${content}~~`,
      });

      // Convert HTML to Markdown
      let markdown = `# ${document.title}\n\n`;
      markdown += turndownService.turndown(contentClone);

      // Copy markdown to clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(markdown)
          .then(() => {
            console.log('Markdown copied to clipboard!');
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          })
          .catch((err) => {
            console.error('Failed to copy markdown:', err);
            // Fallback: Use the older method if clipboard API fails
            fallbackCopyToClipboard(markdown);
          });
      } else {
        // Fallback for browsers that don't support Clipboard API
        fallbackCopyToClipboard(markdown);
      }
    }
  };

  const handleOpenInV0 = () => {
    if (typeof window !== 'undefined') {
      const url = getCurrentUrl();
      // v0.dev chat URL format
      const v0Url = `https://v0.dev/chat?q=${encodeURIComponent(`I'm reviewing the RizzUI documentation: ${url}. Please help me understand how to use it, including explanations, examples, and debugging support if needed.`)}`;
      window.open(v0Url, '_blank');
    }
  };

  const handleOpenInChatGPT = () => {
    if (typeof window !== 'undefined') {
      const url = getCurrentUrl();
      // ChatGPT URL - opening in new tab with the page URL
      window.open(
        `https://chat.openai.com/?q=${encodeURIComponent(`I'm reviewing the RizzUI documentation: ${url}. Please help me understand how to use it, including explanations, examples, and debugging support if needed.`)}`,
        '_blank'
      );
    }
  };

  const handleOpenInClaude = () => {
    if (typeof window !== 'undefined') {
      const url = getCurrentUrl();
      // Claude AI URL
      window.open(
        `https://claude.ai/new?q=${encodeURIComponent(`I'm reviewing the RizzUI documentation: ${url}. Please help me understand how to use it, including explanations, examples, and debugging support if needed.`)}`,
        '_blank'
      );
    }
  };

  return (
    <Box>
      <Button
        size="sm"
        variant="outline"
        onClick={handleViewAsMarkdown}
        className="text-[13px] border-r-0 rounded-tr-none rounded-br-none hover:border-border focus:border-border"
      >
        {copied ? (
          <CheckIcon className="size-4.5 me-1.5" />
        ) : (
          <ClipboardDocumentIcon className="size-4.5 me-1.5" />
        )}
        Copy Page
      </Button>
      <Dropdown placement="bottom-end">
        <Dropdown.Trigger>
          <Button
            size="sm"
            variant="outline"
            className="gap-2 rounded-tl-none rounded-bl-none hover:border-border focus:border-border"
          >
            <ChevronDownIcon className="size-4.5" />
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu className="min-w-[200px] text-sm">
          <Dropdown.Item
            onClick={handleOpenInV0}
            className="flex items-center gap-2"
          >
            <V0Icon />
            <span>Open in v0</span>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleOpenInChatGPT}
            className="flex items-center gap-2"
          >
            <ChatGPTIcon />
            <span>Open in ChatGPT</span>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleOpenInClaude}
            className="flex items-center gap-2"
          >
            <ClaudeIcon />
            <span>Open in Claude</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Box>
  );
}

export default function PageActionsDropdown() {
  return (
    <BrowserOnly fallback={<div />}>
      {() => <PageActionsDropdownContent />}
    </BrowserOnly>
  );
}
