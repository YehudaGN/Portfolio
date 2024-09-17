import { motion } from "framer-motion";

const ContactModal = props => {
  const { onCloseClick } = props;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-full max-w-xl mx-4 max-h-[95%] no-scrollbar overflow-y-scroll flex flex-col items-start rounded-lg bg-zinc-900/75 px-6 py-4 text-zinc-100 shadow-md text-sm"
    >
      <div className="w-full flex justify-end pb-4">
        <button
          className="text-3xl text-white/30 hover:text-gray-200/80"
          onClick={onCloseClick}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full flex flex-col pb-4">
        <div className="text-xl uppercase pb-2 border-b border-white w-[130px] tracking-widest flex mb-8">
          Contact
        </div>
        <div className="flex flex-col sm:flex-row w-full font-light">
          <div className="flex-1">
            <div className="tracking-wider mb-4">PHONE</div>
            <div>718-551-1355</div>
          </div>
          <div className="flex-1 mt-12 sm:mt-0">
            <div className="tracking-wider mb-4">EMAIL</div>
            <div>yudagn@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-10">
          <a
            href="https://www.linkedin.com/in/yehuda-goldschein-79872199/"
            target="_blank"
          >
            <button className="rounded-full border border-white w-16 h-16 flex justify-center items-center hover:bg-gray-200/10">
              <i className="fa-brands fa-linkedin text-4xl"></i>
            </button>
          </a>
          <a href="https://github.com/YehudaGN" target="_blank">
            <button className="rounded-full border border-white w-16 h-16 flex justify-center items-center hover:bg-gray-200/10">
              <i className="fa-brands fa-github text-4xl"></i>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactModal;
