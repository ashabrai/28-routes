import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';

class NoteCreateList extends React.Component {
    render() {
        return (
            <ul>
                {
                    // this.props.notes.length > 0
                    //     ?

                this.props.notes.map((note) => {
                    return <NoteItem key={note.id}
                            note={note}
                            handleRemoveNote={this.props.handleRemoveNote}
                            handleUpdate={this.props.handleUpdate}
                            // handleAddNote={this.props.handleUpdate}
                            />;
                     })
                }
            </ul>
        );
    }
}

NoteCreateList.propTypes = {
    notes: PropTypes.array,
    handleRemoveNote: PropTypes.func,
    handleUpdate: PropTypes.func,
    // handleAddNote: PropTypes.func,

};

export default NoteCreateList;
