import moment from "moment";
import { formatCurrency, formatDate, formatDateByMonth, formatDateTime, trimText } from "../../util/helpers";
import Radio from "../Radio/custom-radio";
import { MouseEvent } from "react";

type ColumnDefinitionType<T, K extends keyof T> = {
  key: any;
  header: string;
  width?: number;
  align?: string;
  formatType?: string;
  type?: string;
  showCheckbox?: boolean;
  hideTeamName?: boolean;
  ignoreTrim?: boolean;
};

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  children?: any;
  onCellClicked?: any;
  onCheck?: any;
};

const handleData = (row: any, column: any, key?: any) => {
  if (column.key.constructor === Array) {
    const mergedData: any[] = [];

    for (let index = 0; index < column.key.length; index++) {
      const element = column.key[index];

      const columnKeys = element.split(".");

      if (columnKeys.length > 1) {
        let nestedObject = row[columnKeys[0]];
        for (let index = 0; index < columnKeys.length; index++) {
          if (index !== 0) {
            nestedObject = nestedObject[columnKeys[index]];
          }
        }
        mergedData.push(nestedObject);
      } else {
        mergedData.push(row[element]);
      }
    }
    return mergedData.join(" ");
  } else if (column.key.constructor === Boolean) {
    return row[column.key];
  } else {
    const columnKeys = column.key.split(".");

    if (columnKeys.length > 1) {
      const nestedObject = row[columnKeys[0]];

      return nestedObject[columnKeys[1]];
    } else {
      return row[column.key] && row[column.key];
    }
  }
};
const handleTimeDiff = (row: any, column: any, key?: any) => {
  const fromDate = row[column.dates[0]];
  const toDate = row[column.dates[1]];
  const dateDifference = 0;
  return dateDifference;
};

const TableRows = <T, K extends keyof T>({
  data,
  columns,
  children,
  onCellClicked,
  onCheck,
}: TableRowsProps<T, K>): JSX.Element => {
  const findChildByKey = (key: any) => {
    if (children?.props) {
      if (!children?.props?.children.length) {
        if (children?.props?.children.key === key) {
          return children?.props?.children;
        }
      } else {
        const childByKey = children?.props?.children?.find(
          (child: { key: any }) => child.key === key
        );
        return childByKey;
      }
    }
  };

  const hasChildProp = (key: any) => {
    if (!children?.props?.children.length) {
      if (children?.props?.children.key === key) {
        return children?.props?.children.key === key;
      }

      return false;
    } else {
      const childByKey = children?.props?.children?.find(
        (child: { key: any }) => child.key === key
      );

      return childByKey ? true : false;
    }
  };

  const handleStatusClass = (data: any, key: any, index: any) => {
    return `td-${data.status?.toLowerCase()}`;
  };
  const handleRoleClass = (data: any, key: any, index: any) => {
    return `td-${data.role?.toLowerCase()}`;
  };

  const handlePaymentStatusText = (status: string) => {
    if (status === 'overdue') {
      return 'Dued on:'
    } else if (status === 'paid') {
      return 'Paid on:'

    } else if (status === 'unpaid') {
      return 'Dues on:'

    } else {
      return 'Paid on:'
    }
  }

  const cellClicked = (
    index2: number,
    column: ColumnDefinitionType<T, K>,
    index: number,
    row: any,
    targetText?: string
  ) => {
    onCellClicked({
      columnIndex: index2,
      column,
      rowIndex: index,
      row,
      targetText,
    });
  };

  const rows = data.map((row: any, index: number) => {
    return (
      <tr key={`row-${index}`} className={`border-b border-[#E8EAED] ${row?.isDisabled ? 'bg-[#FAFAFA] ' : 'bg-white'}`}>
        {columns.map((column, index2) => {
          if (hasChildProp(column.key)) {
            return (
              <td
                key={`cell-${index2} `}
                className={`text-${column.align ? column.align : "left"
                  }  text-sm pr-4 md:pr-5  text-[#101010]  font-[600]`}
                onClick={(e: any) => cellClicked(index2, column, index, row, e.target.innerText)}
              >
                {findChildByKey(column.key)}
              </td>
            );
          } else {
            return (
              <td
                key={`cell-${index2} `}
                className={`text-${column.align ? column.align : "left"
                  }   text-sm  py-2 md:p-5 md:py-2 pl-4 md:pl-5  text-[#3A3E36] `}
                onClick={(e: any) => cellClicked(index2, column, index, row, e.target.innerText)}
              >
                {column.type === "userProfile" ? (
                  <>
                    <div className="flex gap-2 items-center w-full">
                      <div className="flex items-center gap-6">
                        {column?.showCheckbox && <>
                          <Radio active={false} onClick={() => null} />
                        </>}

                        <div className="flex flex-col gap-1">
                          <p className="text-[#111827] font-[600] text-sm capitalize w-max">

                            {!column.ignoreTrim ? trimText(handleData(row, {
                              key: column?.key,
                            }), 15) : handleData(row, {
                              key: column?.key,
                            })}
                          </p>
                          <p className="text-[#88888A] text-xs font-[400]  w-max">

                            {!column.ignoreTrim ? trimText(handleData(row, {
                              key: column?.key,
                            }), 15) : handleData(row, {
                              key: 'email',
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>

                )



                  : column.key === "amount" ? (
                    <div className="flex flex-col gap-1">
                      <span className={`td-${column.key} capitalize font-[600]`}>
                        {formatCurrency(handleData(row, column), 'usd')}
                      </span>
                      <span className={`td-${column.key} uppercase text-[#88888A] font-[500]`}>
                        {handleData(row, { key: 'currency' })}
                      </span>
                    </div>
                  )
                    : column.type === "userStatus" ? (
                      <div className="flex flex-col gap-1 ">
                        <span className={`td-${column.key} flex items-center justify-center gap-1.5 py-1.5 font-[500] px-4 min-w-max pill-${handleData(row, column).toLowerCase()}`}>
                          <span className={`w-1.5 h-1.5 dot rounded-full block `}></span>
                          <span className="capitalize">
                            {
                              handleData(row, column)
                            }
                          </span>
                        </span>
                        <p className={`td-${column.key}   text-[#383A47] font-[500]`}>
                          Last Login:  {handleData(row, { key: 'last_login' })}
                        </p>
                      </div>
                    )
                      : column.type === "paymentStatus" ? (
                        <div className="flex flex-col gap-1 ">
                          <span className={`td-${column.key} flex items-center justify-center gap-1.5 py-1.5 font-[500] px-4 min-w-max pill-${handleData(row, column).toLowerCase()}`}>
                            <span className={`w-1.5 h-1.5 dot rounded-full block `}></span>
                            <span className="capitalize">
                              {
                                handleData(row, column)
                              }
                            </span>
                          </span>
                          <p className={`td-${column.key}   text-[#383A47] font-[500]`}>
                            {handlePaymentStatusText(handleData(row, column))}  {handleData(row, { key: 'last_login' })}
                          </p>
                        </div>
                      )

                        : column.type === "date" ? (
                          column.formatType === "dateText" ? (
                            <>
                              <span>{formatDateByMonth(handleData(row, column))}</span>
                            </>
                          ) :


                            column.formatType === "dateTime" ? (
                              <>
                                <span>{formatDateTime(handleData(row, column))}</span>
                              </>
                            )

                              :
                              (


                                <>


                                  <>
                                    {formatDate(new Date(handleData(row, column)))}

                                  </>
                                </>
                              )
                        )
                          : (
                            <>
                              <span className={`td-${column.key} capitalize`}>
                                {!column.ignoreTrim ? trimText(handleData(row, column), 15) : handleData(row, column) || 'N/A'}
                              </span>
                            </>
                          )}
              </td>
            );
          }
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
