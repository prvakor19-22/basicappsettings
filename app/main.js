/*
*******************************************
Ovo je iz osnovni
*******************************************
*/
/*
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

render(<Greeter message={" So far it works fine."}/>, document.getElementById('root'));
*/

/*
*******************************************
Ovo je iz basic redux-a
*******************************************
*/

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './redux/basic/reducers';
import Root from './react/basic/Root';

let store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)

/*
*******************************************
Ovo je iz advanced redux-a
*******************************************
*/
/*
import React from 'react'
import { render } from 'react-dom'
import Root from './react/advanced/Root'

render(
  <Root />,
  document.getElementById('root')
)
*/