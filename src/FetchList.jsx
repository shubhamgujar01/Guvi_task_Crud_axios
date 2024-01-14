import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
const FetchList = ({ users, updateUser,deleteUser  }) => {

    const handleUpdate = (user) => {
        const updatedDetails = prompt('Enter updated details for user', JSON.stringify(user));
        if (updatedDetails) {
          const updatedUser = JSON.parse(updatedDetails);
          updateUser(updatedUser);
        }
      };

      const handleDelete = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
          deleteUser(userId);
        }
      };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row">
            {users.map((user) => (
                <div key={user.id} className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
                            <p className="card-text">Email: {user.email}</p>
                            <p className="card-text">Phone: {user.phone}</p>
                            <Button variant="primary" onClick={() => handleUpdate(user)}>Edit</Button>
                            <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                        </div>
                    </div>
                </div>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FetchList;
