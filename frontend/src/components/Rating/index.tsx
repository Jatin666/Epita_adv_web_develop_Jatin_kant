/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesInfos, movieById } from 'store/slices/movies';
import { useRatingMutation } from 'services/api/movies';

const Rating: React.FC<{ onClose: Function, id:number|undefined|string }> = ({ onClose, id }) => {
  const ratings = [1, 2, 3, 4, 5];
  const [rate, reponse] = useRatingMutation();
  const movies = useSelector((store: { movies: any; }) => store.movies.movies);
  const dispatch = useDispatch();

  const handleRate = (rating: any) => {
    const payload = {
      url: `rating/${id}`,
      data: {
        rating,
      },
    };

    const fetchData = async () => {
      // get the data from the api
      const response = await fetch('http://localhost:4000/movies/');
      // convert the data to json
      const json = await response.json();
      // set state with the result
      dispatch(moviesInfos(json));
    };

    rate(payload)
      .unwrap()
      .then(() => { fetchData(); })
      .catch((err) => console.log({ err }));

    onClose(false);
  };

  useEffect(() => {
    // console.log('po', id, { movies });
    // dispatch(moviesInfos(movies));
    dispatch(movieById(id));
  }, [movies]);
  return (
    <div className="flex justify-between">
      {
        ratings.map((el, i) => {
          return (
            <button onClick={() => handleRate(el)} className="border border-light-blue hover:bg-light-blue py-4 px-8 hover:text-white rounded-lg text-black cursor-pointer">{el}</button>
          );
        })
      }
    </div>
  );
};

export default Rating;
