import { Parallax } from 'react-parallax';
import Mountain from '../img/nature-1.jpg';


const ImageOne = () => (
    <Parallax className='image' bgImage={Mountain} bgImageAlt="mountains" strength={400}>
        <div className='content'>
            <span className='img-txt'>Explore the wonderful corners of the world</span>
        </div>
    </Parallax>
);

export default ImageOne