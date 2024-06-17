import { useEffect, useState } from "react";

const Index = () => {
    const [status, setStatus] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(prevStatus => (prevStatus + 1) % 4);
        }, 200);

        return () => clearTimeout(timer);
    }, [status]); // Ensure the effect runs whenever status changes

    return (
        <div className={'flex mt-8'}>
            <div className={'w-[24px] h-[24px] rounded-full ' +
                (status === 0 ? 'border-t-2 border-white' :
                    status === 1 ? 'border-r-2 border-white' :
                        status === 2 ? 'border-b-2 border-white' :
                            'border-l-2 border-white')}>
            </div>
            <div className={'text-white ml-6'}>
                Recording
            </div>
        </div>
    );
};

export default Index;
