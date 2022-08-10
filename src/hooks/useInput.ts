import { ChangeEventHandler, useState } from "react";

interface IInputOptions {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

type UseInputHookOutput = [IInputOptions, () => void];

export const useInput = (value: string): UseInputHookOutput => {
  const [inputValue, setinputValue] = useState<string>(value);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setinputValue(target.value);
  };
  const clearInput = () => {
    setinputValue("");
  };

  return [{ value: inputValue, onChange: handleInputChange }, clearInput];
};