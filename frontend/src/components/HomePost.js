import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';


export default class HomePost extends Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {
        return (
            <div className={this.props.post.carmake_id}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                        <img className="card-img-top" src={this.props.post.image ? this.props.post.image.url : ""} alt="Post image"></img>
                        <div className="card-body">
                            <h3 className="card-title">Title: {this.props.post.title}</h3>
                            <h5 >Price: ${this.props.post.price}</h5>
                            <button className="btn btn-info btn-block" onClick={this.handleClick}>Description</button>
                        </div>
                    </div>
                    <div>
                        <h3 class="card-header hah" style={{ background: "burlywood" }}>Title: {this.props.post.title}</h3>
                        <div className="card-body" style={{ background: " #fff9e6" }}>
                            <h3>Price: ${this.props.post.price} </h3>
                            <p className="card-text">{this.props.post.description}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Email: {this.props.post.user.email}</li>
                                <li class="list-group-item">Phone #: {this.props.post.user.phone_number}</li>
                            </ul>
                            <div class="card-footer text-muted">
                                <button className="btn btn-info btn-block" onClick={this.handleClick}>Back to post</button>
                            </div>
                        </div>
                    </div>

                </ReactCardFlip>
            </div>

        )
    }
}