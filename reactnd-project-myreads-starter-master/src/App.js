import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './ListAllBooks.js'
import Search from './Search'
import {Link, Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookDetails:[],
    query: ''
  }


  componentDidMount(){
    console.log("showSearchPage in App "+this.state.showSearchPage);
    BooksAPI.getAll().then((bookDetails) => {
      this.setState({ bookDetails })
    })
  }

// handleChange(event){
//       BooksAPI.search(event.target.value,10).then((books) => {
//     this.setState({ bookDetails: books})
//     })
// }

updateSearch = (query) => {
      this.setState({query:query})
    }

  render() {
    const { query } = this.state
    return (
      <div className="app">
            <Route path="/search" component={Search}/>

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <ListBook bookDetails={this.state.bookDetails}/>
            </div>
            <div className="open-search" >
                 <Link to='/search' className='active'>Add a Book</Link>
              </div>
          </div>
        )}
         </div>
       )
     }
   }

export default BooksApp
