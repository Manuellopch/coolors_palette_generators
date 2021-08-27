import React, {useEffect, useState} from "react";
import Clipboard from 'react-clipboard.js';

const Colors = ({colors}) => {
	console.log(colors)
	const [copy, setCopy] = useState({value: '', copied: false});
	

	const OnClick = (color) => {
		setCopy({value: color, copied: true})
	}

	return(
		<>
			{
				colors.map(color => (
					<div key={Math.random()} className='card'>
						<Clipboard
							data-clipboard-text={`rgb(${color})`}
							component='a'
							onClick={() => OnClick(color)}>
							<div className='panel' style={{ backgroundColor: `rgb(${color})` }}></div>
						</Clipboard>
						<div className='color-text'>{`rgb (${color})`}</div>
					</div>
				))
			}
		</>
	)
}


export default Colors
