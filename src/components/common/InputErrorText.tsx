import React from 'react';

type InputErrorTextProps = {
  error: string;
};

export default function InputErrorText({ error }: InputErrorTextProps) {
  return <p className="text-red-500 text-sm">{error}</p>;
}
