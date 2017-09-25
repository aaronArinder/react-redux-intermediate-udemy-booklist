import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

const mapStateToProps = state => {
  return { books: state.books };
};

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever SelectBook is called, it should be passed to all reducers
  return bindActionCreators({ selectBook }, dispatch);
}

//whatever gets returned to the above function gets passed as BookList props;
//also, promotes BookList from component to container--needs to know about this
//new dispatch method SelectBook.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//takes a function and component and produces a container

//Why 'upgrade' BookList to a container? It's connected to our state manager because
//it prints out a (potentially) dynamic list of books, whereas other components
//don't need that sort of access to the state.
