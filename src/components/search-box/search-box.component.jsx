import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
	<input 
		className='search'
		type="text" 
		onChange={handleChange} 
		placeholder={placeholder} />
);
