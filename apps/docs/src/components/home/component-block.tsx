import React from 'react';
import { useHistory } from '@docusaurus/router';
import {
	Button,
	ActionIcon,
	Rate,
	Text,
	PinCode,
	Avatar,
	Progressbar,
	Pagination,
	Switch,
	Badge,
} from 'rizzui';
import {
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

const components = [
	{
		id: 1,
		component: (
			<Avatar
				size="48px"
				src="https://randomuser.me/api/portraits/women/40.jpg"
			/>
		),
		name: 'Avatar',
		description:
			'A reusable UI element that represents a user or entity with a profile image or icon',
	},
	{
		id: 2,
		component: <PinCode setValue={() => null} />,
		name: 'PinCode',
		description:
			'It provides a simple and intuitive way for users to enter a numeric code, such as a PIN or password',
	},
	{
		id: 3,
		component: (
			<Rate
				defaultValue={3}
				tooltips={['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful']}
			/>
		),
		name: 'Rate',
		description:
			'It allows users to rate or provide feedback on a particular item, such as a product or service',
	},
	{
		id: 4,
		component: <Pagination defaultCurrent={1} total={25} />,
		name: 'Pagination',
		description:
			'A long list can be divided into several pages using Pagination',
	},
	{
		id: 5,
		component: <Badge>Badge</Badge>,
		name: 'Badge',
		description:
			'Badges are used as a small numerical value or status descriptor for UI elements',
	},
	{
		id: 6,
		component: <Progressbar value={75} size="xl" label="75%" />,
		name: 'Progressbar',
		description:
			'The Progress component display the current progress of an operation flow',
	},
	{
		id: 7,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Primary action button to trigger an operation',
	},
	{
		id: 8,
		component: <Switch size="lg" />,
		name: 'Switch',
		description: 'A basic widget for getting the user input',
	},
];

const slideWidth = 420;
const slideMargin = 20;

const scrollToSlide = (slider: HTMLDivElement | null, slideIndex: number) => {
	if (!slider) return;
	slider.scrollTo({
		left: slideIndex * (slideWidth + slideMargin),
		behavior: 'smooth',
	});
};

export default function ComponentBlock() {
	const history = useHistory();
	const sliderRef = React.useRef<HTMLDivElement | null>(null);
	const [sliderPosition, setSliderPosition] = React.useState(0);

	const currentSlide = React.useMemo(() => {
		return Math.floor(sliderPosition / (slideWidth + slideMargin));
	}, [sliderPosition]);

	const goToNextSlide = React.useCallback(() => {
		scrollToSlide(sliderRef.current, currentSlide + 1);
	}, [currentSlide]);

	const goToPreviousSlide = React.useCallback(() => {
		scrollToSlide(sliderRef.current, currentSlide - 1);
	}, [currentSlide]);

	return (
		<section className="pt-10 md:pt-16 pb-14 md:pb-20 group">
			<div className="container mx-auto">
				<header className="text-center mb-8 sm:mb-10 md:mb-12">
					<Text
						tag="h6"
						className="!mb-3 sm:!mb-5 !text-[11px] sm:!text-xs lg:!text-sm font-semibold tracking-[4px] uppercase text-gray-500"
					>
						Beautifully Crafted
					</Text>
					<Text
						tag="h2"
						className="text-2xl sm:text-3xl lg:text-4xl leading-[1.35] sm:leading-[1.3]"
					>
						38+ Production Ready Components
					</Text>
				</header>
			</div>

			<div className="h-[520px] overflow-hidden relative">
				<div
					ref={sliderRef}
					onScroll={(event) =>
						setSliderPosition(event.currentTarget.scrollLeft)
					}
					className="flex overflow-x-auto h-[560px] pb-10 pr-[8vw] snap-x snap-mandatory"
				>
					{components.map((item) => (
						<div
							key={'component-' + item.id}
							className="snap-start snap-always mr-4 2xl:mr-5"
						>
							<div className="slide-item-center flex h-full flex-col rounded-2xl w-[420px] border border-gray-300 flex-shrink-0 relative">
								<div className="flex h-full justify-center items-center px-6 py-4">
									{item.component}
								</div>
								<div className="py-5 px-6">
									<Text tag="h5" className="font-semibold !mb-1.5">
										{item.name}
									</Text>
									<Text>{item.description}</Text>
								</div>
								<div className="w-2/3 h-2/3 absolute bottom-5 right-0 bg-primary opacity-[0.07] -z-[1] filter blur-3xl" />
							</div>
						</div>
					))}

					<div className="snap-start snap-always">
						<div className="slide-item-center flex h-full flex-col rounded-2xl w-[420px] border border-gray-300 flex-shrink-0 relative">
							<div className="flex h-full justify-center items-center">
								<div className="text-center">
									<Text className="mb-3">See more components in the docs</Text>
									<Button
										variant="flat"
										onClick={() => history.push('/docs/components/avatar')}
									>
										View more <ArrowRightIcon className="w-4 h-4 ml-1.5" />
									</Button>
								</div>
							</div>
							<div className="w-2/3 h-2/3 absolute bottom-5 right-0 bg-primary opacity-[0.07] -z-[1] filter blur-3xl" />
						</div>
					</div>
				</div>

				{currentSlide !== 0 && (
					<ActionIcon
						rounded="full"
						onClick={goToPreviousSlide}
						className="absolute top-1/2 -mt-[20px] left-5 z-10 bg-opacity-25 opacity-0 group-hover:opacity-100"
					>
						<ChevronLeftIcon className="w-5 h-5" strokeWidth={2.3} />
					</ActionIcon>
				)}

				<ActionIcon
					rounded="full"
					onClick={goToNextSlide}
					className="absolute top-1/2 -mt-[20px] right-5 z-10 bg-opacity-25 opacity-0 group-hover:opacity-100"
				>
					<ChevronRightIcon className="w-5 h-5" strokeWidth={2.3} />
				</ActionIcon>
			</div>
		</section>
	);
}
