import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.scss'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      const res = response.data;
      setData(res);
    }).catch((error) => {
      console.error('There was an error!', error);
    });
  }, []);

  return (
    <div >
    <h1>Liste des Items</h1>
    <div className='container_titles_todo'>
        {data.map((item) => {
            return <Link key={item.id} to={`todos/${item.id}`}>
                {item.title}
                <br />
                {item.completed}
                </Link>;
        })}
    </div>
    </div>
  );
};

export default Home;
