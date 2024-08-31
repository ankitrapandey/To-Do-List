import React, { useState } from 'react';
import { Container, Typography, Divider, TextField, Button, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

const TodoList = () => {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const addItem = () => {
    if (editIndex !== null) {
      const updatedList = [...listTodo];
      updatedList[editIndex] = inputText;
      setListTodo(updatedList);
      setInputText('');
      setEditIndex(null);
    } else {
      setListTodo([...listTodo, inputText]);
      setInputText('');
    }
  };

  const deleteItem = (index) => {
    setListTodo(listTodo.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setInputText(listTodo[index]);
    setEditIndex(index);
  };

  return (
    <Container className="main-container" style={{ marginTop: '20px' }}>
      <div className="center-container">
        <Typography variant="h4" className="app-heading" style={{ textAlign: 'center' }}>TODO</Typography>
        <Divider style={{ marginBottom: '20px' }} />
        <div className="input-container" style={{ marginBottom: '20px' }}>
          <TextField
            label="Enter your todo item"
            value={inputText}
            onChange={inputChange}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addItem}
            style={{ marginTop: '10px' }}
          >
            {editIndex !== null ? 'Edit' : 'Add'}
          </Button>
        </div>
        {listTodo.map((listItem, index) => (
          <ListItem className="list-item" key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={listItem} />
            <div>
              <IconButton edge="end" aria-label="edit" onClick={() => editItem(index)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </div>
    </Container>
  );
};

export default TodoList;
