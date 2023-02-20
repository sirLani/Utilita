import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { Box, Button, Input } from '../base';
import { addTodo } from '../../redux/todoSlice';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const [disabled, setDisabled] = useState(true);

  // this is used to track the change in the input element so as to ensure an empty form
  // is not submitted and it changes the state of the button from disabled or vise versa
  useEffect(() => {
    if (value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(addTodo(value));
      setValue('');
    } else {
      alert('form must be filled');
    }
  };

  return (
    <Box>
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row justify-between items-center mt-12 mb-8 "
      >
        <Input
          placeholder="Enter Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="max-w-xs w-full"
        />
        <Button
          disabled={disabled}
          className="bg-slate-700 rounded-full px-10 mt-6 sm:mt-0"
          type="submit"
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddTodoForm;
