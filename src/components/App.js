import React from 'react'
import AddTaskForm from './AddTaskForm'
import FilterTasksForm from './FilterTasksForm'
import TasksList from './TasksList'

import { Header } from 'semantic-ui-react'

const App = () => <div>
          <Header as='h1' color='green'>My first React App - To do List</Header>
          <AddTaskForm />
          <FilterTasksForm  />
          <TasksList />
      </div>

export default App;
