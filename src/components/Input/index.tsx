import { ChangeEvent, useRef } from "react";
interface inputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  classes?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onPlaceChanged?: any;
  type?: string;
  value?: string;
  label?: string;
  required: boolean;
  togglePassword?: boolean;
  onPasswordToggle?: (e: React.MouseEvent<HTMLElement>) => void;
  pattern?: string;
  inputRef?: any;
  readonly?: boolean;
  isTelInput?: boolean;
  list?: string;
  accept?: string;
  min?: string;
  disabled?: boolean
}

export const InputField = ({
  name,
  id,
  placeholder,
  classes,
  onChange,
  onInput,
  onFocus,
  onBlur,
  type,
  required,
  togglePassword,
  onPasswordToggle,
  pattern,
  inputRef,
  value,
  readonly,
  isTelInput,
  list,
  accept,
  min,
  disabled
}: inputProps) => {

  return (
    <>
      <input
        className={`${classes} block w-full rounded-[12px] border border-[#E8EAED] py-3 px-3.5 placeholder:text-placeholder placeholder:text-placeholder-inactive placeholder:text-sm  text-sm sm:leading-6 outline-none h-[56px] ${type === "date" ? "relative" : ""} disabled:cursor-not-allowed `}
        type={type ? type : "text"}
        name={name}
        id={id}
        ref={inputRef}
        list={list}
        accept={accept}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        disabled={disabled}
        min={min}
        value={value}
        readOnly={readonly}
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          isTelInput ? (e.target.value = e.target.value.slice(0, 11)) : onInput
        }
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {togglePassword && (
        <span
          onClick={onPasswordToggle}
          className="cursor-pointer absolute top-3.5 right-3 text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.23 123.23 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133.06 133.06 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.23 123.23 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.47 153.47 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.47 153.47 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11Z"
            />
          </svg>
        </span>
      )}
    </>
  );
};
