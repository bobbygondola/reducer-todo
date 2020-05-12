import React, { useState, useReducer } from 'react';





export const reducer = ( state, action ) => {
    const newState = {...initialState};

    return newState;
}

export const initialState = {
    tasks: [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },
  {
    item: 'Do an afternoon Project',
    completed: false,
    id: 2
  },
  {
    item: 'Study',
    completed: false,
    id: 3
  },
  {
    item: 'Party',
    completed: false,
    id: 4
  }
]
}