/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from 'core-ui/components(common components)/Buttons';

const Movie: React.FC<{ photo: string, id: string, name: string }> = ({ photo, id, name }) => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={photo} key={id} alt={name} className="h-64 object-cover rounded-xl w-full" />
      <div className="py-4">
        <span className="font-semibold block">{name}</span>
        <Buttons classes={{ btn: 'bg-light-blue text-white w-24 py-2 my-2' }} onClick={() => navigate(`/movie-details/${id}`)}>View</Buttons>
      </div>
    </div>
  );
};

export default Movie;
