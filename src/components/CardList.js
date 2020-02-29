import React, {Fragment} from 'react';
import Card from './Card';

function CardList({ robots }) {
  return (
    <Fragment>
    	{
			robots.map((user, i) => {
				return (
					<Card 
						key={i.toString()} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
						/>
				);
			})
		}
	</Fragment>
  );
}

export default CardList;
