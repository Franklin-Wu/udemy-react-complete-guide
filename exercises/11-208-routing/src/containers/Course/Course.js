import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log(this);
        const urlSearchParams = new URLSearchParams(this.props.location.search);
        const title = urlSearchParams.get('title');
        const text = title ? title : 'Title not available' 
        return (
            <div>
                <h1>{text}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;