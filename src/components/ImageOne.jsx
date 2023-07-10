import { Parallax } from 'react-parallax';
import Mountain from '../img/nature-1.jpg';


const ImageOne = () => (
    <Parallax className='relative h-[100vh] w-full' bgImage={Mountain} bgImageAlt="mountains" strength={400}>
        <div className='flex items-center justify-center absolute h-[100vh] w-full'>
            <span className='bg-black/20 uppercase text-white p-4 text-[3rem] w-1/2 tracking-[10px] text-center'>Explore the wonderful corners of the world</span>
        </div>
    </Parallax>
);

export default ImageOne