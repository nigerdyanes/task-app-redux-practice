import React from "react";

const FormCreate = ({ form, onSubmit }) => {
  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h3>Create task</h3>
        </div>
        <div className="card-body">
          <form ref={form} onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter task name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Priority</label>
              <select name="priority" className="form-select">
                <option defaultValue="selected">Choose...</option>
                <option value="1">High</option>
                <option value="2">Middle</option>
                <option value="3">Low</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Enter task description"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-success">
                Save task
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </>
  );
};

export default FormCreate;
