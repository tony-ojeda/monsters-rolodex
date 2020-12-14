import './card.styles.css';
import { Card  as CardAnt} from 'antd';

const { Meta } = CardAnt;
export const Card = (props) => (
	<CardAnt
    	hoverable
		className='card-container'
    	cover={<img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />}
 	>
   		<Meta title={props.monster.name} description={props.monster.email} />
	</CardAnt>
);

