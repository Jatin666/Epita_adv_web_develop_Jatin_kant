/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userInfos } from 'store/slices/auth';
import { useFormik } from 'formik';
import { useLoginMutation } from 'services/api/auth';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [login, response] = useLoginMutation();
  const state = useSelector((store: { auth: any; }) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setData] = useState({
    email: '',
    password: '',
  });

  const formik = useFormik({
    initialValues: formdata,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      const payload = {
        url: 'login',
        data: values,
      };
      login(payload)
        .unwrap()
        .then((res) => { console.log({ res }); dispatch(userInfos(res)); })
        .then((error) => {
          console.log(error);
        });
      //   console.log({ response });
      navigate('/');
    },
  });

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-row items-center justify-center lg:justify-start" />

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Sign in</p>
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="w-full px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don&apos;t have an account?
                    <Link
                      to="/register"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register

                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
