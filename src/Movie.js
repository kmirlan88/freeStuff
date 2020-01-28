import React, {Component} from 'react'

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            rows: []
          }
       
    }

    searchChangeHandler = (event) => {
        this.performSearch(event.target.value);
      }
   

    performSearch(searchTerm) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=4de3f13a4cdd05831b95a97d3b3e2da6&query=${searchTerm}`
        fetch(url)
        .then((data) => data.json())
        .then(response => {
            let movies = response.results;

            var movieRows = [];
            movies.forEach((movie) => {
            const movieRow = <div key={movie.id}>
                                {movie.title}
                                <br></br>
                                <img alt="poster" src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}></img>
                            </div>
            movieRows.push(movieRow)    
        })
        this.setState ({ rows: movieRows})
        })
        .catch(error => {
            console.error('Error coming from API:   ', error)
        })
      }
   

    render() {
        return (
           <div>
               <h1>Movie Search</h1>
               <input id="inputField"
                   onChange={this.searchChangeHandler} 
                   placeholder="Enter your movie">
                </input>

               {this.state.rows}
           </div>
        );
     }
     
}

export default Movie;