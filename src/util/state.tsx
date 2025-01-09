import { atom, selector } from "recoil";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  memo: null | string;
  imgUrl: null | string;
  isEmpty: boolean;
}

const list = atom<TodoItem[]>({
  key: "todoList",
  default: [],
});

const todoList = selector<TodoItem[]>({
  key: "todoList",
  get: ({ get }) => {
    const todos = get(list);
    return todos.filter((todo) => !todo.isCompleted);
  },
});

const doneList = selector<TodoItem[]>({
  key: "doneList",
  get: ({ get }) => {
    const todos = get(list);
    return todos.filter((todo) => todo.isCompleted);
  },
});

const stateList = { list, todoList, doneList };

export default stateList;
