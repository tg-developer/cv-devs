import React from 'react';
import axios from 'axios';

import { TopHeader, Profile } from './styles';

class Header extends React.Component {
  state = {
    header: '',
    contact: '',
    profile: '',
  };

  componentDidMount() {
    axios
      .get('https://api-dev-cv.herokuapp.com/dev')
      .then(response => {
        response = response.data;
        this.setState({ header: response.header });
        this.setState({ contact: response.contact });
        this.setState({ profile: response.profile });
      })
      .catch(error => {
        console.log('Erro na requisição API');
      });
  }

  render() {
    const { name, developer } = this.state.header;
    return (
      <>
        <TopHeader>
          <div className="content">
            <h1>{name}</h1>
            <h2>{developer}</h2>

            <nav>
              <ul>
                <li>perfil</li>
                <li>skills</li>
                <li>experiência</li>
                <li>formação</li>
                <li>contato</li>
              </ul>
            </nav>
          </div>
        </TopHeader>
        <Profile>
          <div className="content profile-bottom">
            <article className="profile">
              <header>
                <strong>Perfil</strong>
              </header>
              <div className="profile__phone">
                <p>
                  <span>Celular: </span>
                  {this.state.contact.phone}
                </p>
                <p>
                  <span>Email: </span>
                  {this.state.contact.email}
                </p>
                <div className="profile__icons">
                  <img src={this.state.contact.logo_face} />
                  <img src={this.state.contact.logo_gmail} />
                  <img src={this.state.contact.logo_skype} />
                  <img src={this.state.contact.logo_linkdin} />
                </div>
              </div>
            </article>
            <article className="avatar">
              <img src={this.state.profile.avatar} alt="Thiago Diógenes" />
              <div className="avatar__description">
                <hr />
                <p>{this.state.profile.description}</p>
                <p>{this.state.profile.description}</p>
                <hr />
              </div>
            </article>
          </div>
        </Profile>
      </>
    );
  }
}

export default Header;
