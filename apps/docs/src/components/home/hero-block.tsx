import React from "react";
import { useHistory } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";
import { Button, Title, Text, cn } from "rizzui";
import StarParticles from "../star-particles";

const data = {
  title: `A Modern & Minimal React UI Library
  <br className="hidden md:inline-block" /> built with TailwindCSS`,
  description: `Designed to provide you with a simple and intuitive set of UI
  components that are easy to use, customize and integrate into your
  React application. We have carefully crafted each component to
  ensure that they are responsive, accessible and consistent across
  different devices and browsers.`,
};

export default function HeroBlock() {
  const { colorMode } = useColorMode();
  const history = useHistory();

  return (
    <section className="py-16 md:py-20 lg:py-32 relative before:h-3/5 before:absolute before:bg-gradient-to-t before:from-gray-50/30 before:bottom-0 before:w-full border-b border-gray-100/90">
      <div className="container relative mx-auto">
        <header className="text-center">
          <Title
            as="h1"
            dangerouslySetInnerHTML={{ __html: data.title }}
            className={cn(
              "text-3xl sm:text-4xl xl:text-5xl 2xl:text-[54px] leading-[1.3] sm:leading-[1.3] lg:leading-[1.2] xl:leading-[1.2] 2xl:leading-[1.18] drop-shadow-sm mb-6 md:mb-10 font-semibold"
            )}
          />
          <Text className="text-[15px] md:text-base lg:text-lg leading-[1.9] md:leading-[1.9] lg:leading-[1.9] max-w-5xl mx-auto mb-8 md:mb-12 text-gray-600 dark:text-gray-500">
            {data.description}
          </Text>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Button
              size="lg"
              className="text-sm md:text-base h-12 xl:h-[3.25rem] shadow-xl px-8 xl:px-10 hover:shadow-2xl transition-all"
              onClick={() => history.push("/docs/guide/getting-started")}
            >
              Get Started
            </Button>
            <a
              target="_blank"
              href="https://github.com/rizzui/rizzui"
              className="inline-flex items-center hover:no-underline"
              rel="noreferrer noopener"
            >
              <Button
                size="lg"
                tag="span"
                variant="outline"
                className="text-sm md:text-base h-12 xl:h-[3.25rem] bg-white dark:bg-gray-50 shadow-lg px-8 xl:px-10 hover:shadow-xl transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[18px] h-[18px] mr-3 fill-current"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>{" "}
                Github
              </Button>
            </a>
          </div>
        </header>
      </div>

      <BlurBGPattern />

      <StarParticles color={colorMode === "dark" ? "white" : "transparent"} />
    </section>
  );
}

function BlurBGPattern() {
  return (
    <>
      <span className="grid-box absolute inset-0 -z-[2] opacity-[0.4] dark:opacity-[0.03]" />

      <div className="flex items-center inset-0 justify-evenly absolute h-full w-full -z-[1]">
        <div className="w-1/4 h-full rounded bg-primary-dark filter blur-3xl opacity-[0.025] dark:opacity-[0.035] transform rotate-12 scale-95" />
        <div className="w-1/4 h-full rounded bg-blue-dark filter blur-3xl opacity-[0.025] dark:opacity-[0.035] transform rotate-12 scale-105 hidden sm:flex" />
        <div className="w-1/4 h-full rounded bg-secondary-dark filter blur-3xl opacity-[0.025] dark:opacity-[0.035] transform rotate-12 scale-95 hidden md:flex" />
      </div>
    </>
  );
}
