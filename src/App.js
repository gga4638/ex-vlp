import './App.css';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import InputMany from './InputSampleMany';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua'
  };

  return (
    <Wrapper>
      <InputMany />
      <InputSample />
      <Counter />
      <div className='name-box' style={style}>{name} study</div>
      <Hello name={name} isSpecial={true}/>
    </Wrapper>
  );
}

export default App;
