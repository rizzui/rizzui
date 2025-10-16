import React from "react";
import { cn, Input, InputProps } from "rizzui";
import DatePicker, { type DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const calendarContainerClasses = {
  base: "[&.react-datepicker]:!shadow-lg [&.react-datepicker]:!border-gray-100 [&.react-datepicker]:!rounded-md ",
  monthContainer: {
    padding: "[&.react-datepicker>div]:!pt-5 [&.react-datepicker>div]:!pb-3",
  },
};

const prevNextButtonClasses = {
  base: "[&.react-datepicker>button]:!items-baseline [&.react-datepicker>button]:!top-7",
  border:
    "[&.react-datepicker>button]:!border [&.react-datepicker>button]:!border-solid [&.react-datepicker>button]:!border-gray-300 [&.react-datepicker>button]:!rounded-md",
  size: "[&.react-datepicker>button]:!h-[22px] [&.react-datepicker>button]:!w-[22px] hover:[&.react-datepicker>button]:!border-gray-900 [&.react-datepicker>button:hover>span::before]:!border-gray-900",
  children: {
    position: "[&.react-datepicker>button>span]:!top-0",
    border:
      "[&.react-datepicker>button>span]:!before:border-t-[1.5px] [&.react-datepicker>button>span]:!before:border-r-[1.5px] [&.react-datepicker>button>span]:!before:border-gray-400",
    size: "[&.react-datepicker>button>span]:!before:h-[7px] [&.react-datepicker>button>span]:!before:w-[7px]",
  },
};

const timeOnlyClasses = {
  base: "[&.react-datepicker--time-only>div]:!pr-0 [&.react-datepicker--time-only>div]:!w-28",
};

const popperClasses = {
  base: "[&>svg]:!fill-white dark:[&>svg]:!fill-gray-100 [&>svg]:!stroke-gray-300 dark:[&>svg]:!stroke-muted dark:[&>svg]:!text-muted",
};

export type ReactDatePickerProps = DatePickerProps & {
  inputProps?: InputProps;
};

const ReactDatePicker = ({
  inputProps,
  customInput,
  onCalendarOpen,
  onCalendarClose,
  popperClassName,
  calendarClassName,
  ...props
}: ReactDatePickerProps) => {
  const [isCalenderOpen, setIsCalenderOpen] = React.useState(false);
  const handleCalenderOpen = () => setIsCalenderOpen(true);
  const handleCalenderClose = () => setIsCalenderOpen(false);
  return (
    <DatePicker
      customInput={
        customInput || (
          <Input
            prefix={<CalendarIcon className="w-5 h-5 text-gray-500" />}
            suffix={
              <ChevronDownIcon
                className={cn("h-4 w-4 text-gray-500 transition", isCalenderOpen && "rotate-180")}
              />
            }
            {...inputProps}
          />
        )
      }
      onCalendarOpen={onCalendarOpen || handleCalenderOpen}
      onCalendarClose={onCalendarClose || handleCalenderClose}
      calendarClassName={cn(
        calendarContainerClasses.base,
        calendarContainerClasses.monthContainer.padding,
        prevNextButtonClasses.base,
        prevNextButtonClasses.border,
        prevNextButtonClasses.size,
        prevNextButtonClasses.children.position,
        prevNextButtonClasses.children.border,
        prevNextButtonClasses.children.size,
        timeOnlyClasses.base,
        calendarClassName
      )}
      popperClassName={cn(popperClasses.base, popperClassName)}
      {...props}
    />
  );
};

ReactDatePicker.displayName = "ReactDatePicker";
export default ReactDatePicker;

export function DatePickerDefault() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="h-96">
      <ReactDatePicker
        selected={startDate}
        placeholderText="Select a date"
        onChange={(date: Date) => setStartDate(date)}
      />
    </div>
  );
}

export function MonthPicker() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="h-96">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="Select Month from Dropdown"
        showMonthDropdown
      />
    </div>
  );
}

export function MonthDropdownPicker() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="h-96">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="Select Month from Dropdown"
        showMonthDropdown
      />
    </div>
  );
}

export function YearPicker() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="w-full h-72">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="yyyy"
        placeholderText="Select Year"
        showYearPicker
      />
    </div>
  );
}

export function YearDropdownPicker() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="h-96">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="Select Year from Dropdown"
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export function CalendarWithTime() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="h-96">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="d MMMM yyyy, h:mm aa"
        placeholderText="Select Date & Time"
        showTimeSelect
      />
    </div>
  );
}

export function TimePicker() {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className="h-96">
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="h:mm aa"
        placeholderText="Select Time"
        showTimeSelect
        showTimeSelectOnly
      />
    </div>
  );
}

export function RangeDatePicker() {
  const [starDate, setStartDate] = React.useState<[Date | null, Date | null]>();

  return (
    <div className="w-full h-96">
      <ReactDatePicker
        startDate={starDate?.[0]!}
        endDate={starDate?.[1]!}
        onChange={(dates) => setStartDate(dates)}
        monthsShown={2}
        placeholderText="Select Date in a Range"
        selectsRange
        inputProps={{
          clearable: true,
          onClear: () => setStartDate([null, null]),
        }}
      />
    </div>
  );
}
