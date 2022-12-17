import React, { Component } from 'react'
import Filter from '../../Common/Filters/Filter';
import ReleasedMovies from '../../Common/FlexContainer/ReleasedMovies';
import Header from '../../Common/Header/Header';
import StandardImageList from '../../Common/UpcomingMoviesGrid/UpcomingMovieCard';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='subHeading'>
                    <span>Upcoming Movies</span>
                </div>
                <StandardImageList/>
                <div className='flex-container'>
                    <div className='releasedMovies'>
                        <ReleasedMovies className='movieCardRelased'/>
                    </div>
                    <div className='filters'>
                            <Filter/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
