let list = [];

export default {
  getTasks() {
    list = JSON.parse(localStorage.getItem('tasks')) || [];
    // return Promise.resolve([...list])
    return new Promise(resolve => setTimeout(resolve, 100, [...list]));
  },
  addTask(task) {
    let newTask = {
      //done: false,
      id: Date.now(),
      ...task
    };
    list.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(list));
    return new Promise(resolve => setTimeout(resolve, 100, newTask));
  }
}