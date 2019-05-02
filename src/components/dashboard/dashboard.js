import React from 'react';
import NoteForm from "../notecreate-form/notecreate-form";
import uuid from 'uuid/v4';
import NoteList from '../note-list/note-list';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.notes = [];

    }

    handleAddNote = (note) => {
        note.createdOn = new Date();
        note.id = uuid();
        return this.setState((previousState) => {
            return {
                notes: [...previousState.notes, note],
            };
        });
    };

    handleUpdate = (note) =>{
        return this.setState((previousState) =>{
            return { notes: previousState.notes.map((item) =>{
                if(item.id === note.id){
                    item.id = note;
                }
                return note;
                }),
            }
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

    render() {
        return (
            <section>
                <h2>Dashboard</h2>
                <p>Add new Note</p>
                <NoteForm handleAddNote={this.handleAddNote}/>
                <NoteList notes={this.state.notes}
                          handleRemoveNote={this.handleRemoveNote}
                          handleUpdate ={this.handleUpdate}/>
            </section>
        );
    }
}

export default Dashboard;

