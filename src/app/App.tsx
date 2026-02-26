import {Counter} from '../features/counter/Counter.tsx';
import './App.css'
import {EnterValue} from '../features/enterValue/EnterValue.tsx';
import {useAppSelector} from './hooks/useAppSelector.ts';
import {selectCounter} from '../features/auth/model/counter-selectors.ts';




function App() {

  const counter = useAppSelector(selectCounter)



  return (
    <div className="app">
      <EnterValue count={counter}/>
      <Counter count={counter}/>
    </div>
  )
}

export default App
