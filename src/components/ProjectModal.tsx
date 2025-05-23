import React, { useEffect } from "react";
import "../styles/index.css";

export const ProjectModal = (props: {
  name: string;
  thumbnail: string;
  projectLink?: string;
  musicLink?: string;
  description: string;
  handleClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div
            className="bg-indigo-900 rounded-lg w-full max-w-[660px] overflow-y-auto"
            style={{
              maxHeight: "calc(100vh - 10rem)",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="p-4 flex flex-col gap-4">
              <button
                onClick={props.handleClose}
                className="text-white hover:cursor-pointer hover:scale-125 self-end absolute"
              >
                <img src="svg/x.svg" alt="close" />
              </button>

              <h3 className="font-semibold text-4xl text-center">
                {props.name}
              </h3>

              <img
                src={props.thumbnail}
                alt={props.name}
                className="w-full max-w-[400px] mx-auto"
              />

              <p className="text-xl text-center">{props.description}</p>

              <div className="mt-2 flex flex-wrap justify-center gap-4">
                {props.projectLink && (
                  <a
                    href={props.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold py-2 px-4 text-indigo-300 hover:bg-v1risDarkPurple rounded-lg "
                  >
                    Checkout the project!
                  </a>
                )}

                {props.musicLink && (
                  <a
                    href={props.musicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold py-2 px-4 text-indigo-300 hover:bg-v1risDarkPurple rounded-lg "
                  >
                    Listen to the soundtrack!
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
