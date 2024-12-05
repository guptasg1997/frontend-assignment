import { handleActions } from 'redux-actions'
import $ from 'jquery';
import {
    STORE_PROJECT_DETAILS,
    STORE_PROJECT_STATUS
} from '../actions/action'
export const projectData = handleActions(
    {
        [STORE_PROJECT_DETAILS]: {
            next(state, action) {
                let newState = $.extend(true, {}, state)
                newState.data = action.payload.data
                newState.fetching = false
                return newState
            }
        },
        [STORE_PROJECT_STATUS]: {
            next(state, action) {
                let newState = $.extend(true, {}, state)
                newState.fetching = action.payload.status
                return newState
            }
        }
    },
    {
        data: [],
        fetching: false,
    }
)