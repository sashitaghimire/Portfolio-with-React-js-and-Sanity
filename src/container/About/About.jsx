import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const abouts = [
  {
    title: "Web Development",
    description: "Familiar with Html, css, javascipt, bootstrap",
    imgUrl: images?.about04,
  },
  {
    title: "Mobile App Development",
    description: "Basic of flutter and dart language",
    imgUrl: images?.about02,
  },
  {
    title: "UI/UX Design",
    description: "UI/UX design with figma",
    imgUrl: images?.about03,
  },
];

function About() {
  return (
    <>
      <h2 className="head-text">
        Good Design
        <span> means</span>
        <br />
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duartion: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about?.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>

            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
