import { useHistory } from '@docusaurus/router';
import { Announcement } from 'rizzui/announcement';
import { Button } from 'rizzui/button';
import { Title } from 'rizzui/title';
import { Text } from 'rizzui/text';
import { cn } from 'rizzui/cn';
import { GovernfulLogo } from '../icons/governful-logo';
// import { TrueBeepLogo } from '../icons/truebeep-logo';
import { RedQLogo } from '../icons/redq-logo';
import { ProaLogo } from '../icons/proa-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const data = {
  title: `A Modern & Minimal
  <br className="hidden md:inline-block" /> <span className="italic">React UI Library</span>`,
  description: `Built with Tailwind CSS. Beautifully crafted, production-ready components designed for creators who value elegant simplicity and performance.`,
};

export default function HeroBlock() {
  const history = useHistory();

  return (
    <section className="py-16 md:py-20 lg:py-32 2xl:py-36 relative before:h-3/5 before:absolute before:bg-gradient-to-t before:from-gray-50/30 before:bottom-0 before:w-full border-b border-border">
      {/* Dashed Top Fade Grid */}
      <div
        className="absolute inset-0 z-0 -mt-2 opacity-90 dark:opacity-50"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--border-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)
      `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      <div className="container! relative mx-auto">
        <header className="text-center flex flex-col items-center justify-center">
          <Announcement
            badgeText="⚡ v2.0.0"
            className="mb-6! md:mb-7! sm:hidden mx-auto border border-border [box-shadow:0_1px_0_var(--border-color)]"
          >
            — released
          </Announcement>
          <Announcement
            badgeText="⚡ v2.0.0"
            highlightedText=" released"
            highlightedTextClassName="ml-1.5"
            className="mb-6! hidden sm:block md:mb-7! mx-auto border border-border [box-shadow:0_1px_0_var(--border-color)]"
          >
            — upgraded for React 19 and beyond.
          </Announcement>
          <Title
            as="h1"
            dangerouslySetInnerHTML={{ __html: data.title }}
            className={'home-page-hero-block-title'}
          />
          <Text className="text-[15px] md:text-base leading-[1.9] md:leading-[1.9] max-w-[786px] mx-auto mb-8! md:mb-12 text-gray-600 dark:text-gray-500 2xl:text-lg">
            {data.description}
          </Text>

          <div className="flex items-center justify-center gap-4 md:gap-5 flex-col sm:flex-row">
            <Button
              size="lg"
              className="text-sm md:text-base h-12 px-8 hover:shadow-2xl transition-all relative min-w-[160px]"
              onClick={() => history.push('/docs/guide/getting-started')}
            >
              Get Started{' '}
              <ArrowRightIcon strokeWidth={2} className="size-[18px] ms-2" />
            </Button>
            <a
              target="_blank"
              href="https://github.com/rizzui/rizzui"
              className="inline-flex items-center outline-none focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-background focus:ring-primary rounded-[var(--border-radius)] hover:no-underline!"
              rel="noreferrer noopener"
            >
              <Button
                size="lg"
                as="span"
                variant="outline"
                className="text-sm md:text-base h-12 bg-white dark:bg-gray-50 px-6 transition-all relative hover:no-underline!"
              >
                View on Github
              </Button>
            </a>
          </div>

          <div className="pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-40">
            <Text className="text-gray-500 text-xs font-medium uppercase tracking-widest">
              Trusted by teams at
            </Text>
            <div className="flex items-center justify-center gap-5 md:gap-5 mt-5 lg:gap-8 2xl:gap-10">
              <RedQLogo className="w-auto h-5 text-primary filter grayscale opacity-70 hover:opacity-100 transition-all hover:grayscale-0" />
              <GovernfulLogo className="w-auto h-7 filter grayscale opacity-70 hover:opacity-100 transition-all hover:grayscale-0 dark:invert" />
              <ProaLogo className="w-auto h-[18px] text-primary filter grayscale opacity-70 hover:opacity-100 transition-all hover:grayscale-0 dark:invert" />
              {/*
                <TrueBeepLogo className="w-auto h-7 filter grayscale opacity-70 hover:opacity-100 transition-all hover:grayscale-0 dark:invert" />
              */}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
