import React from 'react';

import api from '../../api/api';

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
    };
  }

  async componentDidMount() {
    const response = await api.get();

    const data = response.data.experiences.map(exp => ({
      ...exp,
    }));

    this.setState({ experiences: data });
  }

  render() {
    const { experiences } = this.state;

    return (
      <>
        {experiences.map(exp => (
          <section className="content">
            <div className="experience-text">
              <p className="experience-text__first">
                {exp.company}{' '}
                <span className="experience__date">{exp.time}</span>
              </p>
              <p className="experience-text_second">{exp.occupation}</p>
              <p className="experience-text_second">{exp.activities}</p>
            </div>
          </section>
        ))}
      </>
    );
  }
}

export default Experiences;
