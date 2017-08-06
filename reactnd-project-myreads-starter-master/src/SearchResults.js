import React from 'react'
import './App.css'
import ReadOptions from './ReadOptions'
import * as BooksAPI from './BooksAPI'


class SearchResults extends React.Component {
    state = {
      data: '',
      query: this.props.query
    }

    shouldComponentUpdate = (nextProps, nextState) => {
      return this.state.query !== nextProps.query;
    }

    componentWillUpdate = (nextProps, nextState) => {
      // perform any preparations for an upcoming update
      let searchResponse;
      let fnlResponse;
      let getAllResponse;
      const newQuery = nextProps.query
      if (nextProps.query !== nextState.query) {
        BooksAPI.search(newQuery, 20).then(response => {
          console.log('Response from SearchResults: ' + response)
          searchResponse = response !== undefined ? response : []
          BooksAPI.getAll().then(response => {
            console.log('Value retained from previous call: ' + searchResponse)
            getAllResponse = response !== undefined ? response : [];
            fnlResponse = searchResponse.map(function(e) {
              for (let i = 0; i < response.length; i++) {
                if (e.id === response[i].id) {
                  return response[i]
                }
              }
              e.shelf = 'none'
              return e
            })
            this.setState({
              query: newQuery,
              data: fnlResponse
            })
          })
        })
      }
    }



    render() {
      return (
        <div className = "search-books-results" >
        <ol className = "books-grid" >
        { this.state.data.length !== 0 ? this.state.data.map((book) => (
          <li key = { book.id}>
            <div className = "book" >
            <div className = "book-top" >
            <div className = "book-cover"
            style = {
              {
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }
            } >
            </div>
            <ReadOptions book = {book}
            cRflag = {
              book.shelf === 'currentlyReading' ? true : false
            }
            wRflag = {
              book.shelf === 'wantToRead' ? true : false
            }
            rflag = {
              book.shelf === 'read' ? true : false
            }
            noneFlag = {
              book.shelf === 'none' ? true : false
            }
            optionValue = {
              book.shelf
            }

            params = 'search' />
            </div >
            <div className = "book-title" > { book.title }
            </div>
            </div >
            </li>
          )) : < div > No data matches your criteria < /div>} < /ol > <
          /div>
        )
      }
    }

    export default SearchResults;
