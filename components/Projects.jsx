import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import booki from "../public/assets/projects/booki.png"
import travelliing from "../public/assets/projects/Traveliing.png"
import kanap from "../public/assets/projects/kanap.png"
import piquante from "../public/assets/projects/piquante.png"
import kasa from "../public/assets/projects/kasa.png"
import ocean from "../public/assets/projects/ocean.png"
import portfolio from "../public/assets/projects/student-portfolio.png"
import ProjectItem from './ProjectItem';
import gestion from "../public/assets/projects/gestion.png"

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projets
        </p>
        <h2 className='py-4'>Mes projets</h2>
        <h6 className=' text-blue-800'>Cliquer sur les images pour obtenir plus d&apos;informations sur les projets</h6>
        <p>Voici les différents projets que j&apos;ai pu effectués, pour le moment beaucoup sont issus de ma formation de Développeur Web chez OpenClassrooms néanmoins de nouveaux projets sont en cours de réalisation.
</p>
<p>Certains projets sont visitables directement pour les autres vous serez redirigé sur ma page <strong className='text-blue-500'>GitHub</strong></p>
        <div className='grid md:grid-cols-2 gap-8 mt-3'>
          <ProjectItem
            title='Booki'
            backgroundImg={booki}
            projectUrl='/property'
            tech='HTML/CSS'
          />
          <ProjectItem
            title='Traveliing'
            backgroundImg={travelliing}
            projectUrl='/crypto'
            tech='React/Tailwind CSS'

          />
          <ProjectItem
            title='Kanap'
            backgroundImg={kanap}
            projectUrl='/kanap'
            tech='Javascript'

          />
          <ProjectItem
            title='Piquantee'
            backgroundImg={piquante}
            projectUrl='/netflix'
            tech='Javascript/NodeJS'

          />
          <ProjectItem
            title='Kasa'
            backgroundImg={kasa}
            projectUrl='/twitch'
            tech='React'

          />

            <ProjectItem
            title='OceanSave'
            backgroundImg={ocean}
            projectUrl='/ocean'
            tech='NextJS/Tailwind'

          />

            <ProjectItem
            title='Portfolio Etudiant'
            backgroundImg={portfolio}
            projectUrl='/student'
            tech='Html/CSS'

          />

            <ProjectItem
            title='Gestion Employés'
            backgroundImg={gestion}
            projectUrl='/gestion'
            tech='PHP/MySQL'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
