import React, { useState } from 'react';
import { Box, Button, Input, Text } from '../base';
import { Modal } from '@mantine/core';
import { useAppDispatch } from '../../redux/hooks';
import { editTodo } from '../../redux/todoSlice';

interface EditTodoProp {
  opened: boolean;
  setOpened: (value: boolean) => void;
  title?: string;
  id?: string;
}

const EditTodoForm = ({ opened, setOpened, title, id }: EditTodoProp) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(title);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ id, title: value }));
  };

  return (
    <Box>
      <Modal
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
        size="auto"
        title="Modal size auto"
      >
        <Text>Edit Todo Item</Text>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center mt-12 mb-8 "
        >
          <Input
            placeholder="Edit your Task"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="max-w-xs w-full"
          />
          <Button
            className="bg-slate-700 rounded-full px-10 mt-8"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Modal>
    </Box>
  );
};

export default EditTodoForm;
