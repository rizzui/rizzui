import React from "react";
import { NumberInput, Input, usePatternFormat, NumberInputProps } from "rizzui";

type CardExpiryType = NumberInputProps & {
  isMask?: boolean;
};

export default function NumberInputDefault({
  type,
  placeholder,
  value,
  formatType,
  readOnly,
  suffix,
  prefix,
  thousandsGroupStyle,
  ...props
}) {
  return (
    <NumberInput
      type={type}
      value={value}
      placeholder={placeholder}
      formatType={formatType}
      customInput={Input as React.ComponentType<unknown>}
      readOnly={readOnly}
      suffix={suffix}
      prefix={prefix}
      thousandsGroupStyle={thousandsGroupStyle}
      {...props}
    />
  );
}

function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
  const { format } = usePatternFormat({
    ...props,
    format: "##/##",
  });

  const _format = (val: string) => {
    let month = val.substring(0, 2);
    const year = val.substring(2, 4);

    if (month.length === 1 && parseInt(month[0]) > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = "12";
      }
    }
    return isMask ? format(`${month}${year}`) : `${month}/${year}`;
  };

  return (
    <NumberInput
      {...props}
      format={_format}
    />
  );
}

export function NumberInputClearable() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <CardExpiry
      isMask={true}
      formatType="custom"
      mask="_"
      allowEmptyFormatting
      customInput={Input as React.ComponentType<unknown>}
      {...{
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value),
        clearable: true,
        onClear: () => setInputValue(""),
        label: "Clearable",
      }}
    />
  );
}

function CardExpiryTwo({ isMask = false, ...props }: CardExpiryType) {
  const { format } = usePatternFormat({
    ...props,
    format: "##/##",
  });

  const _format = (val: string) => {
    let month = val.substring(0, 2);
    const year = val.substring(2, 4);

    if (month.length === 1 && parseInt(month[0]) > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = "12";
      }
    }
    return isMask ? format(`${month}${year}`) : `${month}/${year}`;
  };

  return (
    <NumberInput
      {...props}
      format={_format}
    />
  );
}

export function NumberInputCardExpiry() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <CardExpiryTwo
      isMask={true}
      formatType="custom"
      mask="_"
      allowEmptyFormatting
      customInput={Input as React.ComponentType<unknown>}
      {...{
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value),
        clearable: true,
        onClear: () => setInputValue(""),
        label: "Card Expiry",
      }}
    />
  );
}

export function NumberInputPhoneNumber() {
  return (
    <NumberInput
      formatType="pattern"
      format="+1 (###) ###-####"
      allowEmptyFormatting
      mask="_"
      customInput={Input as React.ComponentType<unknown>}
      {...{ label: "US Phone Number" }}
    />
  );
}

export function NumberInputWithGap() {
  type CardExpiryType = NumberInputProps & {
    isMask?: boolean;
  };

  function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
    const { format } = usePatternFormat({
      ...props,
      format: "##/##",
    });
    const _format = (val: string) => {
      let month = val.substring(0, 2);
      const year = val.substring(2, 4);

      if (month.length === 1 && parseInt(month[0]) > 1) {
        month = `0${month[0]}`;
      } else if (month.length === 2) {
        if (Number(month) === 0) {
          month = "01";
        } else if (Number(month) > 12) {
          month = "12";
        }
      }
      return isMask ? format(`${month}${year}`) : `${month}/${year}`;
    };
    return (
      <NumberInput
        {...props}
        format={_format}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <NumberInput
        formatType="pattern"
        format="#### #### #### ####"
        value="411111"
        mask="_"
        customInput={Input as React.ComponentType<unknown>}
        {...{ label: "Credit Card Input Group", variant: "outline" }}
      />
      <div className="grid grid-cols-2 gap-2">
        <CardExpiry
          isMask
          formatType="custom"
          placeholder="MM/YY"
          mask={["M", "M", "Y", "Y"]}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{ variant: "outline" }}
        />
        <NumberInput
          formatType="pattern"
          format="###"
          mask={["C", "V", "C"]}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{ variant: "outline" }}
        />
      </div>
    </div>
  );
}

export function NumberInputWithNoGap() {
  function CardExpiry({ isMask = false, ...props }: CardExpiryType) {
    const { format } = usePatternFormat({
      ...props,
      format: "##/##",
    });
    const _format = (val: string) => {
      let month = val.substring(0, 2);
      const year = val.substring(2, 4);

      if (month.length === 1 && parseInt(month[0]) > 1) {
        month = `0${month[0]}`;
      } else if (month.length === 2) {
        if (Number(month) === 0) {
          month = "01";
        } else if (Number(month) > 12) {
          month = "12";
        }
      }
      return isMask ? format(`${month}${year}`) : `${month}/${year}`;
    };
    return (
      <NumberInput
        {...props}
        format={_format}
      />
    );
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
          label: "Credit Card Input Group",
          variant: "outline",
          inputClassName:
            "border-b-0 rounded-b-none hover:border-b hover:rounded-b focus:border-b focus:rounded-b",
        }}
      />
      <div className="grid grid-cols-2">
        <CardExpiry
          isMask
          formatType="custom"
          placeholder="MM/YY"
          mask={["M", "M", "Y", "Y"]}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{
            variant: "outline",
            inputClassName:
              "rounded-t-none rounded-br-none hover:rounded-t hover:rounded-br focus:rounded-t focus:rounded-br",
          }}
        />
        <NumberInput
          formatType="pattern"
          format="###"
          mask={["C", "V", "C"]}
          allowEmptyFormatting
          customInput={Input as React.ComponentType<unknown>}
          {...{
            variant: "outline",
            inputClassName:
              "rounded-t-none rounded-bl-none border-l-0 hover:rounded-t hover:rounded-bl hover:border-l focus:rounded-t focus:rounded-bl focus:border-l",
          }}
        />
      </div>
    </div>
  );
}
