import React, { useEffect, useState } from 'react';

const Searching = () => {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredComments = comments.filter((comment) =>
    comment.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Search By Email</h1>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control mb-4"
          />

          {filteredComments.map((comment) => (
            <div className="col-md-4" key={comment.id}>
              <div className="card text-center mb-4">
                <div className="card-header">
                  {comment.name}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{comment.email}</h5>
                  <p className="card-text">{comment.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Searching;
