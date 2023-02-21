import React, { useEffect } from "react";
import { useState } from "react";
import { FaCalendar, FaBiPhoneCall, FaPhoneAlt } from "react-icons/fa";
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
              <div class="flex-container">
                <div class="flex-child first">
                  {ele.userId}
                  <img
                    src="https://picsum.photos/seed/picsum/200/301"
                    height="50rem"
                    alt=""
                    className="pfp"
                  />{" "}
                  {/* how */}
                  <h4 className="hospital-title">{ele.title}</h4>
                </div>

                <div class="flex-child1 second">
                  <div className="experience">
                    <p className="hos-name"> {ele.id} </p>
                    <p className="exp-class">4 years</p>
                  </div>
                  <p> 22-B bakers street </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <button className="button-11" role="button">
                      Back Pain
                    </button>
                    <button className="button-11" role="button">
                      Foot
                    </button>
                    <button className="button-11" role="button">
                      Cancer
                    </button>
                    <button className="button-11" role="button">
                      Migraine
                    </button>
                  </div>
                  {/* https://icons8.com/icon/96298/call-male */}
                  <p>{ele.body}</p>
                  <button className="button-3 to-right " role="button">
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
