import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class ReadOptions extends React.Component {

  state = {
    book: this.props.book,
    newValue:this.props.optionValue,
    cRflag:this.props.cRflag,
    wRflag: this.props.wRflag,
    rflag: this.props.rflag,
    noneFlag:this.props.noneFlag
  }

  handleChange = (event) => {
    let prevVal = this.props.optionValue
    let newVal = event.target.value
    let bookDetails = this.state.book

    let routeParams = this.props.params

    BooksAPI.update(bookDetails, newVal).then(response => {
      if(routeParams.indexOf('search') < 0){
           window.location.href = '/'
      }else{
        this.setState({
          book:bookDetails,
          newValue:newVal,
          cRflag:newVal === 'currentlyReading'?true:false,
          wRflag: newVal === 'wantToRead'?true:false,
          rflag: newVal === 'read'?true:false,
          noneFlag:newVal === 'none'?true:false
        })
      }
    });
  }
  render() {
    let optionVal = this.state.newValue;
    switch (optionVal) {
      case 'currentlyReading':
        optionVal = < option value = 'currentlyReading'
        disabled > Currently Reading < /option>
        break;
      case 'wantToRead':
        optionVal = < option value = 'wantToRead'
        disabled > Want To Read < /option>
        break;
      case 'read':
        optionVal = < option value = 'read'
        disabled > Read < /option>
        break;
      case 'none':
        optionVal = < option value = 'none'
        disabled > None < /option>
        break;

    }
    return (
      <div className = "book-shelf-changer" >
      <select onChange = { (e) => this.handleChange(e) } value = {this.state.newValue}>
        {optionVal} {this.state.cRflag === true ? '' : <
          option value = "currentlyReading" >
          Currently Reading < /option>
      } {
        this.state.wRflag === true ? '' : <
          option value = "wantToRead" > Want to Read < /option>
      } {
        this.state.rflag === true ? '' : <
          option value = "read" > Read < /option >
      } {
        this.state.noneFlag === true ? '' : <
          option value = "none" > None < /option >
      }< /
      select > <
      /div>
    )
  }

}

export default ReadOptions
