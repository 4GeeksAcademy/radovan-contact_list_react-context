import React, { useContext } from "react";
import { Form } from "../component/Form";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const{actions, store} = useContext(Context)
	return(
		
	<div>
		<Link to="/add">
		<div className=" col-6 fw-bold px-5"> ADD NEW CONTACT</div>
		</Link>
		<div>{store.contacts && store.contacts.length > 0 && store.contacts.map}</div>
		</div>
	
	
);};


