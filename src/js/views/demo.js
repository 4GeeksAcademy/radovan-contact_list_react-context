import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Card } from "../component/contactCard";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getContacts()
	  }, [] )
	  console.log(store.contacts)
	return (
		<div className="container">
			<ul className="list-group" style={{ listStyleType: 'none', paddingLeft: 0 }}>
				{store.contacts?.map((item, index) => {
					return (
						<li key={index}>
							<Card name={item.name}
							address={item.address}
							email={item.email}
							phone={item.phone}
							id={item.id}
							/>
							</li>
						);
					})}
					
					</ul>
					<br />
					<Link className=" d-flex justify-content-center align-items-center" to="/add">
				<button className="btn btn-primary">ADD NEW CONTACT</button>
			</Link>
		</div>
	);
};
						
							


// 

