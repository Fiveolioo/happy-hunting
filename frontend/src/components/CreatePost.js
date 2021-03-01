import React, { Component } from 'react'
import { connect } from 'react-redux';
import Posts from '../reducers/Posts';
import newPost from '../actions/NewPost';

import Navbar from './Navbar';
import { withRouter } from "react-router-dom"

class CreatePost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            price: '',
            user_id: null,
            carmake_id: null,
            image: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            user_id: this.props.currentUser.user.id
        })
    }

    handleSelect = (e) => {
        this.setState({
            carmake_id: parseInt(document.querySelector('#carmake_id').value)
        })
    }

    handleImage = event => {
        const formData = new FormData();
        formData.append('image', event.target.files[0])
        this.setState({
            image: event.target.files[0]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('[post]title', this.state.title)
        formData.append('[post]description', this.state.description)
        formData.append('[post]price', this.state.price)
        formData.append('[post]user_id', parseInt(this.state.user_id))
        formData.append('[post]carmake_id', parseInt(this.state.carmake_id))
        formData.append("[post]image", this.state.image)
        // const formData = {
        //     ['[post]title']: this.state.title,
        //     ['[post]description']: this.state.description,
        //     ['[post]price']: this.state.price,
        //     ['[post]user_id']: this.state.user_id,
        //     ['[post]carmake_id']: this.state.carmake_id,
        //     ['[post]image']: this.state.image,
        // }
        this.props.addItem(formData)
        // this.props.addItem(this.state)
    }



    render() {
        return (
            <div>
                {!this.props.currentUser.logged_in ? this.props.history.push('/login') : null}
                <Navbar />
                <div className="container">
                    <div class="d-flex justify-content-center h-100">
                        <div class="card">
                            <div class="card-header">
                                <h3>Create A New Post</h3>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <input class="form-control" onChange={this.handleChange} placeholder="Title" type="text" name="title" /><br />
                                <textarea class="form-control" onChange={this.handleChange} placeholder="Description" name="description" id="" cols="30" rows="10"></textarea><br />
                                <input class="form-control" onChange={this.handleChange} placeholder="Price" type="text" name="price" /><br />
                                <label htmlFor="image"><h5>Upload image:</h5></label>
                                <input class="form-control-file" onChange={this.handleImage} type="file" name="image" accept="image/*" ></input><br />
                                <select class="form-control" onChange={this.handleSelect} id="carmake_id">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="1">Acura</option>
                                    <option value="2">Alfa Romeo</option>
                                    <option value="3">Aston Martin</option>
                                    <option value="4">Audi</option>
                                    <option value="5">Bentley</option>
                                    <option value="6">BMW</option>
                                    <option value="7">Bugatti</option>
                                    <option value="8">Buick</option>
                                    <option value="9">Cadillac</option>
                                    <option value="10">Caterham</option>
                                    <option value="12">Chevrolet</option>
                                    <option value="13">Chrysler</option>
                                    <option value="14">Dodge</option>
                                    <option value="15">Ferrari</option>
                                    <option value="16">Fiat</option>
                                    <option value="17">Ford</option>
                                    <option value="18">GMC</option>
                                    <option value="19">Honda</option>
                                    <option value="20">Hyundai</option>
                                    <option value="21">Infiniti</option>
                                    <option value="22">Jaguar</option>
                                    <option value="23">Jeep</option>
                                    <option value="24">Kia</option>
                                    <option value="25">Lamborghini</option>
                                    <option value="26">Land Rover</option>
                                    <option value="27">Lexus</option>
                                    <option value="28">Lincoln</option>
                                    <option value="29">Lotus</option>
                                    <option value="30">Maserati</option>
                                    <option value="31">Mazda</option>
                                    <option value="32">Mercedes Benz</option>
                                    <option value="33">Mini</option>
                                    <option value="34">Mitsubishi</option>
                                    <option value="35">Nissan</option>
                                    <option value="36">Porsche</option>
                                    <option value="37">Ram Trucks</option>
                                    <option value="38">Rolls Royce</option>
                                    <option value="39">Smart</option>
                                    <option value="40">Subaru</option>
                                    <option value="41">Toyota</option>
                                    <option value="42">Tesla</option>
                                    <option value="43">Volkswagen</option>
                                    <option value="44">Volvo</option>
                                </select><br />
                                <input class="btn btn-primary btn-lg btn-block" type="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
      addItem: (post) => {
        dispatch(newPost(post,ownProps))
      }
    };
   };
   
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePost))

