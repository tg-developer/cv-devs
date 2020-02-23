import styled from 'styled-components';

import vect from '../../img/vect.png';

export const TopHeader = styled.header`
  background-color: #f2f3f3;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 250px;
  }

  h1 {
    font-family: 'myriad-pro';
    color: #2f4152;
    font-size: 48px;
    text-transform: uppercase;
  }

  h2 {
    color: #020d18;
    font-family: 'corbel';
    text-transform: uppercase;
  }

  nav {
    ul {
      display: flex;
      margin: 20px 0;
      background: #2f4152;
      border-radius: 10px;
      position: relative;
      width: 700px;

      li {
        list-style: none;
        padding: 15px 40px;
        font-family: 'calibri';
        color: #fff;
        text-transform: uppercase;
        font-size: 16px;
        cursor: pointer;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          margin: 10px 40px;
          height: 30px;
          border-left: 2px solid;
        }
      }

      li:last-child:after {
        border: none;
      }
    }
  }
`;

export const Profile = styled.section`
  color: #fff;
  .profile-bottom {
    display: flex;
  }
  .profile {
    background-image: url(${vect});
    background-repeat: no-repeat;
    position: relative;
    margin-top: 20px;

    header {
      strong {
        color: #fff;
        display: block;
        text-align: center;
        font-family: 'corbel';
        font-size: 18px;
        margin-right: 20px;
        padding: 8px 0;
        text-transform: uppercase;
      }
    }

    .profile__phone {
      margin-top: 20px;

      p {
        font-family: 'calibri';
        font-size: 16px;
        color: #000;
      }

      .profile__icons {
        display: flex;
        margin-top: 40px;
        img {
          width: 25px;
          height: 25px;
          margin-right: 15px;
          border-radius: 5px;
        }
      }
    }
  }

  .avatar {
    display: flex;
    margin: 20px 0 0 40px;

    img {
      height: 200px;
      border-radius: 50%;
      padding-right: 20px;
    }
    .avatar__description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 400px;
      hr {
        border: 0.7px solid #163757;
      }
      p {
        font-family: 'calibri';
        padding: 10px 20px;
        font-size: 16px;
        color: #000;
      }
    }
  }
`;
