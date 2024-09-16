import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Button } from "../../components/Button";
import PaymentLayout from "../../layouts/PaymentLayout";
import { FilterIcon } from "../../assets/icons";
import { InputField } from "../../components/Input";
import Select from "../../components/Selects/PrimarySelect";
import PaymentsTable from "./PaymentsTable";
import { getPayments } from "../../features/payments/paymentsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { paymentStatus, perPageList, userStatus } from "../../util/helpers";
import PaymentsData from "../../data/payments.json";
import Pagination from "../../components/Utils/Pagination";
import NumberSelect from "../../components/Selects/NumberSelect";

const PaymentFilters = ({ isActive, onFilterChange }: { isActive: boolean, onFilterChange: any }) => {
    const [filters, setFilters] = useState(Object)
    const [selectedUserStatus, setSelectedUserStatus] = useState<{
        name: string;
        id: string;
    }>({ name: "", id: "" });

    const [selectedPamentStatus, setSelectedPaymentStatuses] = useState<{
        name: string;
        id: string;
    }>({ name: "", id: "" });



    const onSelectUserStatus = (status: any) => {
        setSelectedUserStatus({
            name: status.name.toUpperCase(),
            id: status.id
        })
        setFilters({ ...filters, user_status: status.name })
    }


    const onSelectPaymemtStatus = (status: any) => {
        setSelectedPaymentStatuses({
            name: status.name.toUpperCase(),
            id: status.id
        })
        setFilters({ ...filters, payment_status: status.name })
    }

    useEffect(() => {
        onFilterChange(filters)

    }, [filters])
    return (
        <div className={`grid md:grid-cols-4 gap-5 ease-in-out duration-200 ${isActive ? 'mt-3 h-max' : 'h-0 opacity-0'}`}>
            <div>
                <label
                    htmlFor="name"
                    className="block font-[600] leading-6 text-[#111827] w-max text-md"
                >
                    Name
                </label>
                <div className="mt-2">
                    <InputField
                        disabled={false}
                        id="name"
                        name="name"
                        type="text"
                        value={filters?.name}
                        onChange={(e: any) => setFilters({ ...filters, name: e.target.value })}
                        placeholder={'name'}
                        classes={"bg-[#FAFAFA] border-none placeholder:text-[#A0AEC0] placeholder:font-[500] font-[500]"}
                        required
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="amount"
                    className="block font-[600] leading-6 text-[#111827] w-max text-md"
                >
                    Amount
                </label>
                <div className="mt-2">
                    <InputField
                        disabled={false}
                        id="amount"
                        name="amount"
                        type="number"
                        value={filters?.amount}
                        onChange={(e: any) => setFilters({ ...filters, amount: e.target.value })}
                        placeholder={'1,000'}
                        classes={"bg-[#FAFAFA] border-none remove-arrow placeholder:text-[#111216] placeholder:font-[500] font-[500]"}
                        required
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="user-status"
                    className="block font-[600] leading-6 text-[#111827] w-max text-md"
                >
                    User’s Status
                </label>
                <div className="mt-2">
                    <Select
                        name={'user-status'}
                        label={""}
                        placeholder="All"
                        data={userStatus}
                        selected={selectedUserStatus}
                        setSelected={onSelectUserStatus}
                        borderStyle={'none'}
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="user-status"
                    className="block font-[600] leading-6 text-[#111827] w-max text-md"
                >
                    Payment Status
                </label>
                <div className="mt-2">
                    <Select
                        name={'user-status'}
                        label={""}
                        placeholder="All"
                        data={paymentStatus}
                        selected={selectedPamentStatus}
                        setSelected={onSelectPaymemtStatus}
                        borderStyle={'none'}
                    />
                </div>
            </div>
        </div>
    )
}

const Payments = () => {
    const navigate = useNavigate();
    const { loading, payments } = useAppSelector((state) => state.payments);
    const dispatch = useDispatch<AppDispatch>();


    const paymentStatus = ['All', 'Paid', 'Unpaid', 'Overdue']
    const [activeStatus, setActiveStatus] = useState('')
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const routeFilter = searchParams.get("status")
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(2)

    const [paymentsData, setPaymentData] = useState(PaymentsData)
    const [perPage, setPerPage] = useState(Object)
    const [filters, setFilters] = useState(Object)


    const handleFilterChange = (status: string) => {
        setIsLoading(true)


        setActiveStatus(status)
        setSearchParams({ status: status.toLowerCase() });
        if (status !== paymentStatus[0].toLowerCase()) {
            setPaymentData(PaymentsData.filter((payment: any) => payment.payment_status.toLowerCase() === status.toLowerCase()))

        } else {
            setPaymentData(PaymentsData)
        }
        setIsLoading(false)

    }

    const fetchPayments = useCallback(async () => {
        const { payload: paymentsData } = await dispatch(getPayments({ page: 1 }))
    }, []);

    useEffect(() => {
        // fetchPayments()
        setPerPage(perPageList[5])

    }, [])

    useEffect(() => {
        if (routeFilter) {
            handleFilterChange(routeFilter)
        } else {
            handleFilterChange('all')
        }
    }, [routeFilter])

    useEffect(() => {
        if (filters.name) {
            setPaymentData(PaymentsData?.filter((payment: any) => payment.name.toLowerCase().includes(filters.name.toLowerCase())))
        }

        if (filters.amount) {
            setPaymentData(PaymentsData?.filter((payment: any) => Number(payment.amount) == Number(filters.amount)))
        }

        if (filters?.user_status) {
            filters?.user_status !== 'All' ? setPaymentData(PaymentsData?.filter((payment: any) => payment?.user_status?.toLowerCase() === filters?.user_status?.toLowerCase()))
                : filters?.payment_status && filters?.payment_status !== 'All' ? setPaymentData(paymentsData?.filter((payment: any) => payment?.payment_status?.toLowerCase() === filters?.payment_status?.toLowerCase())) : filters?.user_status !== 'All' ? setPaymentData(PaymentsData?.filter((payment: any) => payment?.user_status?.toLowerCase() === filters?.user_status?.toLowerCase()))
                    : setPaymentData(PaymentsData)
        }
        if (filters?.payment_status) {
            filters?.payment_status && filters?.payment_status !== 'All' ? setPaymentData(paymentsData?.filter((payment: any) => payment?.payment_status?.toLowerCase() === filters?.payment_status?.toLowerCase())) : filters?.user_status !== 'All' ? setPaymentData(PaymentsData?.filter((payment: any) => payment?.user_status?.toLowerCase() === filters?.user_status?.toLowerCase()))
                : setPaymentData(PaymentsData)
        }


    }, [filters])
    useEffect(() => {
        if (perPage) {
            setPaymentData(PaymentsData.slice(0, perPage.id))
        }
    }, [perPage])


    return (
        <PaymentLayout>
            <section className="h-max pb-40 md:pb-0  lg:px-0 h-full bg-[#fafafa] pt-5 max-w-screen-xl mx-auto">
                <div className="w-full pt-5">
                    <div className="contents">

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center justify-between">
                            <div className="flex items-center gap-5 border-b w-full border-[#EDF2F7]">
                                {
                                    paymentStatus?.map((status: any, index: number) => {
                                        return (
                                            <button onClick={() => handleFilterChange(status)} className={`p-3 pb-4 text-sm   ${status.toLowerCase() === activeStatus.toLowerCase() ? 'text-success active-status-tab font-[500]' : 'text-[#797B89] font-[400]'}`} key={`${status}-${index}`}>{status}</button>
                                        )
                                    })
                                }
                            </div>
                            <span className="w-max md:w-fit md:ml-auto">
                                <Button
                                    type={"button"}
                                    name={"Pay Dues"}
                                    onClick={() => null}
                                    disabled={false}
                                    className="text-white bg-[#0CAF60] font-[600] text-sm disabled:border-opacity-40  rounded-[12px] hover:opacity-90 disabled:opacity-40 min-w-[204px]"
                                />
                            </span>
                        </div>

                        <div className="my-5 bg-white rounded-xl py-3 shadow-sm">
                            <div className="py-3 p-3 px-5">
                                <button onClick={() => setIsFilterActive(!isFilterActive)} className="block w-max flex items-center gap-2 text-[15px] font-[500] text-[#0CAF60] bg-[#FAFAFA] ml-auto border border-[#EEEFF2] p-4 py-3.5 rounded-[12px]">
                                    <FilterIcon />
                                    <span>Filters</span>
                                </button>
                            </div>
                            <div className="px-5">
                                <PaymentFilters isActive={isFilterActive} onFilterChange={(filters: object) => setFilters(filters)} />
                            </div>
                            <section className="border-t  mt-5 border-[#EEEFF2]">
                                <PaymentsTable title={""} status={""} data={paymentsData} />

                                <div className="flex flex-col md:flex-row md:items-center justify-between px-5 pt-6">
                                    <section className="flex items-center gap-2">
                                        <p className="text-[#718096] font-[400] text-sm">Show result:</p>
                                        <div className="w-max">
                                            <NumberSelect
                                                data={perPageList}
                                                placeholder="Select"
                                                showIcon={false}
                                                selected={perPage}
                                                label={''} setSelected={(page: any) => setPerPage(page)}
                                            />
                                        </div>
                                    </section>
                                    <section>
                                        <Pagination currentPage={currentPage} totlaPages={20} onPageChange={(page: number) => setCurrentPage(page)} />
                                    </section>
                                </div>
                            </section>
                        </div>


                    </div>
                </div>
            </section>
        </PaymentLayout>
    );
};

export default Payments;
