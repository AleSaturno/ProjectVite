import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";

const addTasks = () => {
  const { register, handleSubmit } = useForm();

  const { createTask } = useTasks();

  const onSubmit = handleSubmit(data => {
    createTask(data);
  });
  return (
    <div className ="flex h-[calc(90vh-90px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-auto">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default addTasks;
