import { Listbox, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { DropArrow } from "../../assets/icons";
interface selectProps {
    label?: string;
    selected: any;
    setSelected: any;
    data: any;
    name?: string;
    height?: string;
    placeholder?: string;
    borderStyle?: string
    customClasses?: string
    disabled?: boolean
    showIcon?: boolean
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function NumberSelect({
    label,
    selected,
    setSelected,
    data,
    name,
    height,
    placeholder,
    customClasses,
    showIcon,
    disabled
}: selectProps) {
    return (
        <Listbox value={selected} >
            {({ open }) => (
                <div className="flex flex-col w-full">
                    {label && (
                        <Listbox.Label className="block text-sm  text-[#494949] font-medium mb-2">
                            {label && label}
                        </Listbox.Label>
                    )}
                    <div className="relative w-full">
                        <Listbox.Button
                            placeholder={placeholder}
                            className={`${height ? height : "h-[40px]"
                                } relative flex justify-between items-center w-full rounded-[8px] rounded-[12px] border border-[#EEEFF2]
                outline-none  px-2  cursor-pointer py-3 text-left focus:outline-none  sm:text-sm pr-0 gap-4 ${customClasses}`}
                        >
                            <div className="flex items-center gap-2 px-1">
                                {showIcon && <span>
                                    {/* <MonthPickerIcon /> */}
                                </span>}
                                {selected?.name ? (
                                    <span className="block truncate capitalize text-sm font-[600]">
                                        {selected?.name
                                            ? selected?.name?.toLowerCase()
                                            : name?.toLowerCase()}
                                    </span>
                                ) : (
                                    <span className="text-[13px] font-[500]">{placeholder}</span>
                                )}
                                <span className=" flex items-center  gap-2 pr-2 pl-1 pointer-events-none  ">
                                    <DropArrow isOpen={open} />
                                </span>
                            </div>

                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className={`absolute z mt-1 w-full bg-white  max-h-60 left-0 rounded-md py-1 text-base  z-50 overflow-auto focus:outline-none sm:text-sm p-1  shadow-sm ${open && " border"
                                    }`}
                            >
                                {data?.map((item: any, index: number) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "bg-primary-100 text-primary-900"
                                                    : "text-gray-900",
                                                "cursor-pointer select-none relative py-2 pl-4  pr-4 capitalize font-[500]"
                                            )
                                        }
                                        onClick={() => setSelected(item)}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={classNames(
                                                        selected ? "font-medium" : "font-normal capitalize",
                                                        "block truncate text-sm capitalize font-[500]"
                                                    )}
                                                >
                                                    {item?.name}
                                                </span>
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </div>
            )}
        </Listbox>
    );
}


