import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { RootState } from './store'

interface IValue {
  value: any[],
  status: null | string,
  error: null | string
}

const initialState: IValue = {
  value: [],
  status: null,
  error: null
}

//FETCH DATA IN REDUX

export const fetchData = createAsyncThunk(
  'data',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')

    const data = await response.json()

    return data
  },
 
)


export const valueReducer = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment: (state) => {
      //nothing here yet
    }
  },
  extraReducers: {
    [fetchData.pending as any]: (state) => {
    state.status = 'loading...'
    state.error = null
    
    },
    [fetchData.fulfilled as any]: (state, action: any) => {
      state.status = 'resolved'
      state.value = action.payload
    },
    [fetchData.rejected as any]: (state) => {
      console.log(state.error)
    },
  }
})

export const {increment} = valueReducer.actions
export const selectValue = (state: RootState) => state.value
export default valueReducer.reducer
