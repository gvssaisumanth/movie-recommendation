import React from 'react';

import {Card,Icon} from 'semantic-ui-react'




class MovieCard extends React.Component{

    constructor() {
        super();
        this.state = {
            Title:"Movie Title",
            ReleaseDate:'',
            Summary:'',
            likes:0

        };
      }

    render(){
       return( 
        <div>
        <Card>
            {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
            <Card.Content>
            <Card.Header>{this.state.Title} {this.props.Id}</Card.Header>
            <Card.Meta>
                <span className='date'>Released in {this.state.ReleaseDate}</span>
            </Card.Meta>
            <Card.Description>
                
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                this.state.likes
            </a>
            </Card.Content>
    </Card>
  </div> )
    }

}


export default MovieCard
