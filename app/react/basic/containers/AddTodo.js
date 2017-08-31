import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/basic/actions';
import PropTypes from 'prop-types';

let AddTodo = ({ dispatch }) => {
  let input, index = 0;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value, index))
          input.value = '';
          index++;
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}
AddTodo = connect()(AddTodo)

export default AddTodo