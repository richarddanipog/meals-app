import React from 'react';
import InputErrorText from './InputErrorText';

type TInputTextProps = {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
};

export default function InputText({
  name = '',
  value,
  onChange,
  placeholder,
  error,
}: TInputTextProps) {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full sm:w-80 px-4 md:px-5 py-2 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all placeholder-gray-400"
      />
      {error && <InputErrorText error={error} />}
    </>
  );
}
