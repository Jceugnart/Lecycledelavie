import React, { Component } from 'react';

class Formulaire extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            globalTitle: "Global Title",
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        this.setState({
            globalTitle: this.state.title
        })
    }
    componentDidMount() {
        console.log('Formulaire Rendu')
    }
    render () {
        return (
            <div className="Formulaire">
                <h1>{this.state.globalTitle}</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Title change</legend>
                        <div className="form-data">
                            <label htmlFor="title">Title :</label>
                            <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title}/>
                        </div>
                        <div className="form-data">
                            <input type="submit" value="Send"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
    componentDidUpdate(prevProps){
        console.log('Titre changé');
    }
}

export default Formulaire;