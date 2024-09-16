import { EmptyIcon } from "../../assets/icons"

export const EmptyTable = ({ text, info, height, icon }: { text: string, info: string, height?: number, icon?: any }) => {



    return (
        <div className={`w-full flex flex-col items-center justify-center ${height ? `min-h-[${height}px]` : 'min-h-[400px]'}`}>
            {icon ? icon : <EmptyIcon />}
            <div className="flex gap-1 flex-col items-center justify-center">
                <p className="text-sm text-[#0E0E0E] font-medium">{text ? text : 'No Data Found!'} </p>
                {info && <p className="text-xs text-[#8C8B8B] font-[400]">{info} </p>}
            </div>
        </div>

    );
};
