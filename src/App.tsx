import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./redux/valueReducer"
import { RootState } from "./redux/store"

import "../src/App.css"

function App() {
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(fetchData())
 }, [dispatch])

 const fetchedData = useSelector((state: RootState) => state.value.value)
 console.log(fetchedData)

 return (
  <div className="App">
   <div className="title">TODO LIST via Redux Toolkit and TypeScript</div>
   <div className="title2">Using createAsyncThunk</div>
   <div className="container">
    {fetchedData.map((todo) => {
     return (
      <div key={todo.id} className="todo-item">
       {todo.id} TASK : {todo.title}
      </div>
     )
    })}
   </div>
  </div>
 )
}

export default App
