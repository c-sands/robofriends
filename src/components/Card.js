import React, {Fragment} from 'react';

function Card({ id, name, email }) {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    	<img alt='profile' src={`https://robohash.org/${id}?200x200`} />
    	<Fragment>
    		<h2>{name}</h2>
    		<p>{email}</p>
    	</Fragment>
    </div>
  );
}

export default Card;
