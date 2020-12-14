import './search-box.styles.css';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

export const SearchBox = ({placeholder, handleChange}) => (
  <Search placeholder={placeholder} onChange={handleChange} style={{ width: 200, paddingBottom:15}} />
);
