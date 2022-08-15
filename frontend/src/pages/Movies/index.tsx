/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesInfos } from 'store/slices/movies';
import { useMoviesQuery } from 'services/api/movies';
import Movie from 'components/Movie';
import Slider from 'react-slick';
import SearchBar from 'core-ui/components(common components)/SearchBar';
import Buttons from 'core-ui/components(common components)/Buttons';
import { PrevArrow, NextArrow } from 'core-ui/components(common components)/Arrows';
// import { IPets } from 'interfaces';
import Categories from 'components/Categories';

const Home: React.FC<{}> = () => {
  const { data }: any = useMoviesQuery('movies');
  const state = useSelector((store: { movies: any; }) => store.movies);
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (data) {
      dispatch(moviesInfos(data));
    }
  }, [data]);

  return (
    <>
      <h1 className="font-bold lg:text-2xl mb-4 px-3 md:px-0 text-xl">
        Movies
      </h1>
      <SearchBar />
      <h2 className="font-bold text-xl px-3 md:px-0 text-xl my-4">Results</h2>
      {/* Pets Results */}
      <div className="md:px-0 px-3">
        <Slider {...settings}>
          {
            state.movies && state.movies.map((el: any, i: any) => {
              return (
                <Movie photo={el.poster} name={el.name} id={el.id} key={el.id} />
              );
            })
          }
        </Slider>
      </div>
      {/* <div className="bg-light-blue md:rounded-xl md:h-64 overflow-hidden flex  md:flex-row flex-col">
        <div className="flex justify-between md:hidden">
          <h2 className="text-white font-semibold">Pets</h2>
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </div>
        <img src="/images/treats.jpeg" alt="treats" className="h-full w-full md:w-4/6 object-cover" />
        <div className={`hidden md:block`}>
          <div className="py-12 px-12">
            <h2 className="text-white font-semibold text-xl self-start">Pets directory</h2>
            <p className="text-white font-normal">See all pets available for adoption, promote them and get them a home.</p>
            <Buttons classes={{ btn: 'bg-white text-dark-blue font-bold w-3/5 py-2 mx-auto my-2' }}>See all</Buttons>
          </div>
        </div>
      </div> */}
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
