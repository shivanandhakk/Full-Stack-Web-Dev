import { useState } from "react";

export default function Task8TaskTracker() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const list = [...tasks];
    list[index].done = !list[index].done;
    setTasks(list);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <style>{`
        body {
          font-family: Arial;
          background: #eef1f5;
        }

        .box {
          width: 320px;
          background: #7fdc4cff;
          padding: 20px;
          margin: 60px auto;
          border-radius: 8px;
          text-align: center;
          min-height: 200px;
        }

        h3 {
          margin-bottom: 15px;
        }

        .input-row {
          display: flex;
          gap: 6px;
        }

        input {
          flex: 1;
          padding: 6px;
          border: 1px solid #e2d1d1ff;
          border-radius: 4px;
        }

        button {
          padding: 5px 12px;
          border: none;
          background: #7470bcff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        ul {
          padding: 0;
          margin-top: 15px;
        }

        li {
          list-style: none;
          margin-top: 8px;
          padding: 4px;
          background: #f0d3eaff;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .done {
          text-decoration: line-through;
          color: gray;
        }
          
      `}</style>

      <div className="box">
        <h3>Task Tracker</h3>

        <div className="input-row">
          <input
            placeholder="New task"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              <span
                className={t.done ? "done" : ""}
                onClick={() => toggleTask(i)}
              >
                {t.text}
              </span>
              <button onClick={() => deleteTask(i)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
