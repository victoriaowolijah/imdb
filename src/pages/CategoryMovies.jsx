import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import { Box, styled, Typography } from '@mui/material';
import { categoryMovies } from '../services/api';
import Carousel from 'react-multi-carousel';
import { POPULAR_API_URL, TOPRATED_API_URL, UPCOMING_API_URL, movieType } from '../constants/constant';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1 ,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    }
  };

  const StyledBanner = styled('img')({
    height: 450,
    width: '100%',
  });

  const Component = styled(Box)({
    width : '80%',
    margin : 'auto',
});



const CategoryMovies = () => {
    const [movies, setMovies] = useState([]);

    const {search} = useLocation();

    useEffect(() => {
        const getData = async (API_URL) => {
            let response = await categoryMovies(API_URL);
            setMovies (response.results); 
        }

        let API_URL;

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        } else if (search.includes('upcoming')){
            API_URL = UPCOMING_API_URL;
        }

        getData(API_URL);
    }, [search])

  return (
    <>

     <Header/>
     <Component>
     <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
        >

            {
                movies.map(movie =>(
                    <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
                ))
            }    
        </Carousel>
        <Box>
            <Typography>IMDB Charts</Typography>
            <Typography>IMDB{movieType[search.split('=')[1]]}Movies</Typography>
        </Box>

     </Component>
      
    </> 
  )
}

export default CategoryMovies
