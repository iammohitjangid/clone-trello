import React from 'react';
import { Paper, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
  cardContainer:{
    marginTop:theme.spacing(4),
  }
}));
export default function List({ list ,index }) {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(Provided)=>(
        <div ref={Provided.innerRef}
        {...Provided.draggableProps}>
        <Paper className={classes.root}{...Provided.dragHandleProps}>
          <CssBaseline />
          <Title title={list.title} listId={list.id}/>
          <Droppable droppableId={list.id}>
            {(Provided)=>(
              <div
              ref={Provided.innerRef}
              {...Provided.droppableProps}
              className={classes.cardContainer}
              >
                {list.cards.map((card,index) => (
                <Card key={card.id} card={card} index={index} />))
                }
                {Provided.placeholder}
              </div>
            )}
              
           </Droppable>
  
          <InputContainer listId={list.id} type="card" />
        </Paper>
      </div>
      )}
    
    </Draggable>
  );
}
