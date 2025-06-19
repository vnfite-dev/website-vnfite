"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const MessengerChatButton = () => {
  const openMessenger = () => {
    window.open("https://m.me/657239490807682", "_blank");
  };

  return (
    <Button
      onClick={openMessenger}
      style={{
        position: "fixed",
        bottom: "100px",
        right: "16px",
        // color: "white",
        padding: "14px",
        borderRadius: "50px",
        border: "none",
        // boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 9999,
        cursor: "pointer",
        backgroundColor: "rgba(255, 255, 255, 0.3)", // Facebook Messenger color
      }}
    >
      <Image
        src="/icons/facebook-messenger-icon.svg"
        alt="Messenger Icon"
        width={40}
        height={40}
      />
    </Button>
  );
};

export default MessengerChatButton;
