import React from 'react';
import './App.css';

const Heading = <h1 className='lead text-primary lead-heading'>On the Shoulders of Giants</h1>;
const Subheading = <h2 className='subheading'>Folks pushing the web forward</h2>;

const Giant = ({giant}) => {
  return (
      <div className='row'>
      <div className='col-xs-12 col-md-6 col-sm-offset-0 col-md-offset-3'>
        <div className='giant'>
        <img src={giant.img_url} className='img-responsive' />
        <h3>
          {giant.people.map((p,i, people) => { return <span key={i}>{p}{i<people.length-1 ? ', ' : ''}</span>})}</h3>
        <hr />
          <h4><a href={giant.link}>{giant.knownFor}</a></h4>
        <hr />
        <h5>{giant.organisation}</h5>
      </div>
      </div>
    </div>
  );
}

const TributePage = ({giants}) => {
  return (
    <div className='container text-center page'>
      {Heading}
      {Subheading}
      {giants.map((g, i, giants) => {
        return <Giant giant={g} />
      })}
    </div>
  )
}

export default TributePage;