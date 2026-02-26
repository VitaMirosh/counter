import {createAction, createReducer} from '@reduxjs/toolkit';
import type {CountType} from './counter-selectors.ts';
import type {ChangeEvent} from 'react';


export const increaseCountAC = createAction('counter/increaseCount');
export const resetCountAC = createAction('counter/resetCount');
export const handleChangeMaxValueAC = createAction<{ e: ChangeEvent<HTMLInputElement> }>('changeMaxValue/enterValue');
export const handleChangeStartValueAC = createAction<{ e: ChangeEvent<HTMLInputElement>}>('changeStartValue/enterValue');
export const disableInputAC = createAction('disableInput/enterValue');
export const oncClickSetBtnAC = createAction('clickSetBtn/enterValue');

const initialState: CountType = {
  count: 0,
  message: '',
  min: 0,
  max: 0,
}


export const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increaseCountAC, (state) => {
      if (state.count < state.max) {
        {
            state.count = state.count + 1
        }
      }
    })
    .addCase(resetCountAC, (state) => {
      state.count = state.min;
    })
    .addCase(handleChangeMaxValueAC, (state, action) => {
      state.max = Number(action.payload.e.currentTarget.value)
    })
    .addCase(handleChangeStartValueAC, (state, action) => {
      state.min = Number(action.payload.e.currentTarget.value)
    })
    .addCase(disableInputAC, (state) => {
      if ((state.max && state.min) < 0 || (state.max == state.min) || (state.max < state.min)) {
        state.message = 'Incorrect value'
      } else {
        state.message = 'enter values and press "set"'
      }
    })
    .addCase(oncClickSetBtnAC, (state) => {
      if ((state.max || state.min > 0) && (state.min < state.max)) {
        state.count = state.min
        state.message = ''
      } else {
        state.message = 'Incorrect value'
      }

    })
})

