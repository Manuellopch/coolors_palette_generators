import React, {useEffect, useState} from "react";
import axios from "axios";
import Colors from "./Colors"

const Post = () => {
	const [colors, setColors] = useState([]);

	const randomColors = async () => {
		const res = await axios.post(' https://cors-everywhere.herokuapp.com/http://colormind.io/api/', {model: 'default'})
			.then(res => {
				setColors(res.data.result)
			})
			.catch((err) => {
				console.log(err)
			});
		return res
	}

	useEffect(() => {
		randomColors()
	}, []);

	return(
		<>
			<div className="Cardcontent">
				<Colors colors={colors} />
			</div>
			<div className='btn'>
				<button onClick={randomColors}>Generate Palette Colors</button>
			</div>
		</>
	)
};
export default Post
