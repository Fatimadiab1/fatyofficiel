import React, { Component } from 'react';
import '../styles/Contacts.css';
import Image3 from '../assets/Image3.png';

export default class Contacts extends Component {
  state = {
    formData: {
      nom: '',
      prenom: '',
      email: '',
      message: ''
    },
    submitted: false
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  renderForm = () => {
    const { formData } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            className='form-control'
            name="nom"
            value={formData.nom}
            onChange={this.onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="prenom">Prénom:</label>
          <input
            type="text"
            className='form-control'
            name="prenom"
            value={formData.prenom}
            onChange={this.onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className='form-control'
            name="email"
            value={formData.email}
            onChange={this.onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            className='form-control'
            name="message"
            value={formData.message}
            onChange={this.onChange}
            required
          />
        </div>
        <button type='submit' className='monbouton btn btn-block mt-3'>
          Envoyer
        </button>
      </form>
    );
  };

  renderThankYou = () => (
    <div className="thank-you-container">
      <div className="thank-you-message">
        <h2>Merci pour votre message !</h2>
        <p>J'ai bien reçu vos informations et je vous répondrai dans les plus brefs délais.</p>
      </div>
      <img src={Image3} alt="Thank You" className="thank-you-image" />
    </div>
  );

  render() {
    const { submitted } = this.state;

    return (
     
        <div className="contacts">
          {!submitted && <h1>Contactez moi ! ✌🏼</h1>}
          {!submitted ? this.renderForm() : this.renderThankYou()}
        </div>
   
    );
  }
}
