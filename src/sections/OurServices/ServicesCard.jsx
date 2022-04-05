import './servicesCard.styles.scss';

const ServicesCard = ({ title, icon, ref3 }) => {
  return (
    <div ref={ref3} className='carousel-item'>
      {icon}
      <h5 className='carousel-item-header'>{title}</h5>
      <div className='carousel-item-body'>
        <p className='carousel-item-body-text'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p className='carousel-item-body-footer anchor'>Learn More</p>
      </div>
    </div>
  );
};

export default ServicesCard;
