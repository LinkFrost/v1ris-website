import React from "react";
import "../styles/index.css";

export const ProjectModal = (props: {
  name: string;
  thumbnail: string;
  projectLink?: string;
  soundtrackLink?: string;
  description: string;
  handleClose: () => void;
}) => {
  return (
    <div
      className="z-50 fixed bg-black/75 h-[100dvh] w-screen flex items-center justify-center inset-0"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-indigo-900 relative flex flex-col gap-4 items-center rounded-lg min-h-fit max-h-[95vh] p-4 overflow-scroll"
        style={{
          width: "clamp(40%, 480px, 90%)",
          // height: "clamp(30%, 480px, 90%)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <button
          onClick={props.handleClose}
          className="text-white hover:cursor-pointer hover:scale-125 self-end"
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
