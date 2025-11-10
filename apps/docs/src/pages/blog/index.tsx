import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Footer from '@site/src/components/home/footer';
import { Button } from 'rizzui/button';

// Blog post data
const blogPosts = [
  {
    title: 'RizzUI 2.0.0',
    date: 'January 15, 2025',
    readingTime: '6 min read',
    description:
      "We're excited to announce RizzUI 2.0.0, a major release that brings significant improvements to the developer experience, performance, and modern web standards. This release represents a major step forward in making RizzUI more powerful, easier to use, and aligned with the latest web technologies.",
    features: [
      'Tailwind CSS v4 Migration',
      'CSS-First Configuration',
      'OKLCH Color Space',
      'Theme Style Tokens',
      'Breaking Changes',
      'Modern React Patterns',
      'Enhanced Performance',
      'Improved Dark Mode',
      'Updated Peer Dependencies',
    ],
    link: '/blog/2025/1/15/2025/',
  },
  {
    title: 'RizzUI 1.0.0',
    date: 'January 1, 2025',
    readingTime: '4 min read',
    description:
      'In this ever-evolving landscape of web development, creating modern, accessible, and responsive user interfaces has become more critical than ever. To meet these demands, we are thrilled to introduce RizzUI, a next-generation React UI library that offers limitless customization options, unparalleled ease of use, and robust type safety.',
    features: [
      'React 19 support',
      'Versioned doc',
      'Tree shaking',
      'Client components',
      'Server components',
      'Integrated Components',
      'Select search field sticky',
      'MultiSelect search field sticky',
    ],
    link: '/blog/2025/1/1/2025/',
  },
];

function BlogPostCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <article className="border border-border p-1.5 rounded-xl flex flex-col justify-between bg-white dark:bg-[#111111] 2xl:p-3">
      <header className="p-3 pb-0">
        <div className="text-sm text-gray-500 dark:text-text-secondary mb-2">
          {post.date} · {post.readingTime}
        </div>
        <h2 className="text-xl font-medium -mb-2">
          <Link
            to={post.link}
            className="text-blue-600 dark:text-blue-400 hover:no-underline"
          >
            {post.title}
          </Link>
        </h2>
      </header>
      <div className="px-3 mt-3 flex-grow">
        <p className="text-gray-600 dark:text-text-secondary">
          {post.description}
        </p>
        <ul className="!mt-6 space-y-2 !p-0">
          {post.features.map((feature, idx) => (
            <li key={idx} className="text-gray-600 dark:text-text-secondary">
              → {feature}
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-4 px-3 pb-3">
        <Link to={post.link} className="block">
          <Button as="span" className="w-full">
            Read More
          </Button>
        </Link>
      </footer>
    </article>
  );
}

export default function BlogIndex(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Blog"
      description={siteConfig.tagline}
      wrapperClassName="blog-list-page"
    >
      <div className="blog-banner">
        <div className="container mx-auto">
          <div className="blog-banner-content">
            <h1 className="!text-3xl sm:!text-4xl !leading-[1.3] sm:!leading-[1.3] lg:!leading-[1.2] xl:!leading-[1.2] 2xl:!leading-[1.18] mb-4 font-semibold text-gray-900 dark:text-white">
              Latest Blog Posts
            </h1>
            <p className="blog-banner-description">
              Stay updated with the latest releases, features, and updates from
              the RizzUI team.
            </p>
          </div>
        </div>
      </div>
      <main className="grid justify-between items-start grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6 mx-auto max-w-[1300px] w-full flex-auto px-4 md:px-6 py-8 md:py-12 2xl:gap-x-6 2xl:gap-y-8 2xl:py-16">
        {blogPosts.map((post, idx) => (
          <BlogPostCard key={idx} post={post} />
        ))}
      </main>
      <Footer />
    </Layout>
  );
}
