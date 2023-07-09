import { Parallax } from 'react-parallax';
import MountainView from '../img/nature-2.jpg';


const ImageTwo = () => (
    <Parallax className='image'  bgImage={MountainView} bgImageAlt="mountains view" strength={400}>
        <div className='content'>
            <span className='img-txt'>See the world from the most beautiful side</span>
        </div>
    </Parallax>
);

export default ImageTwo