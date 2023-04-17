// advanced-select.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AdvancedSelect, { AdvancedSelectOptionDataTypes } from '.';
import Avatar from '../avatar';

export default {
  title: 'Components/AdvancedSelect',
  component: AdvancedSelect,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof AdvancedSelect>;

const data = [
  {
    id: 1,
    name: 'John',
    label: (
      <span className="inline-flex items-center gap-2">
        <Avatar
          size="24px"
          src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        John Doe
      </span>
    ),
  },
  {
    id: 2,
    name: 'Emily',
    label: (
      <span className="inline-flex items-center gap-2">
        <Avatar
          size="24px"
          src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        Emily Josh
      </span>
    ),
  },
  {
    id: 3,
    name: 'Miller',
    label: (
      <span className="inline-flex items-center gap-2">
        <Avatar
          size="24px"
          src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        Miller Wills
      </span>
    ),
  },
  {
    id: 4,
    name: 'James',
    disabled: true,
    label: (
      <span className="inline-flex items-center gap-2">
        <Avatar
          size="24px"
          src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        James Wan
      </span>
    ),
  },
  {
    id: 5,
    name: 'Franky',
    label: (
      <span className="inline-flex items-center gap-2">
        <Avatar
          size="24px"
          src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        Franky Sam
      </span>
    ),
  },
];

const Template: ComponentStory<typeof AdvancedSelect> = (args) => {
  const [value, setValue] = React.useState(data[1]);
  return <AdvancedSelect {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  options: data,
  label: 'Select Person',
};

export const SingleSelect = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          John Doe
        </span>
      ),
    },
    {
      id: 2,
      name: 'Emily',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Emily Josh
        </span>
      ),
    },
    {
      id: 3,
      name: 'Miller',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Miller Wills
        </span>
      ),
    },
    {
      id: 4,
      name: 'James',
      disabled: true,
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          James Wan
        </span>
      ),
    },
    {
      id: 5,
      name: 'Franky',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Franky Sam
        </span>
      ),
    },
  ];
  const [value, setValue] = React.useState({} as AdvancedSelectOptionDataTypes);
  return (
    <AdvancedSelect
      label="Select Single Person"
      value={value}
      onChange={setValue}
      options={options}
    />
  );
};

export const MultiSelect = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          John Doe
        </span>
      ),
    },
    {
      id: 2,
      name: 'Emily',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Emily Josh
        </span>
      ),
    },
    {
      id: 3,
      name: 'Miller',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Miller Wills
        </span>
      ),
    },
    {
      id: 4,
      name: 'James',
      disabled: true,
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          James Wan
        </span>
      ),
    },
    {
      id: 5,
      name: 'Franky',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Franky Sam
        </span>
      ),
    },
  ];
  const [value, setValue] = React.useState([options[2], options[4]]);
  return (
    <AdvancedSelect
      label="Select Single Person"
      value={value}
      onChange={setValue}
      options={options}
      multiple
    />
  );
};

export const CreatableSingleSelect = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          John Doe
        </span>
      ),
    },
    {
      id: 2,
      name: 'Emily',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Emily Josh
        </span>
      ),
    },
    {
      id: 3,
      name: 'Miller',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Miller Wills
        </span>
      ),
    },
    {
      id: 4,
      name: 'James',
      disabled: true,
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          James Wan
        </span>
      ),
    },
    {
      id: 5,
      name: 'Franky',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Franky Sam
        </span>
      ),
    },
  ];
  const [value, setValue] = React.useState(options[1]);
  return (
    <AdvancedSelect
      label="Single Select"
      value={value}
      onChange={setValue}
      options={options}
      isCreatable
    />
  );
};

export const CreatableMultiSelect = () => {
  const options = [
    {
      id: 1,
      name: 'John',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          John Doe
        </span>
      ),
    },
    {
      id: 2,
      name: 'Emily',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Emily Josh
        </span>
      ),
    },
    {
      id: 3,
      name: 'Miller',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Miller Wills
        </span>
      ),
    },
    {
      id: 4,
      name: 'James',
      disabled: true,
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          James Wan
        </span>
      ),
    },
    {
      id: 5,
      name: 'Franky',
      label: (
        <span className="inline-flex items-center gap-2">
          <Avatar
            size="24px"
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          Franky Sam
        </span>
      ),
    },
  ];
  const [value, setValue] = React.useState([options[1]]);
  return (
    <AdvancedSelect
      label="Multi-Select"
      value={value}
      onChange={setValue}
      options={options}
      multiple
      isCreatable
    />
  );
};
