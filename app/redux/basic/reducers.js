import { combineReducers } from 'redux-immutable';
//import { combineReducers } from 'redux';
import {List, Map, Set} from "immutable";

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from "./actions";

const { SHOW_ALL } = VisibilityFilters;

/*
Note that todos also accepts state—but it's an array! Now todoApp just gives it the slice of the state to manage, and todos knows how to update just that slice. 
This is called reducer composition, and it's the fundamental pattern of building Redux apps.
Note that each of these reducers is managing its own part of the global state. 
The state parameter is different for every reducer, and corresponds to the part of the state it manages.
When you want to split your data handling logic, you'll use reducer composition instead of many stores.
*/

let initialFilter = Set();
initialFilter = initialFilter.add(SHOW_ALL);
function visibilityFilter(state = initialFilter, action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            state = state.clear();
            state = state.add(action.filter)
            return state
        default:
            return state    
    }
}

const initialList = List([]);
function todos(state = initialList, action){
    switch(action.type){
        case ADD_TODO: 
            state = state.push(Map({
                id: action.id,
                text: action.text,
                completed: false
            }));
            return state;
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if(index === action.index){
                    todo = todo.set("completed", !todo.get("completed"))
                    return todo
                }
                return todo
            }) 
        default:
            return state   
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;