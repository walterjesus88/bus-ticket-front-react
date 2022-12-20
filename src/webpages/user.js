import React,{useState,useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";


const User = () => {

	const param = useParams();
	console.log(param.id)

	const [error,setError]=useState(null);
	const [isLoaded,setIsLoaded]=useState(false);
	const [user,setUser]=useState([]);
	const [userAddress,setUserAddress]=useState([]);
	const [userCompany,setUserCompany]=useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/" + param.id)
		.then(res=>res.json())
		.then(
			(data) => {
				console.log(data);				
				setIsLoaded(true);
				setUser(data);
				setUserAddress(data.address);
				setUserCompany(data.company);
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		)
	},[])

	if(error){
		return <div></div>
	}

	if(!isLoaded){
		return <div></div> 
	}

	if(user){
		return (
			<div>
				<h1>{user.name}</h1>
				<div>{user.email}</div>
				<div>{user.phone}</div>
				<div>{user.website}</div>
				<div>{userCompany.name}</div>
				<div>
					{userAddress.street}, 
					{userAddress.suite}, 
					{userAddress.city}, 
					{userAddress.zipcode}				
				</div>
			</div>
		); 
	}
}
	// return(
	// 		<div>
	// 			<h1>user Details</h1>
	// 			ID: {param.id}
	// 		</div>
	// 	);
	// }

export default User;

