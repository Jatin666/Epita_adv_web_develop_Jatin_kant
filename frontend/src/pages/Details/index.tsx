/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from 'components/Rating';
import Watch from 'components/Watch';
import { moviesInfos, movieById } from 'store/slices/movies';
import { useSelector, useDispatch } from 'react-redux';

const Details: React.FC<{}> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [watch, setWatch] = useState(true);
  const state = useSelector((store: { auth: any; }) => store.auth);
  const movies = useSelector((store: { movies: any; }) => store.movies.movies);
  const movie = useSelector((store: { movies: any; }) => store.movies.movie);
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

    fetchData();

    // setmovie(payload)
    //   .unwrap()
    //   .then(() => { fetchData(); })
    //   .catch((err: any) => console.log({ err }));
  }, []);

  useEffect(() => {
    console.log({ movie });
    dispatch(movieById(id));
  }, [movies]);

  useEffect(() => {
    console.log({ movies });
    // dispatch(movieById(id));
  });

  // React.useEffect(() => {
  //   console.log({ movie });
  // }, [movie]);

  const handleWatch = () => {
    setOpen(true);
    setWatch(true);
  };

  const handleRating = () => {
    setOpen(true);
    setWatch(false);
  };

  return (
    <div>
      {
        open && (
          <div
            className="modal fixed top-1/2 transform -translate-y-1/2 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
          >
            <div className="modal-dialog relative w-auto pointer-events-none">
              <div
                className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
              >
                <div
                  className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
                >
                  <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                    Modal
                  </h5>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body relative p-4">
                  {
                  watch && state.user ? (
                    <Watch id={id} url={movie[0].trailer ? movie[0].trailer : ''} />
                  )
                    : (
                      <Rating id={id} onClose={setOpen} />
                    )
              }
                </div>
                {/* <div
                  className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
                >
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close

                  </button>
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  >
                    Understood

                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )
      }
      {/* <button className="bg-light-blue text-white p-2" onClick={handleWatch}>Watch Now</button> */}
      {/* {movie[0].name} */}
      {
        movie.length && (
          <div className="lg:flex my-7 ">
            <h2 className="font-bold text-2xl md:hidden p-4">{movie[0].name}</h2>
            <img src={movie[0].poster} alt={movie[0].name} className="w-full md:rounded-2xl h-60 md:h-96 lg:w-1/2 object-cover" />
            <div className="lg:px-8 py-8">
              <h2 className="font-bold text-2xl hidden md:block">{movie[0].name}</h2>
              <p>{movie[0].description}</p>
              <div className="mt-4">
                <h2>
                  Rated
                  {' '}
                  {movie[0].rating}
                </h2>
                <h2 className="my-4">
                  Watch
                  {' '}
                  {movie[0].count}
                </h2>
              </div>
              {
                state.user && state.user.id
                  ? (
                    <>
                      <button className="bg-light-blue text-white p-2" onClick={handleWatch}>Watch Now</button>
                      <button className="bg-red text-white p-2 mx-4" onClick={handleRating}>Rate Now</button>
                    </>
                  )
                  : (
                    <button className="bg-light-blue text-2xl text-white rounded-lg px-4 mb-6" onClick={() => navigate('/login')}>You&apos;ve to login if you want to watch and rate.</button>
                  )
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Details;
