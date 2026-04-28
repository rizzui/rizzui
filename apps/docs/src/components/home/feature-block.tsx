import { Title } from 'rizzui/title';
import { Text } from 'rizzui/text';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    title: 'Lightning Fast',
    description:
      'Optimized components built with performance in mind. Zero bloat, maximum speed. Your users will notice.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
        />
      </svg>
    ),
    title: 'Fully Customizable',
    description:
      'Design tokens and CSS variables give you complete control. Make it yours without writing a single override.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    title: 'Developer First',
    description:
      'Clean, intuitive APIs. Copy-paste examples. Great documentation. Everything built for the developer experience.',
  },
];

export default function FeatureBlock() {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-6 bg-stripes">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="text-gray-900 mb-6 border size-13 flex items-center justify-center border-border [box-shadow:0_1.5px_0_var(--border-color)] rounded-lg bg-white dark:bg-transparent">
                {feature.icon}
              </div>
              <Title as="h5" className="font-medium text-base! 2xl:text-lg!">
                {feature.title}
              </Title>
              <Text className="text-gray-500 mb-0 text-sm 2xl:text-base">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
