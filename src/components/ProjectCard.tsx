import React, { useState } from "react";
import { ProjectModal } from "./ProjectModal";

export const ProjectCard = (props: {
  name: string;
  thumbnail: string;
  projectLink: string;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.thumbnail})` }}
        className={`hover:bg-indigo-950 h-36 items-center flex hover:scale-105 bg-local bg-cover bg-center bg-blend-lighten rounded-lg`}
      >
        <button
          className="bg-indigo-900 w-full p-2 self-end text-white font-semibold text-base sm:text-xl text-center rounded-b-lg"
          onClick={() => setShowModal(true)}
        >
          {props.name}
        </button>
      </div>

      {showModal && (
        <ProjectModal
          name={props.name}
          projectLink={props.projectLink}
          thumbnail={props.thumbnail}
        />
      )}
    </>
  );
};
