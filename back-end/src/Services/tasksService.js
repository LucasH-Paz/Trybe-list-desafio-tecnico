const { builtError } = require('./helpers');
const Tasks = require('../Models/tasksModel');

const INTERNAL_ERROR = 500;

const addNew = async (task) => {
  try {
    const newId = await Tasks.addNew(task);
    return newId;
  } catch (e) {
    return builtError(INTERNAL_ERROR, 'Something went wrong');
  }
};

const update = async (task, id) => {
  try {
    const updatedTask = await Tasks.update(task, id);
    return updatedTask.value;
  } catch (e) {
    return builtError(INTERNAL_ERROR, 'Something went wrong');
  }
};

const remove = async (id) => {
  try {
    const removedTask = await Tasks.remove(id);
    return removedTask;
  } catch (e) {
    return builtError(INTERNAL_ERROR, 'Something went wrong');
  }
};

const getAll = async () => {
  try {
    const tasks = await Tasks.getAll();
    return tasks;
  } catch (e) {
    return builtError(INTERNAL_ERROR, 'Something went wrong');
  }
};

module.exports = {
  addNew,
  update,
  remove,
  getAll,
};
