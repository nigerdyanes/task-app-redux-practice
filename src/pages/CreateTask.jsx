import React, { useRef } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { setNamePriority } from "../utils";
import { addTask } from "../actions";
import FormCreate from "../components/FormCreate";

const CreateTask = ({ addTask, history }) => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const task = {
      id: uuidv4(),
      name: formData.get("name"),
      description: formData.get("description"),
      priority: setNamePriority(formData.get("priority")),
      createAt: moment().format(),
      updateAt: "",
      status: "Pending",
    };
    console.log(task);
    addTask(task);
    history.push("/tasks");
  };

  return (
    <>
      <div className="container mt-5">
        <FormCreate form={form} onSubmit={handleSubmit} />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(CreateTask);
