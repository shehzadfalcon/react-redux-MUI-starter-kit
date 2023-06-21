import React from 'react'
import { signOutAsync } from '../store/reducers/auth.reducer';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>dashboard</div>
      <button onClick={() => dispatch(signOutAsync())}>Logout</button>
    </>
  )
};

export default Dashboard;