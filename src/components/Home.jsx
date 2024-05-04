import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://robot-data-base.onrender.com/bots")
      .then(response => response.json())
      .then(re => setData(re));
  }, []);

  function favourites(bot) {
    fetch("https://moviedatabase-g11e.onrender.com/favoriteBots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bot)
    });
  }

  function Delete(id) {
    fetch(`https://robot-data-base.onrender.com/bots/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setData(prevData => prevData.filter(item => item.id !== id));
    });
  }

  return (
    <div className="row ms-5">
      {data.map((bot) => (
        <div key={bot.id} className="card mx-3 mt-3 ">
          <img src={bot.avatar_url} className="card-img-top" alt={`Avatar of ${bot.name}`} />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <p className="card-text">{bot.catchphrase}</p>
            <div className="home-btn">
              <button onClick={() => favourites(bot)} type="button" className="btn btn-success ms-2">Enlist</button>
              <Link to={`/description/${bot.id}`} className="btn btn-primary">View</Link>
              <button onClick={() => Delete(bot.id)} type="button" className="btn btn-danger  ms-2">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
