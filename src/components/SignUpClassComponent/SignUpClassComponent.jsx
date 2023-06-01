import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUpClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            platform: ''
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    };

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handleAddressChange = (event) => {
        this.setState({address: event.target.value});
    };

    handlePlatformChange = (event) => {
        this.setState({platform: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const {firstName, lastName, email, address, platform} = this.state;
        if (!firstName || !lastName || !email || !address || !platform) {
            alert('Please fill in all the fields.');
            return;
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Hello ${firstName}!`);

    };

    render() {
        const {firstName, lastName, email, address, platform} = this.state;

        return (
            <div className="text-light p-3">
                <h3 className="mb-3">Sign Up with Class component</h3><hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-dark text-light bg-dark"
                                required
                                value={firstName}
                                onChange={this.handleFirstNameChange}
                                id="firstName"
                                aria-describedby="firstName"/>
                        </div>
                        <div className="col">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-dark text-light bg-dark"
                                required
                                id="lastName"
                                value={lastName}
                                onChange={this.handleLastNameChange}
                                aria-describedby="lastName"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-dark text-light bg-dark"
                            required
                            id="email"
                            value={email}
                            onChange={this.handleEmailChange}
                            aria-describedby="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <textarea
                            className="form-control form-control-dark text-light bg-dark"
                            required
                            id="address"
                            value={address}
                            onChange={this.handleAddressChange}
                            rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Platform" className="form-label">
                            Platform
                        </label>
                        <select
                            className="form-select form-select-dark bg-dark text-light"
                            value={platform}
                            onChange={this.handlePlatformChange}
                            id="Platform">
                            <option value="">Select an option</option>
                            <option value="windows">Windows</option>
                            <option value="ios">iOS</option>
                            <option value="linux">Linux</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUpClassComponent;
