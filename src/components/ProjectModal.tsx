import React, { useEffect } from "react";
import "../styles/index.css";

export const ProjectModal = (props: {
  name: string;
  thumbnail: string;
  projectLink?: string;
  soundtrackLink?: string;
  description: string;
  handleClose: () => void;
}) => {
  useEffect(() => {
    // Lock body scroll when modal opens
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    return () => {
      // Restore body scroll when modal closes
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <div
      // className="z-50 fixed bg-black/75 h-[100dvh] w-screen flex items-center justify-center inset-0"
      className="z-50 fixed bg-black/75 flex items-center justify-center inset-0"
      role="dialog"
      aria-modal="true"
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        className="bg-indigo-900 relative flex flex-col gap-4 items-center rounded-lg min-h-fit max-h-[85vh] p-4 overflow-y-auto"
        style={{
          width: "clamp(40%, 480px, 90%)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <button
          onClick={props.handleClose}
          // className="text-white hover:cursor-pointer hover:scale-125 self-end"
          className="text-white hover:cursor-pointer hover:scale-125 self-end sticky top-0 z-10"
        >
          <img src="src/assets/x.svg" alt="close" />
        </button>

        <h3 className="font-semibold text-4xl">{props.name}</h3>

        <img src={props.thumbnail} alt={props.name} width={"400px"} />

        <p className="text-xl">{props.description}</p>

        <div className="mt-8 flex flex-row gap-4">
          <a
            href={props.projectLink}
            target="_blank"
            className="text-lg p-4 bg-indigo-300 text-v1risDarkPurple rounded-lg hover:scale-110"
          >
            Checkout the project!
          </a>
          <a
            href={props.soundtrackLink}
            target="_blank"
            className="text-lg p-4 bg-indigo-300 text-v1risDarkPurple rounded-lg hover:scale-110"
          >
            Listen to the soundtrack!
          </a>
        </div>
      </div>
    </div>
  );
};
