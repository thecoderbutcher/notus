
import AutoSlider from './Slider';

const Hero = () => {
  return (
    <div className="flex relative h-full flex-col">
      <AutoSlider />
      <div className="absolute px-4 w-full h-full bg-black/60 text-textDark">
        <div className="flex flex-col px-4 mt-[20%] justify-center absolute gap-4 lg:gap-8 lg:w-2/3 lg:mt-[15%] lg:ml-[5%] xl:mt-[10%] 2xl:w-1/2 2xl:gap-10 2xl:ml-[15%]">
          <h2 className="text-2xl font-semibold text-accent text-shadow-xs text-shadow-black lg:text-4xl">
            Bienvenido a Notus
          </h2>
          <p className="text-4xl lg:text-6xl font-bold text-shadow-xs text-shadow-black">
            <span className="text-accent">Hoy</span> comienza tu brillante{' '}
            <span className="text-accent">futuro</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            assumenda dolorum, nam tempore perspiciatis labore repudiandae amet
            fuga iste dolore possimus quidem.
          </p>
          <div className="flex gap-4 items-center ">
            <button className="bg-accent font-semibold text-textDark rounded-tl-2xl rounded-tr-2xl rounded-br-2xl px-4 py-2 shadow-md shadow-primary">
              Inscribete ya!
            </button>
            <button className="bg-textDark font-semibold text-text rounded-tl-2xl rounded-tr-2xl rounded-br-2xl px-4 py-2 shadow-md shadow-textMutedDark">
              Propuestas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
