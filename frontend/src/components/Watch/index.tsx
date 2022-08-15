/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesInfos, movieById } from 'store/slices/movies';
import { useWatchMutation, useMoviesQuery } from 'services/api/movies';

const Watch: React.FC<{ id: number| string | undefined, url: string }> = ({ id, url }) => {
  const state = useSelector((store: { auth: any; }) => store.auth);
  const [movie, reponse] = useWatchMutation();
  const movies = useSelector((store: { movies: any; }) => store.movies.movies);
  //   const [movies, setMovies] = useState([]);
  const { data }: any = useMoviesQuery('movies');
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      url: `movies/${id}`,
      data: {
        userId: state.user.id,
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

    movie(payload)
      .unwrap()
      .then(() => { fetchData(); })
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    console.log('po', id, { movies });
    // dispatch(moviesInfos(movies));
    dispatch(movieById(id));
  }, [movies]);

  return (
    <div>
      <video src={'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761' || url} controls autoPlay />
      {/* <video src={url} autoPlay loop /> */}
      {' '}
      {/* {id} */}
    </div>
  );
};

export default Watch;
