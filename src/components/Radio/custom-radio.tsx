import { useState } from "react";

const Radio = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const [isActive, setIsActive] = useState(false)
  const handleToggle = () => {
    setIsActive(!isActive)
    onClick
  }
  return (
    <div
      onClick={handleToggle}
      className={`w-[18px] h-[18px] min-w-[18px] min-h-[18px] grid place-items-center rounded-full cursor-pointer ${active || isActive ? "border border-[#0B8749]" : "border border-[#d9d9d9]"
        }`}
    >
      {active || isActive && (
        <span className="w-[10px] min-w-[10px] h-[10px] bg-[#0B8749] rounded-full"></span>
      )}
    </div>
  );
};


export default Radio;
