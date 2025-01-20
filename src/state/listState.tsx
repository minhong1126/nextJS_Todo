import { create } from "zustand";

const url = "https://assignment-todolist-api.vercel.app/api/min/items";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  imgUrl: string | null;
  memo: string | null;
}

interface ListState {
  todoList: TodoItem[];
  doneList: TodoItem[];

  getList: () => Promise<void>;
  setTodoList: (todoItems: TodoItem[]) => void;
  setDoneList: (doneItems: TodoItem[]) => void;
  toggleTodoDone: (id: number) => void;
}

// listState.tsx
// "/" 페이지의 상태 관리.
// 할 일 리스트, 완료 리스트 저장, 완료 상태 변경 등의 기능이 담겨있습니다.
// todo 생성은 TodoInput.tsx 에 포함되어 있습니다.

export const useListStore = create<ListState>((set) => ({
  todoList: [],
  doneList: [],

  getList: async () => {
    try {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .catch((err) => console.error(err));

      const todoItems = data.filter((item: TodoItem) => !item.isCompleted);
      const doneItems = data.filter((item: TodoItem) => item.isCompleted);

      set({
        todoList: todoItems,
        doneList: doneItems,
      });
    } catch (err) {
      console.error(err);
    }
  },

  setTodoList: (todoItems: TodoItem[]) => set({ todoList: todoItems }),

  setDoneList: (doneItems: TodoItem[]) => set({ doneList: doneItems }),

  toggleTodoDone: async (id: number) =>
    set((state) => {
      const todoList = [...state.todoList];
      const doneList = [...state.doneList];

      const todoIndex = todoList.findIndex((item) => item.id === id);
      if (todoIndex !== -1) {
        const [movedTodoItem] = todoList.splice(todoIndex, 1);
        movedTodoItem.isCompleted = true;
        update(movedTodoItem);
        doneList.push(movedTodoItem);
      } else {
        const doneIndex = doneList.findIndex((item) => item.id === id);
        if (doneIndex !== -1) {
          const [movedDoneItem] = doneList.splice(doneIndex, 1);
          movedDoneItem.isCompleted = false;
          update(movedDoneItem);
          todoList.push(movedDoneItem);
        }
      }

      async function update(item: TodoItem) {
        const data = await fetch(`${url}/${item.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: item.name,
            memo: item.memo,
            imageUrl: item.imgUrl,
            isCompleted: item.isCompleted,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .catch((err) => console.error(err));
        console.error(data);
      }

      return { todoList, doneList };
    }),
}));
