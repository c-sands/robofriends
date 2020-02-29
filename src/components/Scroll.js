import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', height: '800px', padding: '10px', borderTop: '5px solid #000000'}}>
			{props.children}
		</div>
	)
}

export default Scroll;