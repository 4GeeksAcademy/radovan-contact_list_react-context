import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
    
export const Form = () => {
  const{actions, store} = useContext(Context)
  const submit = (e) => {
    // evita que se refresque
    e.preventDefault()
    const name = e.target.exampleInputFullName1.value
    const email = e.target.exampleInputEmail1.value
    const phone = e.target.exampleInputPhone1.value
    const address = e.target.exampleInputAdress1.value
      actions.createContact({name: name, email: email, phone: phone, address: address})
      redirect("/demo")
  }
    return (
     
      <form onSubmit = {submit}>
         
        <div className="col-6 p-5">

          <div className="mb-3">
            <label htmlFor="exampleInputFullName1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputFullName1" aria-describedby="emailHelp"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="exampleInputPhone1"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAdress1" className="form-label">Adress</label>
            <input type="text" className="form-control" id="exampleInputAdress1"/>
           
          </div>
      
         
          <button type="submit" className="col-12 btn btn-primary">SAVE</button>
        </div>
        <Link to="/demo">
        Get back to contacts
        </Link>
        </form>

      )}
      
