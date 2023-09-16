import React from "react";
import { RangeSlider, cn } from "rizzui";

export function RangeSliderCounter() {
  const [state, setState] = React.useState({
    min: 200,
    max: 600,
  });

  function handleRangeChange(value: any) {
    setState({
      min: value[0],
      max: value[1],
    });
  }
  function handleMaxChange(max: number) {
    setState({
      ...state,
      max: max || state.min,
    });
  }
  function handleMinChange(min: number) {
    setState({
      ...state,
      min: min || 0,
    });
  }

  return (
    <div>
      <RangeSlider
        range
        min={0}
        max={1000}
        value={[state.min, state.max]}
        onChange={(value: any) => handleRangeChange(value)}
        className={cn("[&>.rc-slider-step]:hidden")}
      />
      <div className="mt-5 flex items-center justify-between gap-5 text-sm font-bold">
        <div className="overflow-hidden rounded-lg max-w-[200px] w-full border border-gray-lighter bg-gray-lightest py-2">
          <p className="px-3 pt-1 text-gray-400">Min</p>
          <input
            type="number"
            value={state.min}
            onChange={(e) => handleMinChange(parseInt(e.target.value))}
            className="w-full border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
            min={0}
            max={state.max}
            readOnly
          />
        </div>
        <div className="overflow-hidden rounded-lg max-w-[200px] w-full border border-gray-lighter bg-gray-lightest py-2">
          <p className="px-3 pt-1 text-gray-400">Max</p>
          <input
            type="number"
            value={state.max}
            onChange={(e) => handleMaxChange(parseInt(e.target.value))}
            className="w-full border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
            min={state.min}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
