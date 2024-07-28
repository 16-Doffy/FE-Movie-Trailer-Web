import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import { useState } from "react";
import YouTube from "react-youtube";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };  
      const MovieList = ({ title, data }) => {
        const [modalIsOpen, setModalIsOpen] = useState(false);
        const[trailerKey,setTrailerKey] =useState("");

        const handleTrailer = async (id) => {
           setTrailerKey('');
          try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
              },
            };
            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            setTrailerKey(data.results[0].key)
            setModalIsOpen(true)

          } catch (error) {
            setModalIsOpen(false)
            console.log(error);
          }
        };  //khi click vào hàm thì sẽ show modal hiện trailer
        return (
            <div className="text-white p-10 mb-10">
              <h2 className="uppercase text-xl mb-4">{title}</h2>
              <Carousel responsive={responsive} className="flex items-center space-x-4">
                {data.length > 0 &&
                  data.map((item) => (
                    <div key={item.id} className="movie-item" onClick={() => handleTrailer(item.id)}>
                      <div className="movie-image-container">
                        <div className="movie-image-overlay" />
                        <img
                          src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                          alt={item.title}
                          className="movie-image"
                        />
                        <div className="absolute bottom-4 left-2"></div>
                        <p className="uppercase text-md">
                          {item.title || item.origin.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </Carousel>
      <Modal
        isOpen={modalIsOpen} //thêm biến )usestate
        onRequestClose={()=> setModalIsOpen(false)}
        style={{
            overlay:{
                position:"fixed",
                zIndex:9999,
            },
            content:{
                top:"50%",
                left:"50%",
                right:"auto",
                bottom:"auto",
                marginRight:"-50%",
                transform:"translate(-50%,-50%",
            },
        }}
        contentLabel="Example Modal"
      > 
       <YouTube videoId={trailerKey} opts={opts} />;
      
      </Modal>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default MovieList;
