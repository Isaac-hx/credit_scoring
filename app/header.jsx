import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4">
            <div className="w-full h-64 md:w-64 md:h-64 overflow-hidden relative shrink-0">
                <Image
                    src={`https://plus.unsplash.com/premium_photo-1661582120130-03b9bdc47a75?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    layout="fill"
                    alt="customer service"
                    objectFit="cover"
                    objectPosition="right"
                    className="rounded-md"
                />
            </div>
            <div className="flex w-full justify-center items-center text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Credit Scoring Application Form</h1>
            </div>
        </div>
    );
}
