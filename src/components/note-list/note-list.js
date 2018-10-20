import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';

class NoteCreateList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.notes.length > 0
                        ?
                        <ul className='noteList'>
                            {
                                this.props.notes.map((note) => {
                                    return (
                                        <li key={note.id}>
                                            <NoteItem note={note} handleRemoveNote={this.props.handleRemoveNote}/>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        :
                        <h3>Notes listed here</h3>
                }
            </div>
        )
    }
}

NoteCreateList.propTypes = {
    key: PropTypes.object,
    notes: PropTypes.object,
};

export default NoteCreateList;
