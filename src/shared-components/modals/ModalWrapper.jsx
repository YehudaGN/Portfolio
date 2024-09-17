import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";

const ModalWrapper = props => {
  const { children, isOpen, onCloseClick } = props;
  const backgroundDivRef = useRef();

  if (!isOpen) return null;

  return (
    <RemoveScroll>
      <div
        ref={backgroundDivRef}
        onClick={e => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
        className="fixed mx-auto z-20 flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-300 via-slate-600 to-slate-500 font-lato backdrop-blur-sm"
      >
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
