import {useEffect, useState} from 'react';

const initialItemValue = {
  name: '',
  image: '',
  description: '',
};

const useLists = () => {
  const [lists, setLists] = useState([]);
  const [loadList, setLoadList] = useState(false);
  const [postItemData, setPostItemData] = useState(initialItemValue);
  const [user, setUser] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const listsUrl = 'http://192.168.249.75:3000/items';
      setLoadList(true);
      setTimeout(async () => {
        try {
          const res = await fetch(listsUrl);
          const data = await res.json();
          setLists(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoadList(false);
        }
      }, 5000);
    }

    return () => {
      isMounted = false;
    };
  }, []);
  return {
    lists,
    setLists,
    loadList,
    isUpdate,
    setIsUpdate,
    postItemData,
    setPostItemData,
    user,
    setUser,
  };
};

export default useLists;
