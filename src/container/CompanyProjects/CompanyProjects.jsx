import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./CompanyProjects.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const CompanyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "3rem" }}>
        Worked on Company Projects
      </h2>
      {projects.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={projects[currentIndex]?._id}
            >
              <img
                src={urlFor(projects[currentIndex].imgurl)}
                alt={projects[currentIndex].name}
              />
            </motion.div>

            <div className="app__testimonial-content">
              <p className="p-text">{projects[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{projects[currentIndex].name}</h4>
                <h5 className="p-text">{projects[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? projects.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === projects.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(CompanyProjects, "app__testimonial"),
  "projects",
  "app__primarybg"
);
