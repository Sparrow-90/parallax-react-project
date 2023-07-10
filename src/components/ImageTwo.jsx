import { Parallax } from 'react-parallax';
import MountainView from '../img/nature-2.jpg';


const ImageTwo = () => (
    <Parallax className='relative h-[100vh] w-full'  bgImage={MountainView} bgImageAlt="mountains view" strength={400}>
        <div className='flex items-center justify-center absolute h-[100vh] w-full'>
            <span className='bg-black/20 uppercase text-white p-4 text-[3rem] w-1/2 tracking-[10px] text-center'>See the world from the most beautiful side</span>
        </div>
    </Parallax>
);

export default ImageTwo