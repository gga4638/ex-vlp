import './App.css';
import { useRef, useState, useMemo, useCallback } from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import InputMany from './InputSampleMany';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua'
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    }

    //setUsers([...users, user]); // 1. spread 형식
    setUsers(users.concat(user)); // 2. concat 사용

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(user => user.id === id ? {...user, active: !user.active } : user));
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
      <InputMany />
      <InputSample />
      <Counter />
      <div className='name-box' style={style}>{name} study</div>
      <Hello name={name} isSpecial={true}/>
    </Wrapper>
  );
}

export default App;

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
