import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
          Travaillions Ensemble !
          </p>
          <h1 className='py-4 text-gray-700'>
            Moi c&apos;est <span className='text-teal-500'>Nathan</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Développeur Front-End</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          Je peux créer des applications Web front-end tout en y intégrant des technologies back-end et de base de données.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/nathan-casciano-606923232/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='mailto:ncprograndest@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
               <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
               <AiOutlineMail />
              </div>
            </a>
            <a
              href='https://github.com/NathanCso'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
