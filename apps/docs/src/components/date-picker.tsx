import React from "react";
import { cn, Input, InputProps } from "rizzui";
import ReactDatePicker from "react-datepicker";
import type { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
const calendarContainerClasses = {
  base: "[&.react-datepicker]:shadow-lg [&.react-datepicker]:border-gray-100 [&.react-datepicker]:rounded-md",
  monthContainer: {
    padding: "[&.react-datepicker>div]:pt-5 [&.react-datepicker>div]:pb-3",
  },
};

const prevNextButtonClasses = {
  base: "[&.react-datepicker>button]:items-baseline [&.react-datepicker>button]:top-7",
  border:
    "[&.react-datepicker>button]:border [&.react-datepicker>button]:border-solid [&.react-datepicker>button]:border-gray-300 [&.react-datepicker>button]:rounded-md",
  size: "[&.react-datepicker>button]:h-[22px] [&.react-datepicker>button]:w-[22px]",
  children: {
    position: "[&.react-datepicker>button>span]:top-0",
    border:
      "[&.react-datepicker>button>span]:before:border-t-[1.5px] [&.react-datepicker>button>span]:before:border-r-[1.5px] [&.react-datepicker>button>span]:before:border-gray-400",
    size: "[&.react-datepicker>button>span]:before:h-[7px] [&.react-datepicker>button>span]:before:w-[7px]",
  },
};

const timeOnlyClasses = {
  base: "[&.react-datepicker--time-only>div]:pr-0 [&.react-datepicker--time-only>div]:w-28",
};

export interface DatePickerProps<selectsRange extends boolean | undefined>
  extends Omit<ReactDatePickerProps, "selectsRange" | "onChange"> {
  /** Pass function in onChange prop to handle selecting value */
  onChange(
    date: selectsRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null],
    event: React.SyntheticEvent<any> | undefined,
  ): void;
  /** Whether range selecting is enabled */
  selectsRange?: selectsRange;
  /** Pass input props to style input */
  inputProps?: InputProps;
}

const DatePicker = ({
  customInput,
  showPopperArrow = false,
  dateFormat = "d MMMM yyyy",
  selectsRange = false,
  onCalendarOpen,
  onCalendarClose,
  inputProps,
  calendarClassName,
  ...props
}: DatePickerProps<boolean>) => {
  const [isCalenderOpen, setIsCalenderOpen] = React.useState(false);
  const handleCalenderOpen = () => setIsCalenderOpen(true);
  const handleCalenderClose = () => setIsCalenderOpen(false);
  return (
    <ReactDatePicker
      customInput={
        customInput || (
          <Input
            prefix={<CalendarIcon className="w-5 h-5 text-gray-500" />}
            suffix={
              <ChevronDownIcon
                className={cn(
                  "h-4 w-4 text-gray-500 transition",
                  isCalenderOpen && "rotate-180",
                )}
              />
            }
            {...inputProps}
          />
        )
      }
      showPopperArrow={showPopperArrow}
      dateFormat={dateFormat}
      selectsRange={selectsRange}
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
        calendarClassName,
      )}
      {...props}
    />
  );
};

DatePicker.displayName = "DatePicker";
export default DatePicker;

export function DatePickerDefault() {
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="h-96">
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="Select Date"
      />
    </div>
  );
}

export function MonthPicker() {
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="h-96">
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="Select Month from Dropdown"
        showMonthDropdown
      />
    </div>
  );
}

export function MonthDropdownPicker() {
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="h-96">
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="Select Month from Dropdown"
        showMonthDropdown
      />
    </div>
  );
}

export function YearPicker() {
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="w-full h-72">
      <DatePicker
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
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="h-96">
      <DatePicker
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
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="h-96">
      <DatePicker
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
  const [startDate, setStartDate] = React.useState<Date>();
  return (
    <div className="h-96">
      <DatePicker
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
  const [starRangetDate, setStartRangeDate] = React.useState<Date | null>(null);
  const [endRangeDate, setEndRangeDate] = React.useState<Date | null>(null);
  const handleRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartRangeDate(start);
    setEndRangeDate(end);
  };
  return (
    <div className="w-full h-96">
      <DatePicker
        selected={starRangetDate}
        onChange={handleRangeChange}
        startDate={starRangetDate}
        endDate={endRangeDate}
        monthsShown={2}
        placeholderText="Select Date in a Range"
        selectsRange
        inputProps={{
          clearable: true,
          onClear: () => {
            setStartRangeDate(null);
            setEndRangeDate(null);
          },
        }}
      />
    </div>
  );
}
