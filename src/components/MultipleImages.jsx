import React from 'react';
import Slider from 'react-slick';
import paris from '../images/paris.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    name: 'Photo 1',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    name: 'Photo 2',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  }, {
    name: 'Photo 3',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  }, {
    name: 'Photo 4',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  }, {
    name: 'Photo 5',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  }, {
    name: 'Photo 6',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  }, {
    name: 'Photo 7',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  }, {
    name: 'Photo 8',
    url: 'https://unsplash.com/photos/KOWfa6aX1E8',
  }, {
    name: 'Photo 9',
    url: 'https://images.unsplash.com/photo-1488904522966-31c76bc83279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
];

function MultipleImages() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'slides',
  };
  return (
    <div className="destination-images">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img width="100%" src={photo.url} alt="seven-wonders-of-the-world" />
            </div>
          );
        })}
        <div>
          <img src={paris} width="240" height="160" alt="eiffel tower" className="destination-images" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}


export default MultipleImages;
