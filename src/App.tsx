import {Counter} from './features/counter/Counter.tsx';
import './App.css'
import {EnterValue} from './features/enterValue/EnterValue.tsx';
import {useEffect, useState} from 'react';

export type CountType = {
  count: number
  message: string
}
export type MinMaxType = {
  min: number
  max: number
}

function App() {

  const [counterScreen, setCounterScreen] = useState<CountType>(() => {
    const saved = localStorage.getItem('counterValue');
    return saved ? JSON.parse(saved) as CountType : {count: 0, message: ''};
  });
  const [setting, setSetting] = useState<MinMaxType>(() => {
    const saved = localStorage.getItem('settingValue');
    return saved ? JSON.parse(saved) as MinMaxType : {min: 0, max: 5};
  });

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counterScreen))
    localStorage.setItem('settingValue', JSON.stringify(setting))
  }, [counterScreen, setting]);


  return (
    <div className="app">
      <EnterValue
        setting={setting}
        setSetting={setSetting}
        counterScreen={counterScreen}
        setCounterScreen={setCounterScreen}/>
      <Counter
        setting={setting}
        setSetting={setSetting}
        counterScreen={counterScreen}
        setCounterScreen={setCounterScreen}
      />
    </div>
  )
}

export default App
