import React from 'react';
import { useHistory } from '@docusaurus/router';
import { Button, ActionIcon, Text, Avatar } from '@redq/rizzui';
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
				className="ring-2 ring-primary ring-offset-2"
			/>
		),
		name: 'Avatar',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 2,
		component: (
			<ActionIcon>
				<AdjustmentsHorizontalIcon className="w-5 h-5" />
			</ActionIcon>
		),
		name: 'ActionIcon',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 3,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 4,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 5,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 6,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 7,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Lorem ipsum dollar sit is a dummy text',
	},
	{
		id: 8,
		component: <Button>Button</Button>,
		name: 'Button',
		description: 'Lorem ipsum dollar sit is a dummy text',
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
		<section className="pt-16 pb-20">
			<div className="container mx-auto">
				<header className="text-center mb-12">
					<Text
						tag="h6"
						className="!mb-5 !text-sm font-semibold tracking-[4px] uppercase text-gray-500"
					>
						Beautifully Crafted
					</Text>
					<Text tag="h2" className="text-4xl leading-[1.3]">
						40+ Production Ready Components
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
							className="snap-start snap-always mr-5"
						>
							<div className="slide-item-center flex h-full flex-col rounded-2xl w-[420px] border border-gray-300 flex-shrink-0 relative">
								<div className="flex h-full justify-center items-center">
									{item.component}
								</div>
								<div className="py-5 px-6">
									<Text tag="h5" className="font-semibold !mb-1.5">
										{item.name}
									</Text>
									<Text>{item.description}</Text>
								</div>
								<div className="w-2/3 h-2/3 absolute bottom-0 right-0 bg-primary opacity-[0.07] -z-[1] filter blur-3xl" />
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
							<div className="w-2/3 h-2/3 absolute bottom-0 right-0 bg-primary opacity-[0.07] -z-[1] filter blur-3xl" />
						</div>
					</div>
				</div>
				{currentSlide !== 0 && (
					<ActionIcon
						size="lg"
						rounded="full"
						onClick={goToPreviousSlide}
						className="absolute top-1/2 -mt-[22px] left-12 z-10 bg-opacity-25"
					>
						<ChevronLeftIcon className="w-6 h-6" strokeWidth={2.3} />
					</ActionIcon>
				)}
				<ActionIcon
					size="lg"
					rounded="full"
					onClick={goToNextSlide}
					className="absolute top-1/2 -mt-[22px] right-12 z-10 bg-opacity-25"
				>
					<ChevronRightIcon className="w-6 h-6" strokeWidth={2.3} />
				</ActionIcon>
			</div>
		</section>
	);
}
