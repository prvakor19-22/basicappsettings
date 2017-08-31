import { connect } from 'react-redux'
import { toggleTodo } from '../../../redux/basic/actions'
import TodoList from '../TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter.first()) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.get("completed"))
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.get("completed"))
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.get("todos"), state.get("visibilityFilter"))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList