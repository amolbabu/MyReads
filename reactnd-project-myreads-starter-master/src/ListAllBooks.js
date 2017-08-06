import React, { Component } from 'react'
import BookListBody from './BookListBody.js'
class ListBook extends Component {
  render(){
    return(
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {this.props.bookDetails.filter(bookDetails => bookDetails.shelf==='currentlyReading').map((bookDetails)=>(
              <BookListBody bookDetails={bookDetails} />
            )
            )}
            </ol>
            </div>
          </div>
          <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                              {this.props.bookDetails.filter(bookDetails => bookDetails.shelf==='wantToRead').map((bookDetails)=>(
                                <BookListBody bookDetails={bookDetails} />
                              )
                              )}
                              </ol>
                            </div>
                          </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.bookDetails.filter(bookDetails => bookDetails.shelf==='read').map((bookDetails)=>(
                      <BookListBody bookDetails={bookDetails} />
                    )
                    )}
                    </ol>
                  </div>
                </div>
          </div>
    )
  }
}
export default ListBook
