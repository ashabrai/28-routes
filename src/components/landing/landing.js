import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import NoteItem from "../note-item/note-item";

class Landing extends React.Component {
        render(){

            return (
                <div>
                    <h3>Note Taker</h3>
                    <p>Simple app, for submitting notes, remove and updating.
                        head to the dashboard link to get started.</p>
                </div>
            );
        }
    }

    Landing.propTypes = {
    setRedirect: PropTypes.func,
    renderRedirect: PropTypes.func,
};

export default Landing;
