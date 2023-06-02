const {useContext} = require('react');
const {ListContext} = require('../context/ListProvider');

const useListData = () => {
  return useContext(ListContext);
};

export default useListData;
