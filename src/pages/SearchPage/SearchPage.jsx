import React, {useState} from "react";
import "./searchPage.css"
import SearchBar from "./Search";
import DataRouting from "../../data/DataRouting";
import Search from "../../assets/icons/search.svg";
import {Link} from "react-router-dom";


const SearchPage = () => {
	const [result, setResult] = useState([])
	return (
		<div className="conteneur">
			<div className="Search">
				<img id="searchBar" src={Search} alt=""/>
				<SearchBar id="searchBar" className="SearchBar" placeHolder=" Recherche" filterField={(item) => item.url}
						   list={DataRouting()}
						   setList={setResult}/>
			</div>
			{result.map((item, index) => (
				<div className="resultSearch">
					<Link className="link" to={item.url}><p key={index}>{item.url}</p></Link>
				</div>
			))}
		</div>
	)
}

export default SearchPage;


