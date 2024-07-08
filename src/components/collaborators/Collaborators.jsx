import React from 'react'
import './collaborators.css'
const Collaborators = () => {
    return (
      <div className="collaborators">
        <div className="collaborator">
            <div className="avatar">
                <span role="img" aria-label="user">👤</span>
            </div>
            <div className="details">
                <p className="role">Admin</p>
                <p className="name">Name Surname (you)</p>
          </div>
        </div>
        <div className="add-collaborator">
            <button>+</button>
        </div>
    </div>
    );
}

export default Collaborators