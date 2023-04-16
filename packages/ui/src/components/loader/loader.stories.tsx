// loader.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './loader';

export default {
	title: 'Components/Loader',
	component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colors = () => (
	<div className="flex items-center justify-around gap-3">
		<Loader />
		<Loader color="primary" />
		<Loader color="secondary" />
		<Loader color="info" />
		<Loader color="warning" />
		<Loader color="danger" />
		<Loader color="success" />
	</div>
);

export const Sizes = () => (
	<div className="flex items-center justify-around gap-3">
		<Loader size="sm" />
		<Loader />
		<Loader size="lg" />
		<Loader size="xl" />
	</div>
);

export const Animation = () => (
	<div className="flex items-center justify-around gap-3">
		<Loader size="sm" animation="scaleUp" />
		<Loader animation="scaleUp" />
		<Loader size="lg" animation="scaleUp" />
		<Loader size="xl" animation="scaleUp" />
	</div>
);
