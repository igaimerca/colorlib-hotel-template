import { useState, useRef, useEffect } from 'react';
import { GiTreasureMap } from 'react-icons/gi';
import { GiPalmTree } from 'react-icons/gi';
import { FcGlobe } from 'react-icons/fc';
import { GiCommercialAirplane } from 'react-icons/gi';
import { GiWalk } from 'react-icons/gi';
import { RiSuitcase2Line } from 'react-icons/ri';
import Button from '../../components/Button/Button';
import ServicesCard from './ServicesCard';
import './OurServices.styles.scss';

const services = [
  { title: 'Trekking', icon: <GiWalk className='icon' /> },
  { title: 'The World Map', icon: <GiTreasureMap className='icon' /> },
  { title: 'Suitcase', icon: <RiSuitcase2Line className='icon' /> },
  { title: 'Island Hoping', icon: <GiPalmTree className='icon' /> },
  { title: 'World Round', icon: <FcGlobe className='icon' /> },
  {
    title: 'Travel with Plane',
    icon: <GiCommercialAirplane className='icon' />,
  },
];

const OurServices = () => {
  const [nav, setNav] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [outerWidth, setOuterWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [reverse, setReverse] = useState(0);
  const showPrev = reverse;
  const showNext = nav + outerWidth < totalWidth;
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    setTotalWidth(ref1.current.clientWidth);
    setOuterWidth(ref2.current.clientWidth);
    setCardWidth(ref3.current.clientWidth);
  }, []);

  const handleNextOnClick = () => {
    if (nav >= cardWidth * 5) {
      return setNav(cardWidth * 5 + 16);
    }
    if (showNext) {
      setNav(nav + cardWidth);
      setReverse((prevS) => prevS + 1);
    }
  };

  const handlePrevOnClick = () => {
    if (showPrev) {
      setNav(nav - cardWidth);
      setReverse((prevS) => prevS - 1);
    }
  };

  return (
    <div className='our-services'>
      <h2 className='our-services-header'>OUR SERVICES</h2>
      <div ref={ref2} className='our-services-carousel-container'>
        <div
          ref={ref1}
          className='carousel'
          style={{
            transform: `translateX(-${nav}px)`,
          }}
        >
          {services.map(({ title, icon }) => (
            <ServicesCard key={title} title={title} icon={icon} ref3={ref3} />
          ))}
        </div>
        <div className='nav-btn'>
          <Button onClick={handlePrevOnClick} showBtn={showPrev}>
            Prev
          </Button>
          <Button onClick={handleNextOnClick} showBtn={showNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
