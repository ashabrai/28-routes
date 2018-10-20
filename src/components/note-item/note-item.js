import React from 'react';
import PropTypes from 'prop-types';
import NoteCreateForm from '../notecreate-form/notecreate-form';
import Dashboard from '../dashboard/dashboard';

class NoteItem extends React.Component {
    render(){
        const { title, body } = this.props.note;
        return (
            <li>
            {title} : {body}
            <button onClick = {this.props.handleRemoveNote.bind(null,this.props.note)}>
                Delete Note</button>
                {/*<button onClick ={this.props.handleUpdateNote.bind(null,this.props.note)}>Update Note</button>*/}
        <NoteCreateForm note ={this.props.note}/>
            </li>
        )
    }
}

NoteItem.propTypes = {
    note:PropTypes.object,
    handleRemoveNote: PropTypes.func,
};
export default NoteItem;
