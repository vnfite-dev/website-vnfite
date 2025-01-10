import { useState } from "react";

const TimeLine = () => {
    const [colorClick, setColorClick] = useState(4);

    return (
        <div className="flex items-center w-full justify-between">
            <div className="w-14 lg:w-20 h-1 bg-[#B3B3B3]"></div>
            {Array.from({ length: 5 }).map((_, index) => (
                <div className="flex items-center cursor-pointer" key={index} onClick={() => setColorClick(index)}>
                    <div className={`w-5 h-5 rounded-full border-2 border-white relative` + (colorClick === index ? ' bg-grad ' : ' bg-gray-500 ')}
                        style={{
                            boxShadow: colorClick === index ? '0 0 0 4px #E0694F' : '0 0 0 4px #B3B3B3',
                        }}
                    >

                        <div className={`absolute ${colorClick === index ? 'text-gradient' : 'text-[#B3B3B3]'} text-2xl font-semibold top-9 -left-5`}>{index + 2020}</div>
                    </div>
                    <div className={`w-14 lg:w-20 h-1 ${colorClick === index ? 'bg-grad' : 'bg-[#B3B3B3]'}`}></div>
                </div>
            ))
            }
        </div >
    );
};

export default TimeLine;
