import { ADD_TASK, TOGGLE_DONE } from '../constants';


let lastId = 1;

export const addTask = (event) => {
    event.preventDefault()
    let data = {
        id: lastId++,
        done: false
    };
    event.target.querySelectorAll('[name]').forEach(el => {
        data[el.getAttribute('name')] = el.value;
    });
    console.log('addTask', data);
    event.target.reset();

    return {
        type: ADD_TASK,
        data
    }
}

export const toggleDone = (id) => ({
    type: TOGGLE_DONE,
    id
})