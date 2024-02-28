import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const addTasks = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue('description', task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit(data => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }

    navigate("/tasks");
  });
  return (
    <div className="flex h-[calc(90vh-90px)] items-center justify-center">
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
