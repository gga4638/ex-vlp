import './App.css';
import React, { useMemo, useReducer } from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import InputMany from './InputSampleMany';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { FaBeer } from 'react-icons/fa';

const initialState = {
  users: [
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
      username: 'what',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id ? {...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function countActiveUsers(users) {
  //console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

export const UserDispatch = React.createContext(null);

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua'
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />
        <div>활성 사용자 수 : {count}</div>
      </UserDispatch.Provider>

      <InputMany />
      <InputSample />
      <Counter />
      <div className='name-box' style={style}>{name} study</div>
      <Hello name={name} isSpecial={true}/>
      <h3> Lets go for a <FaBeer />? </h3>
    </Wrapper>
  );
}

export default App;