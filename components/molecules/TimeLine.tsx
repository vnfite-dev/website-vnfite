import { useState } from "react";

const TimeLine = () => {
    const [colorClick, setColorClick] = useState(4);

    return (
        <div className="flex items-center w-full justify-between">
            <div className="w-24 h-1 bg-[#B3B3B3]"></div>
            {Array.from({ length: 5 }).map((_, index) => (
                <div className="flex items-center cursor-pointer" key={index} onClick={() => setColorClick(index)}>
                    <div className={`w-5 h-5 rounded-full border-2 border-white shadow-[0_0_0_4px_${colorClick === index ? '#E0694F' : '#B3B3B3'}] relative` + (colorClick === index ? ' bg-grad ' : ' bg-gray-500 ')}>
                        <div className={`absolute ${colorClick === index ? 'text-gradient' : 'text-[#B3B3B3]'} text-2xl font-semibold top-9 -left-5`}>{index + 2020}</div>
                    </div>
                    <div className={`flex-grow h-1 ${colorClick === index ? 'bg-grad' : 'bg-[#B3B3B3]'}`}></div>
                </div>
            ))
            }
        </div >
    );
};

export default TimeLine;
