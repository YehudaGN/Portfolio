import { motion } from "framer-motion";
import Headshot from "../../assets/images/headshot.webp";
import Resume from "../../assets/files/YehudaGoldscheinResume.pdf";
const AboutModal = props => {
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
        <div className="leading-loose sm:mr-4">
          <div className="text-xl uppercase pb-2 border-b border-white w-[95px] tracking-widest hidden sm:flex">
            About
          </div>
          <p className="pt-4">
            Hi, I&apos;m Yehuda Goldschein, a passionate software engineer
            specializing in building user-centric web applications. With a love
            for technology and a keen eye for detail, I strive to create
            efficient, scalable solutions that make a difference.
          </p>
        </div>
        <img src={Headshot} className="sm:w-[200px] rounded-lg " />
        <div className="text-xl uppercase pb-2 border-b border-white w-[95px] tracking-widest flex sm:hidden mb-4">
          About
        </div>
      </div>
      <div className="leading-relaxed font-light flex flex-col gap-4 ">
        <p>
          Over the past few years, I&apos;ve worked with a range of technologies
          like JavaScript, Typescript, React, Angular, Node.js, and many more,
          to develop dynamic and responsive applications. I&apos;ve collaborated
          with teams to bring innovative ideas to life, focusing on optimizing
          performance and user experience.
        </p>
        <p>
          Skills: Frontend Development, React, Typescript, Tailwind CSS,
          JavaScript, Redux, Angular, Ionic, HTML, CSS, SCSS, Ruby, Ruby on
          Rails, ActiveRecord, Firebase, Mongoose, MongoDB, Node.js, Express.js,
          SQL, PostgreSQL, Webpack, jQuery, Git, Heroku, Rspec, AWS, Electron
          Web Performance Optimization, Responsive Design
        </p>
        <p>
          I believe in writing clean, maintainable code and am always exploring
          the latest trends in web development. I prioritize user experience,
          ensuring that the end product is intuitive and accessible for all.
        </p>
        <p>
          When I&apos;m not coding, I enjoy photography, experimenting with new
          tech gadgets, and spending time with my family. I believe in keeping a
          balance between work and play!
        </p>
        <p>
          Feel free to check out my portfolio and reach out if you&apos;d like
          to collaborate or chat about anything tech-related!
        </p>
      </div>
      {/* add function to download as well as track clicks */}
      <a href={Resume} download="Yehuda_Goldschein_Resume.pdf">
        <button className="px-6 py-3 uppercase font-light tracking-wider text-xs border border-gray-100 rounded-md mt-10 mb-4 hover:bg-gray-200/10">
          Resume
        </button>
      </a>
    </motion.div>
  );
};

export default AboutModal;
