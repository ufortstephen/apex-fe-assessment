import { Fragment, useEffect, useState } from "react"
import Table from "../../components/Table"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../app/store"
import PaymentActions from "./PaymentsActions"



const columnsHeaderData = [
    {
        key: "name",
        header: "Name",
        type: "userProfile",
        showCheckbox: true,
        ignoreTrim: true,
        customPadding: '70'
    },
    {
        type: 'userStatus',
        key: ["user_status"],
        header: "User  Status",
        width: '200px'

    },
    {
        type: 'paymentStatus',
        key: ["payment_status"],
        header: "Payment Status",
        width: '200px'

    },
    {
        key: "amount",
        header: "Amount"
    },
    {
        key: 'actions',
        header: "",
        width: '10px'
    }
]


const PaymentsTable = ({ title, status, data }: { title: string, status: string, data: any }) => {


    const dispatch = useDispatch<AppDispatch>();
    const [selectedData, setSelectedData] = useState<object>({})



    const onCellClicked = (data: any) => {
        setSelectedData(data?.row)
    }


    return (
        <div className="">

            {<Table columns={columnsHeaderData}
                data={data}
                hasFooter
                loading={false}
                emptyTitle={`No payment `}
                isFixed={false}
                cellClicked={onCellClicked}
                emptyIcon={null}
                emptyDescription={`All payments data will be displayed here`}>

                <Fragment key={"body"}>
                    <Fragment key={"actions"}>
                        <div className="flex items-center text-[#FF9814] gap-3 cursor-pointer">
                            <PaymentActions data={selectedData} />
                        </div>
                    </Fragment>
                </Fragment>
                <Fragment key="footer"></Fragment>
            </Table>}
        </div>
    )
}

export default PaymentsTable;