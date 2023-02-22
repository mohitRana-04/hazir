import React, { useEffect } from "react";
import { useState } from "react";
import { FaCalendar, FaBiPhoneCall, FaPhoneAlt } from "react-icons/fa";
import classes from "./Card.module.css";
import "../index.css";
// https://jsonplaceholder.typicode.com/posts?_limit=8

const Card = () => {
  let API = "https://jsonplaceholder.typicode.com/posts?_limit=8";

  const [users, setUsers] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      setUsers(await res.json());
      // console.log();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <div>
        {users.map((ele) => {
          return (
            <>
              <div class={classes.flexContainer}>
                <div class={classes.flexChild}>
                  {ele.userId}
                  <img
                    src="https://picsum.photos/seed/picsum/200/301"
                    height="50rem"
                    alt=""
                    className={classes.pfp}
                  />{" "}
                  {/* how */}
                  <h4 className={classes.hospitalTitle}>{ele.title}</h4>
                </div>

                <div class={classes.flexchild1}>
                  <div className={classes.experience}>
                    <p className={classes.hosName}> {ele.id} </p>
                    <p className={classes.expClass}>4 years</p>
                  </div>
                  <p> 22-B bakers street </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <button className={classes.button11} role="button">
                      Back Pain
                    </button>
                    <button className={classes.button11} role="button">
                      Foot
                    </button>
                    <button className={classes.button11} role="button">
                      Cancer
                    </button>
                    <button className={classes.button11} role="button">
                      Migraine
                    </button>
                  </div>
                  {/* https://icons8.com/icon/96298/call-male */}
                  <p>{ele.body}</p>
                  <button className={classes.button3} role="button">
                    Call Now <FaPhoneAlt />
                  </button>
                </div>
              </div>
              <br />
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
