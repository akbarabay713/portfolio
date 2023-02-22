import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Notification from "./Notification";
const Contact = ({ pageInfo }) => {
  const form = useRef();
  const [requestStatus, setRequestStatus] = useState("");
  const [pending, setPending] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);
    setRequestStatus("pending");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(setRequestStatus("pending"))
      .catch((error) => {
        setRequestStatus("error");
        setPending(false);
        return;
      });

    setRequestStatus("success");
    setPending(false);

    e.target.reset();
    setShowNotification(true);
  };

  let notification = "nothing";

  if (requestStatus === "pending") {
    notification = {
      title: "pending",
      status: "try again",
      message: "your message is pending",
    };
  }
  if (requestStatus === "success") {
    notification = {
      title: "Send another message",
      status: "success",
      message: "your message is successfully sent",
    };
  }
  if (requestStatus === "error") {
    notification = {
      title: "try again",
      status: "error",
      message: "something went wrong",
    };
  }

  const handleClick = () => {
    setShowNotification(false);
  };

  return (
    <div className="h-screen max-w-full relative text-center flex flex-col  items-center justify-center snap-center">
      <motion.h3
        initial={{
          y: 100,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="absolute top-16 lg:top-24 md:top-24 uppercase tracking-[20px] text-gray-500"
      >
        Contact
      </motion.h3>

      <h1 className="text-white text-2xl mt-16 md:mt-0 lg:mt-0">
        Lets get in touch
      </h1>

      <div>
        <div className="my-5 flex justify-between flex-col md:flex-row lg:flex-row gap-2 ">
          <p className=" bg-[#60605f] p-3 flex gap-3 flex-1 rounded-md">
            <EnvelopeIcon className="h-6 w-6 text-[#aee9a4] animate-pulse" />
            <span className="text-[#aee9a4]">{pageInfo.email}</span>
          </p>
          <p className=" bg-[#60605f] p-3 flex gap-3 flex-1 rounded-md">
            <PhoneIcon className="h-6 w-6 text-[#aee9a4] animate-pulse" />
            <span className="text-[#aee9a4]">{pageInfo.phone}</span>
          </p>
        </div>

        {showNotification ? (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
            click={handleClick}
          />
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-2 flex-col md:flex-row ">
              <input
                type="text"
                name="username"
                placeholder="your name"
                className="flex-1  bg-zinc-800 p-3 outline-[#006b3bff] rounded-md text-gray-400 focus:text-[#006b3bff] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="your email"
                className="flex-1  bg-zinc-800 p-3 outline-[#006b3bff] rounded-md text-gray-400 focus:text-[#006b3bff] focus:outline-none"
              />
            </div>
            <textarea
              placeholder="message"
              name="message"
              className="w-full h-20 md:h-36 mt-2 bg-zinc-800 p-3 text-gray-400 focus:text-[#006b3bff] focus:outline-none"
            ></textarea>
            <button
              type="submit"
              value="send"
              className="bg-[#006b3bff] hover:bg-[#006b3bff]/40 rounded-md w-full p-3 text-cyan-50"
            >
              {pending ? "Sending..." : "send messages"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
