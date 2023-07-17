'use client'
import { Checker } from './Components/Checker'
import { useState } from 'react'

export default function Home() {

  const [password, setPassword] = useState({});
  const [found, setFound] = useState(false);
  const [foundPassword, setFoundPassword] = useState('');
  const [count, setCount] = useState(0);

  const send_password = async (e) => {
    e.preventDefault()
    if (password.password) {
      const url = 'http://127.0.0.1:5000/checkpassword';
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(password)
      });
      const data = await response.json();
      if (data.status) {
        setFound(true);
        setCount(Number(data.count));
      } else if (!data.status) {
        setFound(false);
        setFoundPassword(data.password);
      }
    } else {
      console.log('empty password');
    }

  }

  return (
    <main>
      <Checker password={password}
               setPassword={setPassword} 
               send_password={send_password} 
               found={found} 
               count={count}
               setCount={setCount}
               setFound={setFound}
               setFoundPassword={setFoundPassword}
               foundPassword={foundPassword}
      />
    </main>
  )
}
