// checkbox-group.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { CheckboxGroup } from '../components/checkbox-group';
import { Checkbox } from '../components/checkbox';
import { AdvancedCheckbox } from '../components/advanced-checkbox';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof CheckboxGroup>;

export const WithCheckbox = () => {
  const [values, setValues] = React.useState<string[]>([]);
  return (
    <CheckboxGroup
      values={values}
      setValues={setValues}
      className="flex flex-row gap-4"
    >
      <Checkbox label="Apple" value="apple" />
      <Checkbox label="Pear" value="pear" />
      <Checkbox label="Orange" value="orange" disabled />
      <Checkbox label="Blueberry" value="blueberry" />
    </CheckboxGroup>
  );
};

export const WithAdvancedCheckbox = () => {
  const [values, setValues] = React.useState<string[]>(['one']);
  return (
    <CheckboxGroup values={values} setValues={setValues} className="flex gap-4">
      <AdvancedCheckbox name="age" value="any" alignment="center">
        Any
      </AdvancedCheckbox>
      <AdvancedCheckbox
        name="age"
        value="one"
        defaultChecked
        alignment="center"
      >
        1
      </AdvancedCheckbox>
      <AdvancedCheckbox name="age" value="two" alignment="center">
        2
      </AdvancedCheckbox>
      <AdvancedCheckbox name="age" value="three" disabled alignment="center">
        3
      </AdvancedCheckbox>
      <AdvancedCheckbox name="age" value="four" alignment="center">
        4
      </AdvancedCheckbox>
      <AdvancedCheckbox name="age" value="five+" alignment="center">
        5+
      </AdvancedCheckbox>
    </CheckboxGroup>
  );
};
