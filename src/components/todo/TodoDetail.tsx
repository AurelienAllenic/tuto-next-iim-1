import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './todo.scss';
import { FaArrowLeft } from "react-icons/fa";
import back from '../../assets/back_vite.jpeg';

const TodoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
          setTodo(response.data);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération du Todo', error);
        });
    }
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container_todo" style={{backgroundImage: `url(${back})`}}>
      <button className="back_button" onClick={() => navigate('/')}>
        <FaArrowLeft/> Retour à l'accueil
      </button>
      <div className='container_infos_todo'>
        <h1>Todo Details</h1>
        <div className="subcontainer_infos_todo">
            <p><strong>Title:</strong> {todo.title ? todo.title : 'No title'}</p>
            <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
            <p><strong>UserId:</strong> {todo.userId ? todo.userId : 'No userId'}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
