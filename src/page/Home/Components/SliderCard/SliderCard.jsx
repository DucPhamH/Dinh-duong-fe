import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CardItem from '../../../../components/CardItem/CardItem'
import useQueryParams from '../../../../hooks/useQueryParam'
import { useQuery } from '@tanstack/react-query'
import { getFoods } from '../../../../apis/products.api'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'orange',
        borderRadius: '9999px',
        width: '40px',
        height: '40px',
        zIndex: '2',
        marginLeft: '60px'
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'orange',
        borderRadius: '9999px',
        width: '40px',
        height: '40px',
        zIndex: '2',
        right: '-40px'
      }}
      onClick={onClick}
    />
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: 'linear'
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
export default function SliderCard() {
  const queryParams = useQueryParams()

  const { data: foodsData } = useQuery({
    queryKey: ['foods', queryParams],
    queryFn: () => {
      return getFoods(queryParams)
    }
  })
  const foods = foodsData?.data
  console.log(foods)
  return (
    <Slider {...settings}>
      {foods &&
        foods.slice(0, 6).map((food) => (
          <div key={food.id}>
            <CardItem food={food} />
          </div>
        ))}
    </Slider>
  )
}
