import { useState } from "react";
import clsx from "clsx";
import ModalWrapper from "../../shared-components/modals/ModalWrapper";
import AboutModal from "../../shared-components/modals/AboutModal";
import ProjectsModal from "../../shared-components/modals/ProjectsModal";
import ContactModal from "../../shared-components/modals/ContactModal";

const HomePage = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {aboutOpen && (
        <ModalWrapper
          isOpen={aboutOpen}
          onCloseClick={() => setAboutOpen(false)}
        >
          <AboutModal onCloseClick={() => setAboutOpen(false)} />
        </ModalWrapper>
      )}
      {projectsOpen && (
        <ModalWrapper
          isOpen={projectsOpen}
          onCloseClick={() => setProjectsOpen(false)}
        >
          <ProjectsModal onCloseClick={() => setProjectsOpen(false)} />
        </ModalWrapper>
      )}

      {contactOpen && (
        <ModalWrapper
          isOpen={contactOpen}
          onCloseClick={() => setContactOpen(false)}
        >
          <ContactModal onCloseClick={() => setContactOpen(false)} />
        </ModalWrapper>
      )}

      {!aboutOpen && !projectsOpen && !contactOpen && (
        <div className="min-h-screen flex justify-center bg-gradient-to-b from-slate-300 via-slate-600 to-slate-500 font-sans items-center  uppercase tracking-widest text-slate-300">
          <div className="w-full max-w-5xl flex flex-col items-center m-8">
            <div className="rounded-full w-[50px] h-[50px] border border-white flex justify-center items-center text-3xl p-8 text-white">
              <i className="fa-brands fa-uncharted"></i>
            </div>
            <div className="bg-white w-[1px] h-6"></div>
            <div className="border-t border-b border-white w-full text-center py-10">
              <div className="text-4xl font-medium mb-6 text-slate-100">
                Yehuda Goldschein
              </div>
              <div className="text-xs px-8 leading-loose">
                software engineer with experience in React, Redux, Angular,
                Ionic, Firebase, Google Cloud, MongoDB, Express.JS, Node.JS
                Javascript, Typescript, Ruby on Rails, SQL, HTML, Tailwind, CSS,
                SCSS, AWS, Heroku, Git, Debugging
              </div>
            </div>
            <div className="bg-white w-[1px] h-6"></div>
            <div className="flex  text-xs tracking-wider sm:flex-row flex-col">
              <button
                className="border rounded-t sm:rounded-none  sm:rounded-l border-white px-8 py-3 uppercase hover:bg-gray-300/10"
                onClick={() => setAboutOpen(true)}
              >
                About
              </button>
              <button className="border-l border-r sm:border-l-0 sm:border-r-0 sm:border-t sm:border-b border-white px-8 py-3 uppercase hover:bg-gray-300/10">
                Projects
              </button>
              <button
                className="border rounded-b sm:rounded-none sm:rounded-r border-white px-8 py-3 uppercase hover:bg-gray-300/10"
                onClick={() => setContactOpen(true)}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
