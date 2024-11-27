import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  
  //  STATE MODAL
  const [showModal, setShowModal] = useState(false);
  
  // FUNCIÓN PARA BORRAR CONTACTO
  const clear = async () => {
    try{

      await actions.deleteContact(props.id);
      setShowModal(false);  // Hide the modal after deleting
      // await actions.getContacts();
      console.log("se borró")
    } catch(error){console.log(error)}
  };

  // FUNCIONES PARA CERRAR O ACTIVAR EL MODAL
  const closeModal = () => {
    setShowModal(false);
  };

 
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-10">
      <div className="card mb-3" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="row g-0" style={{ height: '100%' }}>
          <div className="col-md-4" style={{ height: '100%' }}>
            <img
              src={"https://i.pravatar.cc/150?u=" + props.name}
              className="img-fluid rounded-start"
              alt="..." style={{heigtht: "100%", objectFit: "cover"}}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.email}</p>
              <p className="card-text">{props.address}</p>
              <p className="card-text">{props.phone}</p>
              <Link to={"/edit/" + props.id}>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
              </Link>
              <span>
                <i
                  onClick={openModal}
                  className="fa-solid fa-trash mx-3"
                  style={{ color: 'blue' }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this contact?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={clear}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};