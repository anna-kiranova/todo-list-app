let lastId = 1;

let list = [];

export default {
    getTasks() {
        list = JSON.parse(localStorage.getItem('tasks')) || [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].id > lastId) {
                lastId = list[i].id;
            }
        }

        return new Promise(resolve => setTimeout(resolve, 100, [...list]));
    },
    addTask(task) {
        let newTask = {
            id: lastId++,
            done: false,
            ...task
        };
        list.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(list));
        return new Promise(resolve => setTimeout(resolve, 100, newTask));
    }
}