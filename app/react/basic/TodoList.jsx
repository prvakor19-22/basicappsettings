import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import ImmutablePropTypes from 'react-immutable-proptypes';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.get("id")} 
            completed={todo.get("completed")}
            text={todo.get("text")}
            onClick={() => onTodoClick(todo.get("id"))} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList