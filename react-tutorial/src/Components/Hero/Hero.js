import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../static/images/banner.jpg';
import banner1 from '../../static/images/1.jpg';

const pics = [banner, banner1];
console.log(pics)

const Hero = () => {
    return <div className="w-full large-hero">
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-full"
        >
            {
                pics.map((pic, index) => (
                    <SwiperSlide key={`ban-${index}`}>
                        <img className='w-full h-full object-cover' src={pic} alt='banner' />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
}

export default Hero