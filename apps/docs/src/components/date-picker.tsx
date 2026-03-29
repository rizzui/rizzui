import React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from 'rizzui/cn';
import { Input, type InputProps } from 'rizzui/input';
import DatePicker, { type DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const datePicker = tv({
  slots: {
    calendar:
      '[&.react-datepicker]:!shadow-lg [&.react-datepicker]:!border-[var(--border-color)] [&.react-datepicker]:!rounded-[var(--border-radius)]',
    monthContainer:
      '[&.react-datepicker>div]:!pt-5 [&.react-datepicker>div]:!pb-3',
    prevNextButton:
      '[&.react-datepicker>button]:!items-baseline [&.react-datepicker>button]:!top-7 [&.react-datepicker>button]:!border [&.react-datepicker>button]:!border-solid [&.react-datepicker>button]:!border-[var(--border-color)] [&.react-datepicker>button]:!rounded-[var(--border-radius)] [&.react-datepicker>button]:!h-[22px] [&.react-datepicker>button]:!w-[22px] hover:[&.react-datepicker>button]:!border-[var(--text-primary)] [&.react-datepicker>button:hover>span::before]:!border-[var(--text-primary)]',
    prevNextButtonChild:
      '[&.react-datepicker>button>span]:!top-0 [&.react-datepicker>button>span]:!before:border-t-[1.5px] [&.react-datepicker>button>span]:!before:border-r-[1.5px] [&.react-datepicker>button>span]:!before:border-[var(--muted-foreground)] [&.react-datepicker>button>span]:!before:h-[7px] [&.react-datepicker>button>span]:!before:w-[7px]',
    timeOnly:
      '[&.react-datepicker--time-only>div]:!pr-0 [&.react-datepicker--time-only>div]:!w-28',
    popper:
      '[&>svg]:!fill-[var(--background)] dark:[&>svg]:!fill-[var(--muted)] [&>svg]:!stroke-[var(--border-color)] dark:[&>svg]:!stroke-[var(--muted)] dark:[&>svg]:!text-[var(--muted)]',
  },
});

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

  const {
    calendar: calendarClass,
    monthContainer: monthContainerClass,
    prevNextButton: prevNextButtonClass,
    prevNextButtonChild: prevNextButtonChildClass,
    timeOnly: timeOnlyClass,
    popper: popperClass,
  } = datePicker();

  return (
    <DatePicker
      customInput={
        customInput || (
          <Input
            prefix={
              <CalendarIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
            }
            suffix={
              <ChevronDownIcon
                className={cn(
                  'h-4 w-4 text-[var(--muted-foreground)] transition',
                  isCalenderOpen && 'rotate-180'
                )}
              />
            }
            {...inputProps}
          />
        )
      }
      onCalendarOpen={onCalendarOpen || handleCalenderOpen}
      onCalendarClose={onCalendarClose || handleCalenderClose}
      calendarClassName={cn(
        calendarClass(),
        monthContainerClass(),
        prevNextButtonClass(),
        prevNextButtonChildClass(),
        timeOnlyClass(),
        calendarClassName
      )}
      popperClassName={cn(popperClass(), popperClassName)}
      {...props}
    />
  );
};

ReactDatePicker.displayName = 'ReactDatePicker';
export default ReactDatePicker;

export function DatePickerDefault({ className }: { className?: string }) {
  const [startDate, setStartDate] = React.useState<Date | null>();
  return (
    <div className={cn('h-96', className)}>
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
    <div className="h-72">
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
    <div className="h-96">
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
