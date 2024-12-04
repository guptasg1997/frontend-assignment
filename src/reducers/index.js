import { combineReducers } from 'redux';
import $ from 'jquery';
import { routerReducer as routing } from 'react-router-redux'
import * as reducers from './reducers'
import * as projectData from './data'

// import { projectData } from './data'

$.extend(reducers, projectData)
$.extend(reducers, routing)

export default combineReducers(reducers)
