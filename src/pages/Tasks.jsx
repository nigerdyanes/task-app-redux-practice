import React from "react";
import Task from "../components/Task";
import { connect } from "react-redux";

const Tasks = ({ tasks }) => {
  return (
    <>
      {console.log(tasks)}
      <div className="container mt-5">
        <div className="row">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(Tasks);
