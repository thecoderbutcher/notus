import { HiOutlineUserGroup } from 'react-icons/hi';
import {
  FaUserGraduate,
  FaUsersBetweenLines,
  FaEarthAmericas,
} from 'react-icons/fa6';
import { RiUserVoiceFill } from 'react-icons/ri';

import Image from 'next/image';

const AboutUs = () => {
  return (
    <main className="flex flex-col gap-4 lg:flex-row justify-center iteems-center lg:items-start container lg:py-8 px-8">
      <section className="flex order-2 lg:order-1">
        <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-rows-3 gap-4">
          <div className="row-span-2 hidden lg:block lg:order-1 lg:w-[250px] lg:h-[450px]">
            <Image
              src={'/img/01.jpg'}
              alt="students on collage"
              width={500}
              height={500}
              className="h-full rounded-4xl rounded-br-none object-cover"
            />
          </div>
          <div className="row-span-1 order-1 lg:order-2 bg-primary flex gap-2 items-center text-textDark p-4 rounded-full lg:rounded-4xl lg:rounded-tr-none lg:px-2 lg:py-1 lg:w-[250px] lg:h-[100px]">
            <FaUserGraduate className='text-2xl lg:text-4xl'/>
            <p className='text-lg'>30 años de educación de calidad</p>
          </div>
          <div className="row-span-1 order-2 lg:order-3">
            <Image
              src={'/img/02.jpg'}
              alt="students on collage"
              width={500}
              height={500}
              className='rounded-4xl lg:rounded-full border-2 border-dotted border-primary p-2'
            />
          </div>
          <div className="row-span-2 hidden lg:block lg:order-4">
            <Image
              src={'/img/03.jpg'}
              alt="students on collage"
              width={500}
              height={500}
              className='h-full rounded-4xl rounded-tl-none w-full lg:w-[250px] lg:h-[300px]'
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col order-1 lg:order-2 gap-4">
        <div className="flex items-center gap-2 text-lg text-primary font-semibold">
          <HiOutlineUserGroup />
          <h2 className="text-center">Sobre nosostros</h2>
        </div>
        <p className="text-4xl font-bold">
          Nuestro sistema educativo te{' '}
          <span className="text-primary">inspira</span> más.
        </p>
        <p className="text-text/60 font-light">
          There are many variations of passages available but the majority have
          suffered alteration in some form by injected humour randomised words
          which don't look even slightly believable. If you are going to use
          passage.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center lg:justify-start gap-1">
            <span className="p-2 rounded-full bg-primary text-textDark text-2xl">
              <FaUsersBetweenLines />
            </span>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Servicios de Educación</p>
              <p className="text-sm text-text/50">
                It is a long established fact that reader will to using content.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center  lg:justify-start gap-1">
            <span className="p-2 rounded-full bg-primary text-textDark text-2xl">
              <FaEarthAmericas />
            </span>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Centros Internacionales</p>
              <p className="text-sm text-text/50">
                It is a long established fact that reader will to using content.
              </p>
            </div>
          </div>
          <p className="bg-primary/20 p-4 rounded-4xl rounded-bl-none text-text/50">
            It is a long established fact that a reader will be distracted by
            the content of a page when looking at its reader for the long words
            layout.
          </p>
          <div className="flex gap-4 border-t border-text/20 pt-4 ">
            <button className="px-8 py-2 text-textDark font-bold rounded-4xl rounded-bl-none bg-primary hover:bg-accent hover:scale-105 transition-all duration-200">
              Ver más
            </button>
            <div className="flex items-center gap-2">
              <span className='p-3 bg-primary rounded-full text-2xl text-textDark'>
                <RiUserVoiceFill />
              </span>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Comunicate al</p>
                <p className='text-primary font-bold'>+54926650356954</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
