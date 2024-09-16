import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import { TableLoader } from "./Loader";
import "./table.css";
import { EmptyTable } from "./empty";


interface tableProps {
    columns: any[],
    data: any[],
    children?: any,
    loading?: boolean,
    hasFooter?: boolean,
    cellClicked?: any
    emptyTitle: string,
    emptyDescription: string,
    onCheck?: any;
    isFixed?: boolean;
    emptyIcon?: any

}

type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
}

type TableProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
    loading?: boolean,
    hasFooter?: boolean,
    cellClicked?: any
    onCheck?: any;
    isFixed?: boolean;
}


const Table = ({ columns, data, children, loading, cellClicked, hasFooter, emptyTitle, emptyDescription, onCheck, isFixed, emptyIcon }: tableProps) => {


    const findByKey = (name: string) => {


        if (children?.length) {
            const foundChild = children?.find((child: { key: any }) => child.key === name)
            return foundChild
        }
        else {
            return children
        }
    }

    const onCellClicked = (data: any) => {
        cellClicked(data)

    }

    if (loading) {

        return (
            <>

                {Array.from(Array(5), (e, i) => {
                    return <TableLoader key={i} type={"line"} background={"rgb(239 250 227 / 22%)"} classNames="rounded-md line" />

                })}


            </>
        )

    }

    else {

        if (data) {

            return (

                <>

                    <div className={`w-full overflow-x-auto ${isFixed ? 'isFixed' : ''}`}>


                        <table className={`w-full ${isFixed ? 'isFixed' : ''}`}>
                            <TableHeader columns={columns} />

                            {data?.length ?

                                <TableRows
                                    data={data}
                                    columns={columns}
                                    onCellClicked={onCellClicked}
                                    onCheck={onCheck}

                                >

                                    {children ? findByKey('body') : ""}

                                </TableRows> :

                                ''

                            }


                        </table>
                        {
                            !data?.length ? <> <EmptyTable icon={emptyIcon} text={emptyTitle} info={emptyDescription} /></> : <></>
                        }

                        {!data?.length ? findByKey('empty') : ""}

                        {hasFooter}


                        {hasFooter ? findByKey('footer') : ""}




                    </div>
                </>




            );
        }

        else {
            return (
                <></>
            )
        }

    }




};

export default Table;

