import React from 'react';
import PropTypes from 'prop-types';
import './collaborators.css';

const Collaborators = ({ users }) => {
  return (
    <div className="collaborators">
      {users.map(user => (
        <div key={user.id} className="collaborator">
          <div className="avatar">
            <span role="img" aria-label="user">👤</span>
          </div>
          <div className="details">
            <p className="role">Collaborator</p> {/* Adjust role dynamically if needed */}
            <p className="name">{user.email}</p>
          </div>
        </div>
      ))}
      <div className="add-collaborator">
        <button>+</button>
      </div>
    </div>
  );
};

Collaborators.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Collaborators;
