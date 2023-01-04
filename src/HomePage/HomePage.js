import React from 'react';
import MovieCard from './MovieCard';
import { Container } from 'semantic-ui-react';
import './HomePage.css'

class HomePage extends React.Component {
    movieList = [...Array(10).keys()]

    render() {
        return (


            <div className='home'>
                {/* <div className='margin description'>
                    <div className='description-text1'>Where quality & Clarity Matters</div>
                    <div className='description-text2'>Watch or download telugu movies in an excellent quality at the smallest file size. Exclusively designed and developed for smartphones, tablets and PCs </div>
                    <div className='description-text2'>Remove the browser cache and reload</div>
                </div> */}
                <div >
                    {this.movieList.map((e, i) => {
                        return (
                            <MovieCard Id={i} />
                        )
                    })}
                </div>
                <div >
                    Where are you printing...
                </div>
            </div>


        )




    }
}
export default HomePage