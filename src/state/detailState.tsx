import { create } from "zustand";

const url = "https://assignment-todolist-api.vercel.app/api/min";
interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  memo: string | null;
  imageUrl: string | null;
}

interface DetailItem {
  todo: TodoItem;
  loading: boolean;
  setTodo: (newTodo: TodoItem) => void;
  getTodo: (id: string) => void;
  updateTodo: (todo: TodoItem) => void;
  deleteTodo: (id: number) => void;
}

export const useDetailStore = create<DetailItem>((set) => ({
  todo: {
    id: 0,
    name: "",
    isCompleted: false,
    memo: null,
    imageUrl: null,
  },
  loading: true,

  setTodo: (newTodo: TodoItem) => set({ todo: newTodo }),

  getTodo: async (id: string) => {
    set({ loading: true });
    try {
      const data = await fetch(`${url}${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const todo = await data.json();
      set({ todo, loading: false });
      console.error(todo);
    } catch (err) {
      console.error("Error fetching todo:", err);
    }
  },

  updateTodo: async (todo: TodoItem) => {
    try {
      const data = await fetch(`${url}/items/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: todo.name,
          memo: todo.memo,
          imageUrl: todo.imageUrl,
          isCompleted: todo.isCompleted,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .catch((err) => console.error(err));
      console.error(data);
    } catch (err) {
      console.error(err);
    }
  },

  deleteTodo: async (id: number) => {
    await fetch(`${url}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  },
}));
