'use client';

import { useRef, useState } from "react";
const LEADERS = [
  {
    lead: "Mr Đoàn",
    members: '',
    id: 0,
  },
  {
    lead: "Mr Thịnh",
    members: '',
    id: 1,
  },
  {
    lead: "Mr Đạt",
    members: '',
    id: 2,
  },
  {
    lead: "Mr Huy",
    members: '',
    id: 3,
  },
  {
    lead: "Mr Cường",
    members: '',
    id: 4,
  },
  {
    lead: "Mr Tây",
    members: '',
    id: 5,
  },
  {
    lead: "Mr Toàn",
    members: '',
    id: 6,
  },
  {
    lead: "Mrs Trang",
    members: '',
    id: 7,
  },
];
const MEMBERS = [
  "Mr Hùng",
  "Mr Tuấn Sơn",
  "Mr Trường",
  "Mrs Lam",
  "Mr Lam",
  "Mr Phong",
  "Mr Ly",
  "Mr Hưng",
];

const rowColors = [
  "#DBEAFE",
  "#FEE2E2",
  "#DCFCE7",
  "#FEF9C3",
  "#F4E2FE",
  "#ECFEE2",
  "#FEE2EB",
  "#FFE7C2",
];

import "./Wheel.css";
import Image from "next/image";

function LuckyWheel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [spinning, setSpinning] = useState(false);
//   const [rotation, setRotation] = useState(0);
  const [assignedCount, setAssignedCount] = useState(0);

  const handleSpin = () => {
    if (assignedCount > LEADERS.length - 1) {
      alert("Đã hết thành viên để quay!");
      return;
    }
    if (spinning || !wheelRef.current) return;

    const randomIndex = Math.floor(Math.random() * MEMBERS.length);
    const degreePerSlice = 360 / MEMBERS.length;
    const stopDegree =
      360 * 4 + (360 - randomIndex * degreePerSlice - degreePerSlice / 2);

    setSpinning(true);

    wheelRef.current.style.transition = "none";
    wheelRef.current.style.transform = `rotate(0deg)`;

    setTimeout(() => {
      if (wheelRef.current) {
        wheelRef.current.style.transition = "transform 5s ease-out";
        wheelRef.current.style.transform = `rotate(${stopDegree}deg)`;
      }

    //   setRotation(stopDegree);

      setTimeout(() => {
        setSpinning(false);
        alert(`🎉 Kết quả: ${MEMBERS[randomIndex]}`);
        const updatedLeaders = [...LEADERS];
        updatedLeaders[assignedCount].members = MEMBERS[randomIndex];
        MEMBERS.splice(randomIndex, 1);
        console.log('MEMBERS', MEMBERS);
        if (assignedCount == LEADERS.length - 2) {
          updatedLeaders[LEADERS.length - 1].members = MEMBERS[0];
        }
        setAssignedCount((prev) => prev + 1);
      }, 5000);
    }, 50);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 150
      }}
    >
      <div style={{ width: "55%", display: "flex", justifyContent: "center" }}>
        <div className="wheel-wrapper">
          <div
            className="wheel"
            style={{
              background: generateWheelGradient(MEMBERS.length),
            }}
            ref={wheelRef}
          >
            {MEMBERS.map((member, i) => {
              const rotate = (360 / MEMBERS.length) * i;
              return (
                <div
                  key={i}
                  className="segment"
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                >
                  <span
                    style={{
                      transform: `rotate(${360 / MEMBERS.length / 2}deg)`,
                      top: "15%",
                      left: `${45 + 100 / MEMBERS.length / 2}%`,
                      textAlign: "center",
                    }}
                  >
                    {member}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="center-button" onClick={handleSpin}>
            Quay
          </div>
          <div className="pointer" />
        </div>
      </div>

      <div style={{ width: "45%", marginLeft: 50 }}>
        <div
          style={{
            background: "linear-gradient(135deg, #FF4142, #992728)",
            padding: "10px",
            color: "white",
            width: 100,
            textAlign: "center",
            fontWeight: "bold",
            borderRadius: "5px",
            marginBottom: 20,
          }}
        >
          Kết quả
        </div>
        {LEADERS.map((leader, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch", // ✅ giúp 2 bên cao bằng nhau
              marginBottom: 20,
            }}
          >
            {/* Cột Đội trưởng */}
            <div
              style={{
                backgroundColor: rowColors[index % rowColors.length],
                width: 200,
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                {leader.lead}
                {/* Tên đội trưởng */}
              </span>
            </div>

            {/* Cột Thành viên */}
            <div
              style={{
                marginLeft: 10,
                backgroundColor: rowColors[index % rowColors.length],
                width: 200,
                padding: 10,
                display: "flex",
                alignItems: "center",
                borderRadius: 5,
                color: "#555",
                fontSize: 16,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {leader.members}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Pickerball = () => {
//   const [leaders, setLeaders] = useState(LEADERS);
//   const [members, setMembers] = useState(MEMBERS);
  return (
    <div>
      {/* <p>Pickerball</p> */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: 30}}>
        <Image
          src="/images/vnfite_logo.png"
          alt="VNFITE Logo"
          width={200}
          height={50}
        />
        
      </div>
      <LuckyTitle />
      <LuckyWheel />
    </div>
  );
};

function generateWheelGradient(sliceCount: number) {
  const colors = ["#FFCC00", "#ff4e50", "#339933"];
  const degreePerSlice = 360 / sliceCount;
  let currentDeg = 0;
  let gradientStr = "conic-gradient(";  

  for (let i = 0; i < sliceCount; i++) {
    let color = colors[i % colors.length];
    if (sliceCount % colors.length === 1 && i === sliceCount - 1) {
      color = colors[(i + 1) % colors.length];
    }
    const start = currentDeg;
    const end = currentDeg + degreePerSlice;
    gradientStr += `${color} ${start}deg ${end}deg, `;
    currentDeg = end;
  }

  gradientStr = gradientStr.slice(0, -2) + ")";

  return gradientStr;
}

const colorfulText = "Vòng quay may mắn";
const colors = [
  "#FF4142", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899",
  "#F43F5E", "#F97316", "#84CC16", "#0EA5E9", "#A855F7", "#14B8A6"
];

function LuckyTitle() {
  return (
    <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: 50 }}>
      {colorfulText.split('').map((char, i) => (
        <span key={i} style={{ color: colors[i % colors.length] }}>
          {char}
        </span>
      ))}
    </h1>
  );
}

export default Pickerball;