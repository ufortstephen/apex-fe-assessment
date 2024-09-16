import { LoadingSpinner } from "../LoadingSpinner";

interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  name?: string | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  loadingText?: string;
  showLogo?: boolean;
  type: "submit" | "reset" | "button" | undefined;
}

export const Button = ({
  name,
  type,
  className,
  loading,
  disabled,
  onClick
}: buttonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center justify-center  px-3 py-3 text-sm  text-[#0E0E0E] leading-6 shadow-sm disabled:cursor-not-allowed ${className}`}
    >
      {
        <>
          {loading ? <LoadingSpinner /> : `${name}`}
        </>}
    </button>
  );
};
