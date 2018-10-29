import React from 'react';
import PropTypes from 'prop-types';
import NoteCreateForm from '../notecreate-form/notecreate-form';

class NoteItem extends React.Component {
    render(){
        const { title, body } = this.props.note;
        return (
            <li>
            {title} : {body}
            <button onClick = {this.props.handleRemoveNote.bind(null,this.props.note)}>
                Delete Note</button>
        <NoteCreateForm note={this.props.note} handleAddNote={this.props.handleUpdate}>
            <button onClick ={this.props.handleUpdate}> Update note</button>
        </NoteCreateForm>

            </li>
        );
    }
}

NoteItem.propTypes = {
    note:PropTypes.object,
    handleRemoveNote: PropTypes.func,
    handleUpdate: PropTypes.func,
    handleAddNote: PropTypes.func,
};
export default NoteItem;
