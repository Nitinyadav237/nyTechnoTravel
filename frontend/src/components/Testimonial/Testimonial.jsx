import React from 'react'
import Slider from 'react-slick'
import ava1 from "../../assets/images/ava-1.webp"
import ava2 from "../../assets/images/ava-2.webp"
import ava3 from "../../assets/images/ava-3.webp"

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                },
            },
        ]
  }
    return (
      <>
          <Slider {...settings}>
              <div className="testimonial py-4 px-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                  <div className="d-flex align_items-center gap-4 mt-3">
                      <img src={ava1}
                      className='w-25 h-25 rounded-2'
                          alt="" />
                      <div>
                          <h6 className="mb-0 mt-3">John Doe</h6>
                      <p>Customer</p>
                      </div>
                  </div>
                </div>
                
                <div className="testimonial py-4 px-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                  <div className="d-flex align_items-center gap-4 mt-3">
                      <img src={ava2}
                      className='w-25 h-25 rounded-2'
                          alt="" />
                      <div>
                          <h6 className="mb-0 mt-3">Lis Franklin</h6>
                      <p>Customer</p>
                      </div>
                  </div>
                </div>
                
                <div className="testimonial py-4 px-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                  <div className="d-flex align_items-center gap-4 mt-3">
                      <img src={ava3}
                      className='w-25 h-25 rounded-2'
                          alt="" />
                      <div>
                          <h6 className="mb-0 mt-3">John Doe</h6>
                      <p>Customer</p>
                      </div>
                  </div>
                </div>
                
                <div className="testimonial py-4 px-3">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                  <div className="d-flex align_items-center gap-4 mt-3">
                      <img src={ava2}
                      className='w-25 h-25 rounded-2'
                          alt="" />
                      <div>
                          <h6 className="mb-0 mt-3">Lis Franklin</h6>
                      <p>Customer</p>
                      </div>
                  </div>
              </div>
          </Slider>
    </>
  )
}

export default Testimonial