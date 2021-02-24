import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import CarMake from '../actions/CarMake'
import { connect } from 'react-redux'

class CarMakes extends React.Component {

    
    handleSelect=e=>{
        this.props.CarMake(e)
    }
    render() {
        return (
            <DropdownButton variant="secondary" id="dropdown-item-button" title="Car Make" onSelect={this.handleSelect}>
                <Dropdown.Item as="button" eventKey="1">Acura</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="2">Alfa Romeo</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="3">Aston Martin</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="4">Audi</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="5">Bentley</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="6">BMW</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="7">Bugatti</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="8">Buick</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="9">Cadillac</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="10">Caterham</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="11">Chevrolet</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="12">Chrysler</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="13">Dodge</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="14">Ferrari</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="15">Fiat</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="16">Ford</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="17">GMC</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="18">Honda</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="19">Hyundai</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="20">Infiniti</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="21">Jaguar</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="22">Jeep</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="23">Kia</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="24">Lamborghini</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="25">Land Rover</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="26">Lexus</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="27">Lincoln</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="28">Lotus</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="29">Maserati</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="30">Mazda</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="31">Mercedes Benz</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="32">Mini</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="33">Mitsubishi</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="34">Nissan</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="35">Porsche</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="36">Ram Trucks</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="37">Rolls Royce</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="38">Smart</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="39">Subaru</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="40">Toyota</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="41">Tesla</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="42">Volkswagen</Dropdown.Item>
                <Dropdown.Item as="button" eventKey="43">Volvo</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default connect(null,{CarMake}) (CarMakes)