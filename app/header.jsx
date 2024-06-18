import Image from "next/image";
export default function Header() {
    return (
        <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4">
            <div className="w-full h-64 md:w-64 md:h-64 overflow-hidden relative shrink-0">
                <Image
                    src={`/header.png`}
                    layout="fill"
                    alt="customer service"
                    objectFit="contain"
                    objectPosition=""
                    className="rounded-md "
                />
            </div>
            <div className="flex w-full justify-center items-center text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Credit Scoring Apps With KNIME Hub</h1>
            </div>
        </div>
    );
}
