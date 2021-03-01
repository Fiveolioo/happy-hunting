import React, { Component } from 'react'
import UpdatePost from '../actions/UpdatePost';
import { connect } from 'react-redux';

class EditPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: props.post.id,
            title: props.post.title,
            description: props.post.description,
            price: props.post.price,
            user_id: props.currentUser.user.id,
            carmake_id: props.post.carmake_id,
            images: ''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSelect = (e) => {
        this.setState({
            carmake_id: parseInt(document.querySelector('#carmake_id').value)
        })
    }

    handleImages = event => {
        const formData = new FormData();
        formData.append('images', event.target.files[0])
        this.setState({
            images: event.target.files[0]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("[post]id", this.state.id)
        formData.append('[post]title', this.state.title)
        formData.append('[post]description', this.state.description)
        formData.append('[post]price', this.state.price)
        formData.append('[post]user_id', this.state.user_id)
        formData.append('[post]carmake_id', this.state.carmake_id)
        if (this.state.images !== '') {
            formData.append("[post]image", this.state.images)
        }
        this.props.UpdatePost(formData, this.state.id)
        this.props.closeModal()
    }

    render() {
        const { post } = this.props
        return (
            <div className="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input class="form-control" onChange={this.handleChange} type="text" name="title" value={this.state.title} /><br />
                            <textarea class="form-control" onChange={this.handleChange} placeholder="Description" name="description" id="" cols="30" rows="10" value={this.state.description}></textarea><br />
                            <input class="form-control" onChange={this.handleChange} placeholder="Price" type="text" name="price" value={this.state.price} /><br />
                            <label htmlFor="images">Upload images:</label>
                            <input class="form-control-file" onChange={this.handleImages} type="file" name="images" accept="image/*"></input><br />
                            <select class="form-control" value={this.state.carmake_id} onChange={this.handleSelect} id="carmake_id">
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
        )
    }
}

const mstp = (state) => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(mstp, { UpdatePost })(EditPost)