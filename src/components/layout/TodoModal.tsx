import ITodo from "@/interfaces/ITodo";
import { Dispatch, SetStateAction } from "react";

export default function TodoModal(openClose: {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  todoList: ITodo[];
  newTodoList: Dispatch<SetStateAction<ITodo[]>>;
}) {
  if (openClose.isOpenModal) {
    return null;
  }
  return (
    <>
      <div className="absolute p-8  bg-blue-300">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-end">
            <button
              className=" font-semibold border-2 border-black bg-red-600 px-2"
              onClick={() => {
                openClose.setIsOpenModal(true);
              }}
            >
              X
            </button>
          </div>

          <div className="border-2  border-black p-4">
            {openClose.todoList.map((value, index) => {
              return (
                <>
                  <div
                    id={value.id.toString()}
                    key={index}
                    className="flex gap-4 my-4 "
                  >
                    <p className="border-b border-black">{value.task}</p>
                    <button
                      className="  border-2 border-black bg-red-600 px-1"
                      onClick={() => {
                        let newTasks: ITodo[] = openClose.todoList
                          .slice(0, index)
                          .concat(openClose.todoList.slice(index + 1));

                        openClose.newTodoList(newTasks);
                      }}
                    >
                      X
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
