import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Lists() {
  const [val, getValue] = useState([]);
  async function getData() {
    try {
      const response = await axios.get("https://api.github.com/users");
      getValue(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  });
  return (
    <>
      <div className="cards">
        {val.map((items,is) => {
          return (
            <div  key={is}className="card">
              <div className="img">
                <img src={items.avatar_url} />
              </div>
              <div className="side">
                <h2>{items.login}</h2>
                <h3>{items.html_url}</h3>
                <div className="follower">
                  <div className="data">
                    <h4>Article</h4>
                    <h4>68</h4>
                  </div>
                  <div className="data">
                    <h4>Follower</h4>
                    <h4>288</h4>
                  </div>
                  <div className="data">
                    <h4>Rating</h4>
                    <h4>4.5⭐</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
