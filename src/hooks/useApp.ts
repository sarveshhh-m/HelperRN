import {useState} from 'react';

const useApp = () => {
  const [counter, setCounter] = useState(0);

  const changeCount = (type: 'INCREASE' | 'DECREASE') => {
    if (type === 'INCREASE') {
      setCounter(counter + 1);
    }
    if (type === 'DECREASE') {
      setCounter(counter - 1);
    }
  };
  return {counter, changeCount};
};

export default useApp;
