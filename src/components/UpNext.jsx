import React from 'react';
import {Box, Typography, styled} from '@mui/material';

const Component = styled (Box)` 
width: 40%;
display: flex;
flex-direction: column;
align-items:baseline;
padding-left:10px;
padding-top:35px;
& > p {
    color: #F5C518;
    padding-left:15px;
    font-weight:600;
    font-size: 18px;
    margin-bottom: 10px;    
}
`;

const Poster = styled ('img') ({
 width: 100,
 height: 95,
})

const Wrapper = styled(Box)`
color: #FFFFFF;
display:flex;
& > p {
    margin-left: 20px;
}
`



const UpNext = ({movies}) => {
  return (
    <Component >
        <Typography>Up Next</Typography>
        {
                movies.splice(0,3).map(movie =>(
                    < Wrapper>
                        <Poster src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="poster" />
                        <Typography>{movie.original_title}</Typography>
                    </ Wrapper>
                ))
        }    
      
    </Component >
  )
}

export default UpNext
