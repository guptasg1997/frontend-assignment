import { handleActions } from 'redux-actions'
import $ from 'jquery';
import {
    STORE_PROJECT_DETAILS,
    STORE_PROJECT_STATUS
} from '../actions/action'
import { feData } from './fe';
export const projectData = handleActions(
    {
        [STORE_PROJECT_DETAILS]: {
            next(state, action) {
                let newState = $.extend(true, {}, state)
                newState.data = action.payload.data
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
        data: feData,
        fetching: false,
    }
)