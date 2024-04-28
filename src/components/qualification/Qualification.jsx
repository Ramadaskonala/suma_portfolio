import React from "react";
import "./qual.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="Qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active "
                : "qualification__button "
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Master Science</h3>
                <span className="qualification__subtitle">
                Cumberland university
                </span>
                <span>
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech (EEE)</h3>
                <span className="qualification__subtitle">
                  JNTU, Hyderabad
                </span>
                <span>
                  CGPA:7.19
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2017 - 21
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                Narayana Jr College
                </span>
                <span>
                  Percentage:84
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2015 - 17
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">
                Geethanjali High School
                </span>
                <span>
                  CGPA:9.0
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2014 - 15
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active button--flex"
                : "qualification__content button--flex"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Associate Cloud Engineer
                </h3>
                <span className="qualification__subtitle">HCL Technologies</span>
                <span className="qualification__subtitle">Noida, India</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> September 2022
                </div>
              </div>
              <div>
                
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">
                Andhra Pradesh Power Generation Corporation Limited
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> June, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
