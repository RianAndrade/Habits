import "./styles/"

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={4}/>
      <Habit completed={9}/>
      <Habit completed={15}/>
      
    </div>
  )
}

export default App
