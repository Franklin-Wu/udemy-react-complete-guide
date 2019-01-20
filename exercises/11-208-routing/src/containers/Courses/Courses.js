import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <Switch>
                    {
                        this.state.courses.map( course => {
                            return (
                                <Route
                                    path={this.props.match.url + '/Course/:id'}
                                    component={Course}
                                    key={course.id}
                                />
                            )
                        })
                    }
                    <Route render={() => {
                        return (
                            <section className='Courses'>
                                {
                                    this.state.courses.map( course => {
                                        return (
                                            <div key={course.id}>
                                                <article className='Courses'>
                                                    <Link to={{
                                                            pathname: this.props.match.url + '/Course/' + course.id,
                                                            search: 'title=' + course.title,
                                                        }}>
                                                        {course.title}
                                                    </Link>
                                                </article>
                                            </div>
                                        );
                                    })
                                }
                            </section>
                        )
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default Courses;