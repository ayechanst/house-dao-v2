const ProposeTask = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
    // scaffoldContractWrite
  }

  return (
    <>
      <div className="bg-accent p-5 rounded-lg ">
        <div>Task Proposal</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Task name" className="input input-bordered w-full m-2 max-w-xs" />
          <input type="text" placeholder="Task description" className="input input-bordered m-2 w-full max-w-xs" />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ProposeTask;
