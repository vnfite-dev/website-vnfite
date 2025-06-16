"use client";
// import { useEffect } from "react";

// declare global {
//   interface Window {
//     fbAsyncInit: () => void;
//     FB: any;
//   }
// }

const MessengerChatWidget = () => {
  // useEffect(() => {
  //   // Add the Facebook SDK script
  //   window.fbAsyncInit = function () {
  //     FB.init({
  //       xfbml: true,
  //       version: "v17.0",
  //     });
  //   };

  //   const script = document.createElement("script");
  //   script.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div
      className="fb-customerchat"
      data-attribution="setup_tool"
      data-page_id="615522551653766"
      data-theme_color="#0084FF"
      data-logged_in_greeting="Chào bạn! TIKLUY có thể giúp gì cho bạn?"
      data-logged_out_greeting="Chào bạn! Hãy đăng nhập để chat với TIKLUY nha 😄"
      style={{ position: "fixed", bottom: "20px", right: "20px", width: "250px", height: "400px" }}
    />
  );
};

export default MessengerChatWidget;
