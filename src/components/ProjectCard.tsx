import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export const ProjectCard = (props: {
  name: string;
  thumbnail: string;
  projectLink?: string;
  musicLink?: string;
  description: string;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        style={{ backgroundImage: `url(${props.thumbnail})` }}
        className="hover:bg-indigo-950 hover:cursor-pointer h-36 items-center flex hover:scale-105 bg-local bg-cover bg-center bg-blend-lighten rounded-lg"
        onClick={() => setShowModal(true)}
      >
        <div className="bg-indigo-900 w-full p-2 self-end text-white font-semibold text-base sm:text-xl text-center rounded-b-lg">
          {props.name}
        </div>
      </button>

      {showModal && (
        <ProjectModal
          name={props.name}
          projectLink={props.projectLink}
          musicLink={props.musicLink}
          thumbnail={props.thumbnail}
          description={props.description}
          handleClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
