import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  fetchTasksList,
  updatedTask,
  deleteTask,
} from "./tasksGateway.js";

// const baseUrl =
//   "https://crudcrud.com/api/1aaa919d15974f5d8bae696c14e388c5/tasks";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) =>
      this.setState({
        tasks: tasksList,
      })
    );
  };
  // const tasks = tasksList.map(({ _id, ...task }) => ({
  //   id: _id,
  //   ...task,
  // }));

  // fetch(baseUrl)
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   })

  onCreate = (text) => {
    // 1. + Creat task object
    // 2. + Post object to server
    // 3. + Fetch list from server
    // const { tasks } = this.state;
    const newTask = {
      text,
      done: false,
      // id: Math.random(),
    };

    createTask(newTask).then(() => this.fetchTasks());
  };
  // fetch(baseUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json;utc-8",
  //   },
  //   body: JSON.stringify(newTask),
  // }).then((response) => {
  //   if (response.ok) {
  //     this.fetchTasksList();
  //     // fetch(baseUrl)
  //     // .then(res => {
  //     //   if (res.ok) {
  //     //       return res.json();
  //     //     }
  //     //   })
  //     //   .then(tasksList => {
  //     //     this.setState({
  //     //       tasks: tasksList,
  //     //     });
  //     //   });
  //     // }
  //   } else {
  //     throw new Error("Failed to create task");
  //   }
  // });

  // const updatedTasks = tasks.concat(newTask);
  // this.setState({ tasks: updatedTasks });

  handleTaskStatusChange = (id) => {
    // 1.find task instate by id
    // 2.Create updated task
    // 3. Update task on server
    // 4. Fetch updated tasks list
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updtdTask = {
      text,
      done: !done,
    };

    // updatedTask
    updatedTask(id, updtdTask).then(() => this.fetchTasks());

    // fetch(`${baseUrl}/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json;utc-8",
    //   },
    //   body: JSON.stringify(updatedTasks),
    // }).then((response) => {
    //   if (response.ok) {
    //     this.fetchTasksList();
    //   } else {
    //     throw new Error("Failed to create task");
    //   }
    // });
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
    // fetch(`${baseUrl}/${id}`, {
    //   method: "DELETE",
    // }).then((response) => {
    //   if (response.ok) {
    //     this.fetchTasksList();
    //   } else {
    //     throw new Error("Failed to delete task");
    //   }
    // });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
