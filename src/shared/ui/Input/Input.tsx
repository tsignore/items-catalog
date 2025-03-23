import React, { InputHTMLAttributes, memo, useRef } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value = "",
    onChange,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={`${cls.InputWrapper} ${className}`}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});
Input.displayName = "Input";
