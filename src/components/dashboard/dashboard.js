import React from 'react';
import NoteForm from "../notecreate-form/notecreate-form";
import uuid from 'uuid/v4';
import NoteItem from '../note-item/note-item';
import NoteList from '../note-list/note-list';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.notes = [];

    }

    handleAddNote =(note)=> {
        // Vinicio - over here, I'm going to assume the expense is coming with
        // a title and a price
        note.createdOn = new Date();
        note.id = uuid();
        return this.setState((previousState) => {
            return {
                notes: [...previousState.notes, note],
            };
        });
    };

    handleRemoveNote = (note)=> {
        console.log(this);
        console.log('Calling the callback');
        return this.setState((previousState) => {
            const filtered = previousState.notes.filter((item) => {
                return item.id !== note.id;
            });
            return {
                notes: filtered,
                error: null,
            };
        });
    };
    //
    // handleUpdateNote = (note) =>{
    //     this.setState({note}) => ({
    //         note: [
    //             ...note.slice(0,1),
    //     }
    //         ...note[1],
    //         name: 'newName',
    // },
    //         ]
    //     });
    // };

    render() {
        return (
            <section>
                <h2>Dashboard</h2>
                <p>Add new Note</p>
                <NoteForm handleAddNote={this.handleAddNote}/>
                <NoteList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote}/>
                {/*<NoteList notes={this.state.notes} handleUpdateNote={this.handleUpdateNote}/>*/}

            </section>
        );
    }
}

export default Dashboard;

