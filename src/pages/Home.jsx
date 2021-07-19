import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import Task from "../components/Task";

const Home = ({ tasks, pending, inProgress, completed }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Counter status={"Completed"} count={completed.length} />
          <Counter status={"In Progress"} count={inProgress.length} />
          <Counter status={"Pending"} count={pending.length} />
        </div>
      </div>
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

const mapStateToProps = state => ({
  tasks:state.tasks,
  pending: state.pending,
  inProgress: state.inProgress,
  completed: state.completed,
});

export default connect(mapStateToProps, null)(Home);
