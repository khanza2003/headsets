import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Pageone = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollPosition(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden', margin: 0, padding: 0, background: 'black' }}>
      
      
      <div className="parallax-section first-section" style={{ background: 'black' }}>
        <div className="centered-content">
          <img
            src="/image/ear2.png"
            alt="Right Earbud"
            className="earbud-right"
            style={{
              transform: `translate(50%, calc(-50% - ${scrollPosition * 0.2}px))`,
              marginTop: '-70px',
              marginLeft: '80px'
            }}
          />
          <h1 className="heading-text">Cut the Cords, Keep the Quality</h1>
          <img
            src="/image/ear1.png"
            alt="Left Earbud"
            className="earbud-left"
            style={{
              transform: `translate(-50%, calc(50% + ${scrollPosition * 0.2}px))`,
              marginTop: '-120px',
              marginLeft: '120px'
            }}
          />
        </div>
      </div>

    
      <div className="parallax-section second-section" style={{
        background: 'black',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}>
        <h1 className="heading-text" style={{
          fontSize: '5rem',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 2,
          display: 'inline-block',
          margin: '0',
          color: 'white',
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
        }}>
          Immerse Yourself in
          <span style={{
            position: 'relative',
            display: 'inline-block',
            zIndex: 2,
            color: 'white'
          }}>
            Pure Audio Bliss
          </span>
        </h1>
        
        <img
          src="/image/headset7.png"
          alt="Headset"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translateY(${scrollPosition * 0.15}px)`,
            width: '300px',
            height: 'auto',
            zIndex: 1,
            marginTop: '-70px'
          }}
        />
      </div>

      {/* Slider Section */}
      <div className="slider-section" style={{ background: 'white', width: '80vw', height: '100vh', marginLeft: '-470px', transform: `translate(50%, calc(-50% - ${scrollPosition * 0.2}px))`, marginTop: '700px' }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
          <h1 style={{marginLeft:'470px'}}>PinkPaws Headset</h1>
            <img className="slide-image" src="/image/headset1.png" alt="Headset 1" />
          </SwiperSlide>
          <SwiperSlide>
          <h1 style={{marginLeft:'520px'}}>AquaTone</h1>
            <img className="slide-image" src="/image/headset2.png" alt="Headset 2" />
          </SwiperSlide>
          <SwiperSlide>
          <h1 style={{marginLeft:'510px'}}>CattitudeSound</h1>
            <img className="slide-image" src="/image/headset3.png" alt="Headset 3" />
          </SwiperSlide>
          <SwiperSlide>
          <h1 style={{marginLeft:'510px'}}>OceanSound</h1>
            <img className="slide-image" style={{ height: '385px' }} src="/image/headset4.png" alt="Headset 4" />
          </SwiperSlide>
          <SwiperSlide>
          <h1 style={{marginLeft:'560px'}}>PurpleHaze</h1>
            <img className="slide-image" src="/image/headset5.png" alt="Headset 5" />
          </SwiperSlide>
          <SwiperSlide>
             <h1 style={{marginLeft:'510px'}}>SunbeamSound</h1>
            <img className="slide-image" src="/image/headset6.png" alt="Headset 6" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Last Section with Parallax Effect */}
      <div className="last-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '100px',
          marginTop: '-600px',
          marginLeft:'-300px'
          
      }}>
          <div className="content" style={{
              transform: `translateX(${scrollPosition * 0.05}px)`, // Subtle movement left to right
              transition: 'transform 0.3s ease-out',
              color: 'white',
              maxWidth: '50%',
              paddingLeft:'200px'
          }}>
              <h1 style={{
                  fontSize: '60px',
                  fontWeight: 900,
                  marginBottom: '20px'
              }}>Premium Audio Gear</h1>
              <p style={{
                  fontSize: '30px',
                  fontWeight: 500
              }}>
                  Crafted for true audiophiles, our premium audio gear brings out the best in every genre. With cutting-edge technology and a comfortable fit, these headsets deliver clarity, depth, and pure enjoyment.
              </p>
          </div>

          <img src="/image/bgimage1.png" alt="Audio Gear" style={{
              width: '500px',
              height: '600px',
              marginTop:'-150px',
              transform: `translateY(${scrollPosition * 0.05}px)`, // Subtle movement bottom to top
              transition: 'transform 0.3s ease-out'
          }} />
      </div>

      {/* CSS */}
      <style>{`
        .parallax-section {
          position: relative;
          height: 100vh;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          overflow: hidden;
        }
        .first-section {
          background: url('/image/background1.avif') no-repeat center center;
          background-size: cover;
        }
        .second-section {
          background: url('/image/background2.avif') no-repeat center center;
          background-size: cover;
        }
        .centered-content {
          position: relative;
          text-align: center;
        }
        .heading-text {
          font-size: 65px;
          font-weight: 900;
          color: white;
          z-index: 1;
          margin: 0;
          padding: 20px;
        }
        .earbud-right, .earbud-left {
          position: absolute;
          width: 200px;
          transition: transform 0.3s ease;
        }
        .earbud-right {
          right: -200px;
          animation: moveEar2 2s ease-out forwards;
        }
        .earbud-left {
          left: -200px;
          animation: moveEar1 2s ease-out forwards;
        }
        .headset-image {
          width: 300px;
          height: auto;
          animation: fadeInUp 2s ease-out;
        }
        .slider-section {
          background: url(/image/background-slider.avif) no-repeat center center;
          background-size: cover;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper_container .slide-image {
          width: 400px;
          height: 400px;
          object-fit: cover;
          margin-left: 400px;
          transition: transform 0.3s ease;
        }
        @keyframes moveEar1 {
          from { left: -200px; top: 50%; }
          to { left: 50%; top: 50%; }
        }
        @keyframes moveEar2 {
          from { right: -200px; top: 50%; }
          to { right: 50%; top: 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Pageone;


