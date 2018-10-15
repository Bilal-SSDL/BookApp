import React, {Component} from 'react';
import { connect } from 'react-redux';
import { SelectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; 
class BookList extends Component {
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                  key={book.title}
                  onClick={ () =>  this.props.selectBook(book)}
                  className="list-group-item"> {book.title}</li>
            );
        });
    }
    
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

  

}
function mapStateToProps(state) {
        // whatever is returned will show up as props inside of book List
    return {
           books: state.books
    };
}
//Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
   // whenever selectbook is called, the result should be passed to all of our reducers

   return bindActionCreators( {selectBook: SelectBook}, dispatch );
}
// Promote Booklist from a component to a container - it needs to know 
// about this new dispatch method, selectBook. make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList);