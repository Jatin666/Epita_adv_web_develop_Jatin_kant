/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { moviesInfos } from 'store/slices/movies';
// import { useAuthQuery } from 'services/api/auth';
import { useNavigate } from 'react-router-dom';
import { useMoviesQuery } from 'services/api/movies';
import { moviesInfos } from 'store/slices/movies';
// import Pets from 'components/Movie';
import Movie from 'components/Movie';
import Slider from 'react-slick';
import SearchBar from 'core-ui/components(common components)/SearchBar';
import Buttons from 'core-ui/components(common components)/Buttons';
import { PrevArrow, NextArrow } from 'core-ui/components(common components)/Arrows';
import { IPets } from 'interfaces';
import Categories from 'components/Categories';

const Home: React.FC<{}> = () => {
  // const { data }: any = useAuthQuery('/');
  const state = useSelector((store: { auth: any; }) => store.auth);
  // const [recentmovies, reponse] = useMoviesQuery(`movies/recents/${state.user ? state.user.id : ''}`);

  const moviesdata: any = useMoviesQuery('movies');
  // const { data }: any = useMoviesQuery(`movies/recents/${state.user ? state.user.id : ''}`);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch(`http://localhost:4000/movies/recents/${state.user ? state.user.id : ''}`);
      // convert the data to json
      const json = await response.json();

      // set state with the result
      setRecent(json);
    };
    if (state.user && state.user.id) { fetchData(); }
    // if (data) {
    //   dispatch(petsInfos(data.pets));
    // }
  }, [state.user]);

  useEffect(() => {
    dispatch(moviesInfos(moviesdata.data));
  }, []);

  return (
    <>
      <SearchBar />
      <h1 className="font-bold lg:text-2xl mb-4 px-3 md:px-0 text-xl">
        Recent Movies
      </h1>
      {
        state.user && state.user.id
          ? (
            <>
              {/* <h2 className="font-bold text-xl px-3 md:px-0 text-xl my-4">Results</h2> */}
              {
                recent.length 
                ?
                (
                  <div className="md:px-0 px-3">
                    <div className="grid grid-cols-3 gap-x-4">
                      {
                        recent.map((el: any, i: any) => {
                          return (
                            <Movie photo={el.poster} name={el.name} id={el.id} key={el.id} />
                          );
                        })
                      }
                    </div>
                  </div>
                ) 
                :
                (
                  <h1>No recent movies.</h1>
                )
              }
            </>
          )
          : (
            <button className="bg-light-blue text-2xl text-white rounded-lg px-4 mb-6" onClick={() => navigate('/login')}>You&apos;ve to login first.</button>
          )
      }
      <div className="bg-light-blue md:rounded-xl md:h-64 mt-6 overflow-hidden flex  md:flex-row flex-col">
        <div className="flex justify-between md:hidden">
          <h2 className="text-white font-semibold">Pets</h2>
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </div>
        <img src="/images/treats.jpeg" alt="treats" className="h-full w-full md:w-4/6 object-cover" />
        <div className={`hidden md:block`}>
          <div className="py-12 px-12">
            <h2 className="text-white font-semibold text-xl self-start">Movies directory</h2>
            <p className="text-white font-normal">See all movies available for adoption, rate them and enjoy.</p>
            <Buttons classes={{ btn: 'bg-white text-dark-blue font-bold w-3/5 py-2 mx-auto my-2' }} onClick={() => navigate('/all-movies')}>See all</Buttons>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="my-6">
        <h2 className="font-bold lg:text-2xl mb-4 px-3 md:px-0 text-xl">Categories</h2>

        <div className="mt-8 flex justify-between font-semibold flex-wrap px-3 text-center">
          <Categories iconPath="/icons/heart.svg" alt="Heart">Drama</Categories>
          <Categories iconPath="/icons/pin.svg" alt="Pin">Action </Categories>
          <Categories iconPath="/icons/clock.svg" alt="clock">Comedy</Categories>
          <Categories iconPath="/icons/confettie.svg" alt="confettie">Fiction</Categories>
          <Categories iconPath="/icons/home.svg" alt="Home">Mangas</Categories>
        </div>
      </div>
    </>
  );
};

export default Home;
