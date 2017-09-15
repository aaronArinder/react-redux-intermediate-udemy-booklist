import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
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

//whatever gets returned to the above function gets passed as BookList props

export default connect(mapStateToProps)(BookList);

//takes a function and component and produces a container

//Why 'upgrade' BookList to a container? It's connected to our state manager because
//it prints out a (potentially) dynamic list of books, whereas other components
//don't need that sort of access to the state.
