import { useState } from 'react';

const useGetContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const setState = (targetName, targetValue) => {
    switch (targetName) {
      case 'name':
        setName(targetValue);
        break;

      case 'number':
        setNumber(targetValue);
        break;

      default:
        setName('');
        setNumber('');
        break;
    }
  };

  return { name, number, setState };
};

export default useGetContact;
