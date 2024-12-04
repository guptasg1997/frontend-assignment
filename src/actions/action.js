import React, { useState } from 'react';
import { createAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import axios from 'axios';

let apiURL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"


export const STORE_PROJECT_DETAILS = 'STORE_PROJECT_DETAILS';
const storeProjectDetailsDone = createAction(STORE_PROJECT_DETAILS)

export const STORE_PROJECT_STATUS = 'STORE_PROJECT_STATUS';
const storeProjectStatus = createAction(STORE_PROJECT_STATUS)


export const storeProjectDetails = (tries = 3) => {
    return (getState, dispatch) => {
        dispatch(storeProjectStatus({status: true}))
        axios
        .get(apiURL)
        .then((response) => {
            dispatch(storeProjectDetailsDone({data: response.data}))
            dispatch(storeProjectStatus({status: true}))
        })
        .catch((err) => {
            dispatch(storeProjectStatus({status: false}))
            if (tries > 1) {
                dispatch(storeProjectDetails(tries - 1))
            }
        });
    }
};