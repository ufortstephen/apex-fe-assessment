import { Link } from "react-router-dom";
import UserAvatar from "../assets/icons/user-avatar.svg";

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full min-h-screen md:px-4">
            <div className="w-full bg-white sticky top-0 left-0 right-0  z-50">
                <div className="py-4 md:py-5 px-4  md:px-0 flex items-center justify-between z-50 max-w-screen-xl mx-auto ">
                    <Link to="/" className="">
                        <h2 className="text-xl font-bold text-[#111827]">Table Heading</h2>
                    </Link>
                    <div className="">
                        <div className="ml-5  flex items-center gap-x-2 flex-row-reverse md:flex-row relative">
                            <img src={UserAvatar} alt="" className="w-10" />

                            <div className="pl-1">
                                <div className="flex items-center gap-2 md:gap-[1px]">
                                    <p className="font-bold text-sm lg:block text-neutral-800">
                                        Tynisha Obey
                                    </p>
                                </div>
                                <p className={`font-[300] text-xs text-[#718096] capitalize mt-1.5`}>
                                    Makostore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-20 px-4 auth-content bg-[#fafafa]">{children}</div>

        </div>
    );
};

export default PaymentLayout;
