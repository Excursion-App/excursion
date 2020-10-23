/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import '../views/MultipleImages.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    name: 'Eiffel Tower, Paris',
    url: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=426&q=80',
  },
  {
    name: 'Chichén itzá, Mexico',
    url: 'https://images.unsplash.com/photo-1597992690332-1e582e5e14da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=426&q=60',
  },
  {
    name: 'Sydney Opera House, Australia',
    url: 'https://images.unsplash.com/photo-1506547474843-a4734aa009e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=426&q=60',
  },
  {
    name: 'River Nile, Sudan',
    url: 'https://images.unsplash.com/photo-1581922814484-0b48460b7010?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&h=426&q=60',
  },
  {
    name: 'Island of Labadee, Haiti, Labadee',
    url: 'https://images.unsplash.com/photo-1554759068-c560c4563912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=426&q=80',
  },
  {
    name: 'Tsavo East National Park Kenya, Africa, Kenya',
    url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=426&q=80',
  },
];


class MultipleImages extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
    };
    return (
      <div className="slider-images">
        <Slider {...settings}>
          {photos.map((photo) => (
            <div className="contains-image">
              <img src={photo.url} alt="top destinations" width="90%" className="destination-images" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default MultipleImages;
