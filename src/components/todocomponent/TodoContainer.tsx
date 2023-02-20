import React from 'react';
import { Box, Heading } from '../base';
import AddTodoForm from './AddTodoForm';
import Divider from './divider';
import Todolist from './Todolist';

const TodoContainer = () => {
  return (
    <Box className="shadow-2xl max-w-xl w-full m-auto  mt-24 px-4 pt-6 pb-4 ">
      <Heading className="text-center text-slate-500 font-semibold text-xl mt-12">
        MY TODO LIST
      </Heading>
      <AddTodoForm />
      <Divider />
      <Todolist />
    </Box>
  );
};

export default TodoContainer;
