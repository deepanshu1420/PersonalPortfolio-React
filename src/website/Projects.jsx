import React, { useState } from "react";
import ProjectData from "./ProjectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedDesc, setExpandedDesc] = useState({}); // Track which project descriptions are expanded

  const toggleReadMore = (id) => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold fs-3 mt-4">
          My <span>Projects</span>
        </h1>
        <p className="text-center fw-lighter sm-text">
          Explore my hands-on projects — from GitHub repos to live demos, see code in action!
        </p>
      </div>

      <div className="container-fluid">
        <div className="row" style={{ alignItems: "flex-start" }}>
          <div className="col-12 col-lg-9 col-md-12 mx-auto">
            <div className="projects-father pb-3">
              <div className="row" style={{ alignItems: "flex-start" }}>
                {ProjectData.map((project) => (
                  <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex">
                    <div
                      className="project-card my-3 d-flex flex-column w-100 position-relative"
                      style={{ minHeight: "500px" }}
                    >
                      {/* 🔹 New Badge */}
                      {project.isNew && <span className="new-badge">New</span>}

                      {/* 🔹 Modal Trigger */}
                      <div
                        data-bs-toggle="modal"
                        data-bs-target="#projectModal"
                        onClick={() => setSelectedProject(project)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="img-box-food">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-img"
                          />
                        </div>
                        <h2 className="fs-5 my-2 text-capitalize fw-bold project-title">
                          {project.title}
                        </h2>
                      </div>

                      {/* 🔹 Description + Read More */}
                      <div className="text-box p-3 d-flex flex-column">
                        <p className="fw-normal ex-sm-text my-2 desc text-justify">
                          {expandedDesc[project.id]
                            ? project.desc
                            : project.desc.substring(0, 100) + "..."}
                        </p>

                        <button
                          className="btn-read-more mt-1 mb-2 align-self-start"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReadMore(project.id);
                            e.currentTarget.blur();
                          }}
                        >
                          {expandedDesc[project.id] ? "Read Less" : "Read More"}
                        </button>

                        {/* 🔹 Skills Pills */}
                        <div className="d-flex flex-wrap gap-2 my-2">
                          {project.skills &&
                            project.skills.map((skill, index) => (
                              <span key={index} className="skill-pill">
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Modal Popup */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-3 rounded-4">
            {selectedProject && (
              <>
                {/* 🔹 Close Button */}
                <button
                  type="button"
                  className="custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setSelectedProject(null)}
                >
                  &times;
                </button>
                <div className="modal-img-wrap mb-3">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-img"
                  />
                </div>
                <h2 className="fw-bold">{selectedProject.title}</h2>
                <p>{selectedProject.desc}</p>

                {/* Skills */}
                <div className="d-flex flex-wrap gap-2 my-3">
                  {selectedProject.skills &&
                    selectedProject.skills.map((skill, index) => (
                      <span key={index} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3 mt-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-blue flex-fill d-flex align-items-center justify-content-center rounded-pill"
                  >
                    <FaGithub className="me-1" /> View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-blue flex-fill d-flex align-items-center justify-content-center rounded-pill"
                  >
                    <FaExternalLinkAlt className="me-1" /> View Live
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Styling (unchanged) */}
      <style jsx>{`
        .project-card {
          border-radius: 2.5rem;
          background: var(--card-bg, #fff);
          color: var(--card-text, #000);
          box-shadow: 9px 9px 14px rgba(0, 123, 255, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 11px 13px 17px rgba(0, 123, 255, 0.5);
        }
        .project-card h2 {
          color: var(--card-title, #222);
        }
        .project-card .project-title {
          text-align: left;
          margin-left: 16px;
          padding-top: 13px;
          line-height: 0.4rem;
        }
        .project-card p {
          color: var(--card-desc, #555);
        }

        .new-badge {
          position: absolute;
          top: 10px;
          right: 15px;
          background-color: #28a745;
          color: #fff;
          padding: 3px 8px;
          border-radius: 9999px;
          font-size: 0.65rem;
          font-weight: bold;
          box-shadow: 5px 6px 8px rgba(0, 0, 0, 0.2);
          z-index: 10;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .new-badge:hover {
          transform: scale(1.2);
          background-color: #218838;
        }

        .img-box-food {
          width: 100%;
          overflow: hidden;
          border-radius: 1.5rem;
        }
        .project-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 1.5rem;
          transition: transform 0.3s ease;
        }
        .img-box-food:hover .project-img {
          transform: scale(1.1);
        }

        .btn-read-more {
          background: none;
          border: none;
          color: #1e90ff;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
          font-weight: 500;
          transition: font-weight 0.3s ease, color 0.3s ease;
          outline: none;
          box-shadow: none !important;
        }
        .btn-read-more:hover {
          font-weight: 700;
          text-decoration: none;
        }
        .btn-read-more:focus {
          outline: none !important;
          box-shadow: none !important;
          background: transparent !important;
        }

        .btn-blue {
          background-color: #1e90ff;
          color: #fff;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-blue:hover {
          transform: scale(1.05);
          box-shadow: 9px 11px 13px rgba(30, 144, 255, 0.5);
          background-color: #1e90ff;
        }

        body.dark .btn-blue {
          background-color: #1e90ff;
          color: #fff;
        }
        body.dark .btn-blue svg {
          color: #fff;
        }
        body.dark .btn-blue:hover {
          color: #000;
          box-shadow: 5px 4px 8px rgba(30, 144, 255, 0.5);
        }
        body.dark .btn-blue:hover svg {
          color: #000;
        }

        .skill-pill {
          padding: 5px 12px;
          font-size: 0.85rem;
          background-color: #5dade2;
          color: #fff;
          border-radius: 9999px;
          box-shadow: 4px 5px 7px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .skill-pill:hover {
          transform: scale(1.1);
          background-color: #3498db;
          box-shadow: 3px 4px 7px rgba(30, 144, 255, 0.6);
        }

        .modal-content {
          border-radius: 2.7rem !important;
          background: var(--card-bg, #fff) !important;
          box-shadow: 18px 20px 25px rgba(0, 123, 255, 0.3) !important;
          overflow: hidden !important;
          position: relative;
        }
        .modal-img-wrap {
          border-radius: 1.8rem;
          overflow: hidden;
        }
        .modal-img {
          width: 100% !important;
          height: auto;
          display: block;
          border-radius: 1.8rem !important;
          object-fit: cover;
        }

        .custom-close {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 2rem;
          font-weight: bold;
          line-height: 1;
          background: transparent;
          border: none;
          color: #000;
          cursor: pointer;
          z-index: 1056;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .custom-close:hover {
          transform: scale(1.2);
          color: #1e90ff;
        }

        body.dark .custom-close {
          color: #fff;
        }
        body.dark .custom-close:hover {
          color: #1e90ff;
        }

        body.dark .project-card {
          background: #1e1e1e !important;
          color: #f1f1f1 !important;
        }
        body.dark .project-card h2 {
          color: #fff !important;
        }
        body.dark .project-card p {
          color: #ccc !important;
        }
        body.dark .skill-pill {
          background-color: #1e90ff !important;
          color: #fff !important;
        }
        body.dark .modal-content {
          background: #1e1e1e !important;
          color: #f1f1f1 !important;
          box-shadow: 0 6px 20px rgba(30, 144, 255, 0.4) !important;
        }
        body.dark .modal-content h2 {
          color: #fff !important;
        }
        body.dark .modal-content p {
          color: #ccc !important;
        }
        body.dark .dropdown-menu {
          background-color: #1e1e1e !important;
          color: #f1f1f1 !important;
          border: 1px solid #333 !important;
        }
        body.dark .dropdown-item {
          color: #f1f1f1 !important;
        }
        body.dark .dropdown-item:hover {
          background-color: #2c2c2c !important;
        }
      `}</style>
    </>
  );
}

export default Projects;
