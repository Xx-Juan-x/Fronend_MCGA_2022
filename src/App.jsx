import {useState} from 'react';
import Counter from './Counter';
import Button from './Button';

function App() {
  let [cont, setCont] = useState(0)

  const handleOnclick = () =>{
    setCont(cont+1);
    console.log(cont);
  }
  return (
    <div>
      <Counter cont={cont}/>
      <Button handleOnclick={handleOnclick}  text={'Incrementar'}></Button>
    </div>
  );
}

export default App;
