import React, { useState } from "react";
import moment from "moment";
import { updateTaskToCompleted } from "../actions";
import { connect } from "react-redux";

const Task = ({ task, updateTaskToCompleted }) => {
  const [localTask, setTask] = useState(task);

  const handleCompleted = (task) => {
    setTask({
      ...localTask,
      status: "Completed",
    });
    task.status = "Completed";
    updateTaskToCompleted(task);
  };

  return (
    <>
      <div className="col-3 mt-2">
        <div className="card">
          <div className={`card-header ${localTask.status === "Completed" ? 'bg-success' : 'bg-info' } text-white text-center`}>
            <h5>{localTask.status}</h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">{task.name}</h5>
            <div className="card-subtitle mb-2 text-muted">
              <h6>{task.priority}</h6>
              <h6>{moment(task.createAt).startOf("minutes").fromNow()}</h6>
            </div>
            <p className="card-text">{task.description}</p>
            {localTask.status !== "Completed" && (
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => handleCompleted(task)}
                    >
                      Completed
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-outline-info">
                      Progress
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  updateTaskToCompleted,
};

export default connect(null, mapDispatchToProps)(Task);
