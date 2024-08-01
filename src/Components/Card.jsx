import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="container">
      <div className='row'>
        {data.map((item) => (
          <div key={item.id} className="col ">
            <div className="card" >
              <img src={item.thumbnailUrl} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
