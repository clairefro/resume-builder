import React from 'react';

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


    </div>
  )
}



export default ResumePreview;
