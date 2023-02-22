const Notification = ({ message, status, title, click }) => {
  // let color =
  //   status === "success" ? " decoration-[#006b3bff] " : "decoration-red-500";
  let color;

  if (status === "success" || status === "pending") {
    color = "decoration-[#006b3bff]";
  } else if (status === "error") {
    color = "decoration-red-500";
  }
  return (
    <div>
      <h1
        className={`text-white text-2xl mt-16 md:mt-0 lg:mt-0 underline underline-offset-8 ${color}`}
      >
        {message}
      </h1>
      <button
        onClick={click}
        className={`text-white text-md bg-[#006b3bff] hover:bg-[#006b3bff]/40 mt-5 rounded p-3 ${color}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Notification;
