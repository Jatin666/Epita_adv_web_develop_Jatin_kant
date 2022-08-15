/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAddNewUserMutation } from 'services/api/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Stepper from 'components/Stepper';
import Step from 'components/Stepper/Step';

const Register = () => {
  const navigate = useNavigate();
  const [addNewUser, response] = useAddNewUserMutation();
  const [formdata, setData] = useState({
    username: '',
    password: '',
    contact: {
      name: '',
      gender: '',
      email: '',
      birth_date: '',
    },
    address: {
      country: '',
      area: '',
      city: '',
      street: '',
      number: '',
    },
    role: {
      name: '',
    },
  });
  const [step, setStep] = useState(0);
  const formik = useFormik({
    initialValues: formdata,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      const payload = {
        url: 'register',
        data: values,
      };
      addNewUser(payload)
        .unwrap()
        .then(() => { navigate('/login'); })
        .then((error) => {
          console.log(error);
        });
    },
  });

  const next = (value: React.SetStateAction<number>) => {
    setStep(value);
  };

  const prev = (value: React.SetStateAction<number>) => {
    setStep(value);
  };

  useEffect(() => {
    console.log({ step });
  }, [step]);

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
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start" />

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Register</p>
                </div>
                <Stepper step={step} next={next} prev={prev} submit={formik.handleSubmit}>
                  <Step progress={step === 0}>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="contact.name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        value={formik.values.contact.name}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="username"
                        placeholder="Username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="contact.email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.contact.email}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                  </Step>
                  <Step progress={step === 1}>
                    <div className="mb-6">
                      <input
                        type="date"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="contact.birth_date"
                        placeholder="Birth date"
                        onChange={formik.handleChange}
                        value={formik.values.contact.birth_date}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="address.country"
                        placeholder="Country"
                        onChange={formik.handleChange}
                        value={formik.values.address.country}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="address.area"
                        placeholder="Area"
                        onChange={formik.handleChange}
                        value={formik.values.address.area}
                      />
                    </div>
                    <div className="mb-6">
                      <select
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="contact.gender"
                        onChange={formik.handleChange}
                        value={formik.values.contact.gender}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </Step>
                  <Step progress={step === 2}>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="address.city"
                        placeholder="City"
                        onChange={formik.handleChange}
                        value={formik.values.address.city}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="address.street"
                        placeholder="Street"
                        onChange={formik.handleChange}
                        value={formik.values.address.street}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        name="address.number"
                        placeholder="Number"
                        onChange={formik.handleChange}
                        value={formik.values.address.number}
                      />
                    </div>
                    <div className="mb-6">
                      <select
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="role.name"
                        onChange={formik.handleChange}
                        value={formik.values.role.name}
                      >
                        <option>Admin</option>
                        <option>User</option>
                      </select>
                    </div>
                  </Step>
                </Stepper>
                <div className="text-center lg:text-left">
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login

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

export default Register;
