type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
    align?: string;
    formatType?: string;
    type?: string;
    dates?: [],
    customPadding?: string
}

type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<ColumnDefinitionType<T, K>>;
}

const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): JSX.Element => {
    const headers = columns.map((column, index) => {
        const style = {
            width: column.width ?? 100,
            paddingLeft: column.customPadding + 'px'
        };

        return (

            <th
                key={`headCell-${index}`}
                style={style}
                className={`text-${column.align ? column.align : 'left'}  p-2 px-3 md:p-4 md:py-5 text-[#718096]  text-sm font-normal`}
            >

                {column.header}
            </th>
        );
    });

    return (
        <thead className="border-b">
            <tr className="">{headers}</tr>
        </thead>
    );
};

export default TableHeader;