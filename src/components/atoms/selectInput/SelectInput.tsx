import React, { ChangeEvent, useId } from "react";

type SelectInputType<T> = {
  label: string;
  name: string;
  id?: string;
  currentValue: string;
  options: {
    label: string;
    value: T;
  }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectInput = <T extends string>({
  label,
  name,
  id,
  currentValue,
  options,
  onChange,
}: SelectInputType<T>) => {
  const generatedId = useId();

  return (
    <div className="relative flex gap-2 items-center mb-6 text-sm">
      <label
        htmlFor={id ? id : generatedId}
        className="absolute z-10 -top-2.5 left-2 bg-white px-1.5 text-zinc-500 text-xs"
      >
        {label}
      </label>
      <select
        name={name}
        id={id ? id : generatedId}
        className="rounded text-sm border-zinc-700 focus:ring-indigo-600 focus:border-indigo-600"
        value={currentValue}
        onChange={(e) => onChange(e)}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
