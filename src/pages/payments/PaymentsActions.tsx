import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CloseIcon, DotsVertical } from "../../assets/icons";

const PaymentActions = ({ data }: { data: any }) => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const navigate = useNavigate()
    const trigger = useRef<HTMLButtonElement>(null)
    const dropDownEl = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!dropDownEl.current || !trigger.current) return;
            if (!showDropdown || dropDownEl.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setShowDropdown(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!showDropdown || keyCode !== 27) return;
            setShowDropdown(false)
        };
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    return (
        <section className="relative">
            <button
                ref={trigger}
                onClick={() => setShowDropdown(!showDropdown)}
                className={`relative ${showDropdown ? 'z-50' : 'z-50'}`}
            >
                <DotsVertical />
            </button>


            <section
                ref={dropDownEl}
                style={showDropdown ? { maxHeight: 'max-content', opacity: 1, display: 'flex', zIndex: 99999 } : { maxHeight: 0, opacity: 0, display: 'none' }}

                className="absolute bg-white right-[40%]  top-[135%] w-[180px]  h-max flex flex-col  rounded-[8px] shadow-md overf transition-all duration-300 ease-in-out h-max bg-white z-50">

                {showDropdown ? <section onClick={() => setShowDropdown(!showDropdown)}
                    className="absolute -top-4 z-30 -right-3">
                    <CloseIcon />
                </section> : <></>}
                <div className="px-1">

                    <button className="flex items-center gap-2 p-1.5 mt-1 px-2 w-full  text-sm text-[#383A47] font-[500] hover:bg-primary-100 hover:rounded-[8px]">
                        Edit
                    </button>
                    <button className="flex items-center gap-2 p-1.5 px-2  w-full text-sm text-[#383A47] font-[500] hover:bg-primary-100 hover:rounded-[8px]">
                        View Profile
                    </button>

                </div>
                <div className="m-1 border-t border-[#E5EEFE] m-1 pt-1">
                    <button className="flex items-center gap-2 p-1.5 px-2  text-sm text-[#D30000] w-full font-[500] hover:bg-[#F7E6E9] hover:rounded-[8px]">
                        Delete
                    </button>
                </div>
            </section>
        </section>
    )
}

export default PaymentActions;