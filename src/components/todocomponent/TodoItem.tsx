/* eslint-disable multiline-ternary */
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Box, Text } from '../base';
import { type TodoListType } from '../../types/general';
import { useAppDispatch } from '../../redux/hooks';
import { isCompleted, deleteTodo } from '../../redux/todoSlice';

import EditTodoForm from './editTodoForm';

const TodoItem = ({ id, title, completed }: TodoListType) => {
  const [opened, setOpened] = useState(false);

  const dispatch = useAppDispatch();

  const handleIsCompleted = () => {
    dispatch(isCompleted({ id, completed: !(completed ?? false) }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = () => {
    setOpened(true);
  };

  return (
    <>
      <Box
        className={`flex justify-between items-center shadow-lg px-6 py-3 rounded-2xl mb-5 mt-6 ${
          completed === true ? 'line-through' : ''
        }`}
      >
        <Text className="capitalize">{title}</Text>
        <Box>
          <EditOutlined onClick={handleEdit} className="cursor-pointer" />
          {completed === false ? (
            <CheckCircleOutlined
              className="ml-7 cursor-pointer"
              onClick={handleIsCompleted}
            />
          ) : (
            <UndoOutlined
              className="ml-7 cursor-pointer"
              onClick={handleIsCompleted}
            />
          )}
          <DeleteOutlined
            data-testid="delete-todoItem"
            className="ml-7 cursor-pointer"
            onClick={handleDelete}
          />
        </Box>
      </Box>
      <EditTodoForm
        opened={opened}
        title={title}
        id={id}
        setOpened={setOpened}
      />
    </>
  );
};

export default TodoItem;
