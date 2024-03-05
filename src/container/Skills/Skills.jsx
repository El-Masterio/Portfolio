import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  //// *** this is only to style the ReactTooltip   ****//// TODO: find a better way to style it
  const customStyles = {
    maxWidth: '300px',
    backgroundColor: 'var(--white-color)',
    boxShadow: '0  0 25px rgba(0,0,0,.1)',
    borderRadius: '5px',
    padding: '1rem',
    color: 'var(--gray-color)',
    textAlign: 'center',
    lineHeight: '1.5',
  };

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        {/* Skills */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experince */}
        <div className="app__skills-exp">
          {experience?.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>

              <motion.div className="app__skills-exp-works ">
                {exp.works.map((workArr) => (
                  <div key={`key is ${workArr.name}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={workArr.name}
                      data-tooltip-content={workArr.desc}
                    >
                      <h4 className="bold-text">{workArr.name}</h4>
                      <p className="p-text">{workArr.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={workArr.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip "
                      opacity={1}
                      style={customStyles}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
