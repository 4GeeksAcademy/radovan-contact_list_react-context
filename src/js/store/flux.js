const apiUrl= "https://playground.4geeks.com/contact"
const agendaSlug = "radovan"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: null, 
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createAgenda: (contact) => {
				fetch(apiUrl + "/agendas/" + contact.name, {method:"POST", body: JSON.stringify(contact)} )
					.then(response => response.json() )
					.then(data => console.log(data) )
					.catch(error => console.log(error) )
			},
			
			createContact: (singleContact) => {
				fetch(apiUrl + "/agendas/" + agendaSlug + "/contacts", {method: "POST", headers: {"Content-Type": "application/json"} , body: JSON.stringify(singleContact)} ) 
				.then(response => response.json())
				.then(data => console.log(data))
				.catch(error => console.log(error))
			},

			getContacts: () => {
				const actions= getActions()
				fetch(apiUrl + "/agendas/" + agendaSlug + "/contacts")
					.then(response => {
						console.log(response)
						if(response.status == 404) {
							actions.createAgenda()
							setStore({contacts: [] })
						}
						if(response.ok) {
							return response.json()
						}
						setStore({contacts: false} )
					} )
					.then(data => {
						 console.log(data)
						 if(data){

							 setStore({contacts: data.contacts})
							 return true
						 }
						 setStore({contacts: false} )
						})
					.catch(error => setStore({contacts: false} ) )
			},

			editContact: (contact) => {
				fetch(apiUrl + "/agendas/" + contactiD, {method:"PUT", body: JSON.stringify(contact)} )
					.then(response => response.json() )
					.then(data => console.log(data) )
					.catch(error => console.log(error) )
			},
		}
	};
};

export default getState;
