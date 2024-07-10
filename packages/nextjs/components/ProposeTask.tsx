import { useState } from "react";

const ProposeTask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDesription, setTaskDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // scaffoldContractWrite
    const task = {
      name: taskName,
      description: taskDesription,
    };

    const taskJsonString = JSON.stringify(task);
    console.log(taskJsonString);
  }

  return (
    <>
      <div className="bg-accent p-5 rounded-lg ">
        <div>Task Proposal</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={e => setTaskName(e.target.value)}
            placeholder="Task name"
            className="input input-bordered w-full m-2 max-w-xs"
          />
          <input
            type="text"
            onChange={e => setTaskDescription(e.target.value)}
            placeholder="Task description"
            className="input input-bordered m-2 w-full max-w-xs"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProposeTask;
