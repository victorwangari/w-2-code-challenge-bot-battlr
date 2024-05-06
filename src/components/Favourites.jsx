import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favourites() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://army-bots-battlr-db.onrender.com/bots')
      .then(response => response.json())
      .then(res => setData(res));
  }, [data]); 

  function Delete(id) {
    fetch(`https://army-bots-battlr-db.onrender.com/bots/${id}`,{
      method: "DELETE",
    })
    .then(() => {
      setData(prevData => prevData.filter(item => item.id !== id));
    });
  }

  return (
    <div>
      <div className='bg-success'>
        <div className='army'>
          <h1>BOTS ARMY</h1>
        </div>
        <div className="row  ms-5">
         {data.map((i) => (
          <div key={i.id} className="card fav mx-3 mt-3 ">
          <img src={i.avatar_url} className="card-img-top" alt={`Avatar of ${i.name}`} />
          <div className="card-body">
            <div>
            <h5 className="card-title">{i.name}</h5>
            <h2 className='class'><span className='text-success'>Class:</span> {i.bot_class}</h2>

            </div>
            <p className="card-text">{i.catchphrase}</p>
            <div className="home-btn">
              <Link to={`/description/${i.id}`} className="btn btn-primary">View</Link>
              <button onClick={() => Delete(i.id)} type="button" className="btn btn-danger  ms-4">Delete</button>
            </div>
          </div>
         </div>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default Favourites;
