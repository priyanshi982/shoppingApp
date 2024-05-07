/**
 * MainApp
 *
 * @format
 */

import React from 'react';
import {StackNavigator} from './src/navigation/stackNavigator';
import {BottomBarNavigator} from './src/navigation/bottomBarNavigator';
import {useSelector} from 'react-redux';

const App = () => {
  const {data = {}} = useSelector(state => state?.reducer?.loginData);
  const isLoginPage = data?.isLogined;

  return (
    <>
      {!isLoginPage && <StackNavigator />}
      {isLoginPage && <BottomBarNavigator />}
    </>
  );
};

export default App;
