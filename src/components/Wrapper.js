import React, { useState ,useContext} from 'react';
import List from './List/List';
import InputContainer from '../components/Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {StoreContext} from '../utils/storeApi';



const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '88vh',
    width:"100%",
    overflowY:"auto"
  },
}));

export default function App() {
  const classes = useStyle();
  const {data,setNewData} = useContext(StoreContext);
  console.log(data)

  const onDragEnd = (result) => {
    const { destination, source, draggableId ,type} = result;

    if (!destination) {
      return;
    }
    if(type==="list"){
      const newListId = data.listIds;
      newListId.splice(source.index,1);
      newListId.splice(destination.index,0,draggableId);
      return
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setNewData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setNewData(newState);
    }
  };
  return (
   
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(Provided)=>(
            <div className={classes.root}
            ref={Provided.innerRef}
            {...Provided.droppableProps}
            >
            {data.listIds.map((listId,index) => {
              const list = data.lists[listId];
              return <List list={list} key={listId} index={index}/>;
            })}
            <InputContainer type="list" />
            {Provided.placeholder}
          </div>
          )}
      
      </Droppable>
      </DragDropContext>
   
  );
}
