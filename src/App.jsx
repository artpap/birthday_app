import { useState } from 'react';
import { data } from './data';

const { name, age, image } = data;

const [person, setPerson] = useState(null);

const App = () => {
  return <h2>Birthday Reminder - Starter</h2>;
};
export default App;
