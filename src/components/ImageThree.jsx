import { Parallax } from 'react-parallax';
import AnotherView from '../img/nature-3.jpg';


const ImageThree = () => (
    <Parallax className='image'  bgImage={AnotherView} bgImageAlt="mountains" strength={400}>
        <div className='content'>
            <span className='img-txt'> 
            go on the adventure of your life
            </span>
        </div>
    </Parallax>
);

export default ImageThree