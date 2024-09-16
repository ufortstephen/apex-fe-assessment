/* This example requires Tailwind CSS v2.0+ */
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
  disabled?: boolean
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Select({
  label,
  selected,
  setSelected,
  data,
  name,
  height,
  placeholder,
  borderStyle,
  disabled
}: selectProps) {
  // const onChange = ({ name, id }: { name: string, id: string }) => {
  //    setSelected({ name, id })

  // }
  return (
    <Listbox value={selected} >
      {({ open }) => (
        <div className="flex flex-col w-full">
          {label && (
            <Listbox.Label className="block text-sm  text-[#494949] font-medium mb-2">
              {label && label}
            </Listbox.Label>
          )}
          <div className="relative w-full ">
            <Listbox.Button
              placeholder={placeholder}
              className={`${height ? height : "h-[56px] bg-[#FAFAFA]"
                } relative font-[500] flex justify-between items-center w-full rounded-[12px] outline-none shadow-sm px-4  cursor-pointer py-2 text-left  focus:outline-none  sm:text-sm pr-0 gap-4 ${borderStyle ? borderStyle : " border border-[#E8EAED]"
                }`}
            >
              {selected?.name ? (
                <span className="block truncate capitalize text-sm">
                  {selected?.name
                    ? selected?.name?.toLowerCase()
                    : name?.toLowerCase()}
                </span>
              ) : (
                <span className="text-[13px]">{placeholder}</span>
              )}
              <span className=" flex items-center pr-2 pointer-events-none  ">
                <DropArrow isOpen={open} />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={`absolute z-10 mt-1 w-full bg-white  max-h-60 rounded-md  text-base  overflow-auto  p-[2px] sm:text-sm`}
                style={{ zIndex: 99999 }}
              >

                <div className="h-full  bg-[#fff] dropdown-active rounded-md py-1 relative z-50 px-1 mt-1">
                  {data?.map((person: any, index: number) => (
                    <Listbox.Option
                      key={index}
                      className={({ active, selected }) =>
                        classNames(
                          active
                            ? "bg-[#F9FAFB]"
                            : "text-gray-900",
                          "cursor-pointer select-none relative py-2 pl-4  pr-4 py-4 rounded-[12px]"
                        )
                      }
                      onClick={() => setSelected(person)}
                      value={person}
                    >
                      {({ selected, active }) => (
                        <section className="flex items-center gap-1.5">
                          {person?.isDotted && <span className={`block w-1.5 h-1.5 rounded-full ${person?.dotClasses}`}></span>}
                          <span
                            className={classNames(
                              selected ? "font-medium" : "font-[500] capitalize",
                              `block truncate text-sm ${person?.classNames}`
                            )}
                          >
                            {person?.name}
                          </span>
                        </section>
                      )}
                    </Listbox.Option>
                  ))}
                </div>

              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}


