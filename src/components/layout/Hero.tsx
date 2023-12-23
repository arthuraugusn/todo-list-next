"use client";

import { useState } from "react";
import TodoModal from "./TodoModal";
import ITodo from "@/interfaces/ITodo";

export default function Hero() {
  const [todo, newTodo] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(true);

  const [todoList, newTodoList] = useState<ITodo[]>([]);

  return (
    <>
      <section className="flex  m-8 items-center justify-center">
        <form className="flex flex-col  gap-4 bg-slate-300  justify-center p-10 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-2xl">
              Cite algo para sua lista
            </label>
            <input
              onChange={(e) => {
                newTodo(e.target.value);
              }}
              type="text"
              name=""
              placeholder="colocar comida para o cachorro"
              id=""
              className="p-3 "
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                const randomNumber = Math.floor(Math.random() * 9999);

                const newTask: ITodo = {
                  id: randomNumber,
                  task: todo,
                };

                newTodoList(todoList.concat(newTask));
              }}
              type="button"
              className="border-4 w-max px-4 py-2 text-2xl hover:bg-black hover:border-blue-200 transition-all ease-in-out hover:text-white duration-500"
            >
              Enviar
            </button>
          </div>
          <button
            onClick={() => {
              setIsOpenModal(false);
            }}
            type="button"
            className="border-4 w-max px-4 py-2 text-base hover:bg-black hover:border-blue-200 transition-all ease-in-out hover:text-white duration-500"
          >
            Clique aqui para mostrar suas tarefas
          </button>
        </form>

        <TodoModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          todoList={todoList}
          newTodoList={newTodoList}
        />
      </section>
    </>
  );
}
