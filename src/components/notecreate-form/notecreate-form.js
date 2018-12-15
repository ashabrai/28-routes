import React from 'react';
import PropTypes from 'prop-types';

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };
        // this.state = this.props.note ? this.props.note : emptyState;
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        this.setState({
            [name]: value,

        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNote(this.state);
    };


    render() {
        const buttonText = this.props.note ? 'Update' : 'Create';
        return (
        <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <textarea
                name="body"
                placeholder="enter note here"
                onChange={this.handleChange}
                value={this.state.body}
            />
            <button type="submit">{buttonText} Note</button>
        </form>
        );
    }
}

NoteCreateForm.propTypes = {
    handleAddNote : PropTypes.func,
    note: PropTypes.object,
};


export default NoteCreateForm;
