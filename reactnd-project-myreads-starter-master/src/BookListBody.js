import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BookListBody extends Component{
  state = {
    showSearchPage: false,
    bookDetails:[]
  }



  updateStatus(bookDetails, event, state){
      BooksAPI.update(bookDetails, event).then(bookDetails => {
         window.location.href = '/'

    })
  }


  render(){
    return(
      <li key={this.props.bookDetails.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.bookDetails.imageLinks.smallThumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select value={this.props.bookDetails.shelf}
              onChange={ (e) => {this.updateStatus(this.props.bookDetails, e.target.value, this.state.showSearchPage)}}>

              <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookDetails.title}</div>
          <div className="book-authors">{this.props.bookDetails.authors[0]}</div>
        </div>
      </li>
    )
  }
}
export default BookListBody
