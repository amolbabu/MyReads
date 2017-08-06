import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchResults from './SearchResults'
import {Link} from 'react-router-dom'

class Search extends React.Component {

  state = {
    data: this.props.data,
    query: ''
  }

  updateSearch = (query) => {
    this.setState({query:query})
  }

  render() {
    console.log('Render: ' + this.state.query)
    return (
      <div className = "search-books" >
      <div className = "search-books-bar" >
      <Link to="/" className = "close-search"> Close </Link>
      <div className = "search-books-input-wrapper" >
         <input type = "text" placeholder = "Search by title or author"
           value={this.state.query}
           onChange={event => this.updateSearch(event.target.value)}/>
      </div>
      </div>
      <SearchResults query={this.state.query}/>
    </div>
    )
  }
}

export default Search;
