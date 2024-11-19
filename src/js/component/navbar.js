import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> {store.contacts && store.contacts.length > 0 && store.contacts[0].name} </span>
			</Link>
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-primary">ADD NEW CONTACT</button>
				</Link>
			</div>
		</nav>
	);
};
