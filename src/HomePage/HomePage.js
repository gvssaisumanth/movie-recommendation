import React from 'react';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react'
import './HomePage.css'

class HomePage extends React.Component {
    movieList = [...Array(10).keys()]

    render() {
        return (
            <div>
                <div className='margin description'>
                    <div className='description-text1'>Where quality & Clarity Matters</div>
                    <div className='description-text2'>Watch or download telugu movies in an excellent quality at the smallest file size. Exclusively designed and developed for smartphones, tablets and PCs </div>
                    <div className='description-text2'>Remove the browser cache and reload</div>
                </div>
                <div className="moviegrid">
                    {this.movieList.map((e, i) => {
                        return (
                            <MovieCard Id={i} />
                        )
                    })}
                </div>
            </div>


        )




    }
}
export default HomePage