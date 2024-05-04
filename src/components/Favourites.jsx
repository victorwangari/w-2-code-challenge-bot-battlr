import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favourites() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://moviedatabase-g11e.onrender.com/favoriteBots')
      .then(response => response.json())
      .then(res => setData(res));
  }, [data]); 

  function Delete(id) {
    fetch(`https://moviedatabase-g11e.onrender.com/favoriteBots/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setData(prevData => prevData.filter(item => item.id !== id));
    });
  }

  return (
    <div>
      <div className='bg-success'>
        <div className="row ms-5">
          {data.map((i) => (
            <div key={i.id} className="fav mx-3 mt-3 ">
              <img src={i.avatar_url} className="card-img-top" alt={`Avatar of ${i.name}`} />
              <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.catchphrase}</p>
                <div className='fav-btn ms-2'>
                  <Link to={`/description/${i.id}`} className="btn btn-primary">view</Link>
                  <button onClick={() => Delete(i.id)} type="button" className="btn fav-delete btn-danger ms-5">x</button>
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
