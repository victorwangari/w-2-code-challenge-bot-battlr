import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://bots-battlr-db.onrender.com/bots")
      .then(response => response.json())
      .then(re => setData(re));
  }, []);

  function favourites(bot) {
    fetch("https://army-bots-battlr-db.onrender.com/bots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bot)
    });
  }

  function Delete(id) {
    fetch(`https://bots-battlr-db.onrender.com/bots/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setData(prevData => prevData.filter(item => item.id !== id));
    });
  }

  return (
    <div className="row ms-5">
      {data.map((bot) => (
        <div key={bot.id} className="card  mx-3 mt-3 ">
          <img src={bot.avatar_url} className="card-img-top" alt={`Avatar of ${bot.name}`} />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <h2 className='class'><span className='text-success'>Class:</span> {bot.bot_class}</h2>
            <p className="card-text">{bot.catchphrase}</p>
            <div className="home-btn">
              <button onClick={() => favourites(bot)} type="button" className="btn btn-success ms-0">Enlist</button>
              <Link to={`/description/${bot.id}`} className="btn view btn-primary">View</Link>
              <button onClick={() => Delete(bot.id)} type="button" className="btn delete btn-danger ">delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
