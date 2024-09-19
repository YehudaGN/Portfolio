import { motion } from "framer-motion";
import Headshot from "../../assets/images/headshot.webp";
import Resume from "../../assets/files/YehudaGoldscheinResume.pdf";
const WorkHistoryModal = props => {
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
      <div className="flex w-full items-start justify-between pb-6 flex-col-reverse sm:flex-row">
        <div className="leading-loose sm:mr-4 w-full">
          <div className="text-xl uppercase pb-2 border-b border-white w-[212px] tracking-widest sm:flex">
            Work History
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-between mb-2">
              <span className="text-lg border-b border-white w-[62px]">
                Poplin :
              </span>
              <span className="text-lg">Feb, 2022 - Jan, 2024</span>
            </div>
            <p>
              Poplin is a company which provides a laundry service in the style
              of Uber.
            </p>
            <p>
              A customer places an order for their laundry to be picked up, and
              a Laundry Pro will get a notification that an order is available
              for them to accept. They then pick up the laundry, and return it
              the next day neatly folded.
            </p>
            <p>
              At Poplin, I was responsible for building new features for the
              Customer app as well as the Laundry Pro app. Additional
              information for the customer to provide in order to provide more
              information to the Laundry Pro. Protections for the Laundry Pro
              when weighing the order in order to make the experience as
              seamless as possible for both the customer and the Laundry Pro.
            </p>
            <p>
              I helped implement a new system in which we make the orders
              available to the Laundry Pros. This system was much more
              streamlined than the previous one and followed specific rules that
              were very easy to follow.
            </p>
            <p>
              I built the new{" "}
              <a
                className="underline hover:text-blue-200"
                href="https://www.poplin.co/"
                target="_blank"
              >
                Poplin website
              </a>{" "}
              from scratch as part of a company rebrand innovative.
            </p>
            <p>
              In my time at Poplin, I was responsible for countless more
              features, bug fixes, and large projects.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkHistoryModal;
