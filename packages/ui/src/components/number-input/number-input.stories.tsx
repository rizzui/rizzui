// number-input.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import NumberInput, { NumberInputProps, usePatternFormat } from '.';
import Input from '../input';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof NumberInput>;

export const Currency = () => (
  <NumberInput
    formatType="numeric"
    value="20020220"
    prefix="$"
    allowLeadingZeros
    thousandSeparator=","
    displayType="input"
    customInput={Input as React.ComponentType<unknown>}
  />
);

export const CreditCardNumber = () => (
  <NumberInput
    formatType="pattern"
    format="#### #### #### ####"
    value="411111"
    mask="_"
    customInput={Input as React.ComponentType<unknown>}
  />
);

export const CardExpiry = () => {
  type CardExpiryType = NumberInputProps & {
    isMask?: boolean;
  };

  function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
    const { format } = usePatternFormat({
      ...props,
      format: '##/##',
    });
    const _format = (val: string) => {
      let month = val.substring(0, 2);
      const year = val.substring(2, 4);

      if (month.length === 1 && parseInt(month[0]) > 1) {
        month = `0${month[0]}`;
      } else if (month.length === 2) {
        if (Number(month) === 0) {
          month = '01';
        } else if (Number(month) > 12) {
          month = '12';
        }
      }
      return isMask ? format(`${month}${year}`) : `${month}/${year}`;
    };
    return <NumberInput {...props} format={_format} />;
  }

  const [inputValue, setInputValue] = React.useState('');

  return (
    <CardExpiry
      isMask
      formatType="custom"
      mask="_"
      allowEmptyFormatting
      customInput={Input as React.ComponentType<unknown>}
      {...{
        value: inputValue,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value),
        clearable: true,
        onClearClick: () => setInputValue(''),
        label: 'Clearable Card Expiry Date with Mask',
      }}
    />
  );
};

export const PhoneNumber = () => (
  <NumberInput
    formatType="pattern"
    format="+1 (###) ###-####"
    allowEmptyFormatting
    mask="_"
    customInput={Input as React.ComponentType<unknown>}
    {...{ label: 'US Phone Number' }}
  />
);

export const CreditCardInputWithGap = () => {
  type CardExpiryType = NumberInputProps & {
    isMask?: boolean;
  };

  function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
    const { format } = usePatternFormat({
      ...props,
      format: '##/##',
    });
    const _format = (val: string) => {
      let month = val.substring(0, 2);
      const year = val.substring(2, 4);

      if (month.length === 1 && parseInt(month[0]) > 1) {
        month = `0${month[0]}`;
      } else if (month.length === 2) {
        if (Number(month) === 0) {
          month = '01';
        } else if (Number(month) > 12) {
          month = '12';
        }
      }
      return isMask ? format(`${month}${year}`) : `${month}/${year}`;
    };
    return <NumberInput {...props} format={_format} />;
  }

  return (
    <div className="flex flex-col gap-2">
      <NumberInput
        formatType="pattern"
        format="#### #### #### ####"
        value="411111"
        mask="_"
        customInput={Input as React.ComponentType<unknown>}
        {...{ label: 'Outline', variant: 'outline' }}
      />
      <div className="grid grid-cols-2 gap-2">
        <CardExpiry
          isMask
          formatType="custom"
          placeholder="MM/YY"
          mask={['M', 'M', 'Y', 'Y']}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{ variant: 'outline' }}
        />
        <NumberInput
          formatType="pattern"
          format="###"
          mask={['C', 'V', 'C']}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{ variant: 'outline' }}
        />
      </div>
    </div>
  );
};

export const CreditCardInputWithNoGap = () => {
  type CardExpiryType = NumberInputProps & {
    isMask?: boolean;
  };

  function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
    const { format } = usePatternFormat({
      ...props,
      format: '##/##',
    });
    const _format = (val: string) => {
      let month = val.substring(0, 2);
      const year = val.substring(2, 4);

      if (month.length === 1 && parseInt(month[0]) > 1) {
        month = `0${month[0]}`;
      } else if (month.length === 2) {
        if (Number(month) === 0) {
          month = '01';
        } else if (Number(month) > 12) {
          month = '12';
        }
      }
      return isMask ? format(`${month}${year}`) : `${month}/${year}`;
    };
    return <NumberInput {...props} format={_format} />;
  }

  return (
    <div className="flex flex-col">
      <NumberInput
        formatType="pattern"
        format="#### #### #### ####"
        value="411111"
        mask="_"
        customInput={Input as React.ComponentType<unknown>}
        {...{
          label: 'Outline',
          variant: 'outline',
          inputClassName:
            'border-b-0 rounded-b-none hover:border-b hover:rounded-b focus:border-b focus:rounded-b',
        }}
      />
      <div className="grid grid-cols-2">
        <CardExpiry
          isMask
          formatType="custom"
          placeholder="MM/YY"
          mask={['M', 'M', 'Y', 'Y']}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{
            variant: 'outline',
            inputClassName:
              'rounded-t-none rounded-br-none hover:rounded-t hover:rounded-br focus:rounded-t focus:rounded-br',
          }}
        />
        <NumberInput
          formatType="pattern"
          format="###"
          mask={['C', 'V', 'C']}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{
            variant: 'outline',
            inputClassName:
              'rounded-t-none rounded-bl-none border-l-0 hover:rounded-t hover:rounded-bl hover:border-l focus:rounded-t focus:rounded-bl focus:border-l',
          }}
        />
      </div>
    </div>
  );
};
