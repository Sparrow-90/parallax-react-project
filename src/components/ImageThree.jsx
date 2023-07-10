import { Parallax } from 'react-parallax';
import AnotherView from '../img/nature-3.jpg';


const ImageThree = () => (
    <Parallax className='relative h-[100vh] w-full'  bgImage={AnotherView} bgImageAlt="mountains" strength={400}>
        <div className='flex items-center justify-center absolute h-[100vh] w-full'>
            <span className='bg-black/20 uppercase text-white p-4 text-[3rem] w-1/2 tracking-[10px] text-center'> 
            go on the adventure of your life
            </span>
        </div>
    </Parallax>
);

export default ImageThree