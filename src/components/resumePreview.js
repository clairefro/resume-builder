import React from 'react';

const stringifyDates = (start, end) => {
  const s = new Date(start).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  let e = 'Present';

  if (new Date(end) != 'Invalid Date') {
    e = new Date(end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return `${s} - ${e}`;
}

const ResumePreview = ({ data }) => {
  const {
    basics,
    work,
    education,
    skills,
    languages,
    interests
  } = data
  
  return (
    <div className="resume-preview">
      <div className="section-basic-info">
        <div className="picture-name">
          {basics.picture &&
            <img src={basics.picture} className="profile-picture" />
          }
          <div className="picture-name-right">
            {basics.name &&
              <h1>{basics.name}</h1>
            }
            {basics.title &&
              <h3>{basics.title}</h3>
            }
            {basics.summary &&
              <p>{basics.summary}</p>
            }
          </div>
        </div>
      </div>
      <div className="section section-socials">
        <div className="contact-info">
          {basics.email &&
            <p>{basics.email}</p>
          }
          {basics.website &&
            <p>{basics.website}</p>
          }
          {basics.phone &&
            <p>{basics.phone}</p>
          }
          {basics.location &&
            <p>{`${basics.location.address}, ${basics.location.city}, ${basics.location.region}`}</p>
          }
        </div>
        <div className="social-media">
          {basics.profiles.map((p, i) => (
            <p key={i}>{`${p.network} : `}<a href={p.url}>{p.url}</a></p>
          ))}
        </div>
      </div>
    <div className="panels">
      <div className="panel-left">
        {work && (
          <div className="section work-experience">
            <h2>Work Experience</h2>
            <ul className="work-items">
              {work.map((w,i)=> (
                  <li className="item work-item" key={i}>
                    <h3>{`${w.position}, ${w.company}`} <span className="date">{stringifyDates(w.startDate, w.endDate)}</span></h3>
                    <p>{w.summary && w.summary}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {education && (
          <div className="section education">
            <h2>Education</h2>
            <ul className="education-items">
              {education.map((e,i)=> (
                  <li className="item education-item" key={i}>
                    <h3>{e.institution}{' '}<span className="date">{stringifyDates(e.startDate, e.endDate)}</span></h3>
                    <p>{e.certificate && e.certificate}, {e.field && e.field}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="panel-right">
        {skills && (
          <div className="section skills">
            <h2>Skills</h2>
            <ul className="skills-items">
              {skills.map((s,i)=> (
                  <li className="item skills-item" key={i}>
                      <p>{s.name}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {skills && (
          <div className="section languages">
            <h2>Languages</h2>
            <ul className="languages-items">
              {languages.map((l,i)=> (
                  <li className="item languages-item" key={i}>
                      <p>{`${l.language} (${l.fluency})`}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {interests && (
          <div className="section interests">
            <h2>Interests</h2>
            <ul className="interests-items">
              {interests.map((int,i)=> (
                  <li className="item languages-item" key={i}>
                      <p>{int}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      </div>
    </div>


    </div>
  )
}



export default ResumePreview;
