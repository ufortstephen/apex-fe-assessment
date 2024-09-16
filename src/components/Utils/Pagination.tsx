import React, { useEffect } from "react";
import { PaginationArrowLeft, PaginationArrowRight } from "../../assets/icons";

interface paginationProps {
    currentPage: number;
    totlaPages: number;
    onPageChange: any;
}

const Pagination = ({
    currentPage,
    totlaPages,
    onPageChange,
}: paginationProps) => {
    const onPageClick = (page: any) => {
        onPageChange(page);
    };
    if (totlaPages) {
        const array = Array.from({ length: totlaPages }, (_, i) => i + 1);

        const getPageArray = (arr: number[], currentPage: number): (number | string)[] => {
            if (arr.length <= 4) {
                return arr;
            }

            const firstFour = arr.slice(0, 4);
            const lastTwo = arr.slice(-1);

            if (currentPage <= 4) {
                return [...firstFour, '...', ...lastTwo];
            } else if (currentPage >= arr.length - 1) {
                return [...firstFour, '...', ...lastTwo];
            } else {
                const middle = arr.slice(currentPage - 1, currentPage + 1);
                return [...middle, '...', ...arr.slice(-2)];
            }
        }

        const paginationArray = getPageArray(array, currentPage);

        return (
            <div className="flex items-center flex-wrap md:flex-nowrap justify-center py-5 lg:px-0 sm:px-0 md:px-4">
                <div className="w-full  flex items-center justify-between ">
                    <div
                        onClick={() => onPageClick(currentPage - 1)}
                        className="flex items-center  text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer"
                    >
                        {currentPage > 1 ? (

                            <button className="flex items-center justify-center rounded-md h-8 w-8">

                                <PaginationArrowLeft />
                            </button>

                        ) : (
                            ""
                        )}
                    </div>

                    <div className="flex gap-x-1 items-center flex-nowrap md:flex-wrap">
                        {
                            paginationArray?.map((e: any, i: any) => {
                                return (
                                    <button
                                        onClick={() => e === '...' ? onPageClick(currentPage + 1) : onPageClick(e)}
                                        disabled={i + 1 === currentPage}
                                        className={`${e === currentPage
                                            ? "bg-[#E7F7EF] text-[#0CAF60] disabled font-[600] cursor-not-allowed"
                                            : "bg-transparent text-[#A0AEC0] font-[400]"
                                            } p-3 rounded-[12px] h-10 w-10  text-sm items-center text-center justify-center flex `}
                                        key={i}
                                    >
                                        {e}
                                    </button>
                                )
                            })
                        }

                    </div>
                    <div
                        onClick={() => onPageClick(currentPage + 1)}
                        className="flex items-center  text-gray-600 dark:text-gray-200  hover:text-white cursor-pointer"
                    >
                        {totlaPages > 1 && currentPage !== totlaPages ? (
                            <button className="flex items-center justify-center rounded-md h-8 w-8">

                                <PaginationArrowRight />
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Pagination;
