import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import nathan from"../public/assets/nathan.png"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            A propos de moi
          </p>
          <h2 className='py-4'>Qui suis-je ?</h2>
          <p className='py-2 text-gray-600'>
          Développeur web spécialisé dans le Front-End avec un véritable attrait pour le design . Je considère que chaque projet permet d&apos;acquérir de nouvelles compétences, dans mon parcours de formation nous avons pu réaliser plusieurs projets en mettant en oeuvre différentes techniques et différentes technologies. Grâce à mes multiples expériences professionnelles dans des domaines variés je saurais faire preuve d&apos;adaptabilité et de professionnalisme
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Jetez un oeil à mes derniers projets
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={nathan} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
