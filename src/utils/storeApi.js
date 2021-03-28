import React ,{useState}from 'react';
import { v4 as uuid } from 'uuid';
import store from '../utils/store';

// api request goes here


export const StoreContext = React.createContext(null);


export  const StoreProvider = (props)=>{

    const [data, setData] = useState(store);
    const [userToken,setUserToken]=useState("asda");
    
    const addMoreCard = (title, listId) => {
        console.log(title, listId);
    
        const newCardId = uuid();
        const newCard = {
          id: newCardId,
          title,
        };
    
        const list = data.lists[listId];
        list.cards = [...list.cards, newCard];
    
        const newState = {
          ...data,
          lists: {
            ...data.lists,
            [listId]: list,
          },
        };
        setData(newState);
      };
    
      const addMoreList = (title) => {
        const newListId = uuid();
        const newList = {
          id: newListId,
          title,
          cards: [],
        };
        const newState = {
          listIds: [...data.listIds, newListId],
          lists: {
            ...data.lists,
            [newListId]: newList,
          },
        };
        setData(newState);
      };
      const updateListTitle=(title,listId)=>{
        const list = data.lists[listId];
        console.log(list)
        list.title = title;
        const newState = {
          ...data,
          lists:{
            ...data.lists,
            [listId]:list
          }
        }
        setData(newState);
      }
      
      const setNewData=(newData)=>{
        setData(newData);
      }
    
    return(
        <StoreContext.Provider value={{ addMoreCard, addMoreList,updateListTitle,data,setNewData,userToken}}>
            {props.children}
            </StoreContext.Provider>
    );
}