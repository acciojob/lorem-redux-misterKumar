import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoremIpsum } from '../redux/actions';

const LoremIpsum = ({ loremIpsum, setLoremIpsum }) => {
  useEffect(() => {
    
    fetch('https://your-api-url.com/lorem-ipsum')
      .then((response) => response.json())
      .then((data) => {
        setLoremIpsum(data.loremIpsum);  
      });
  }, [setLoremIpsum]);

  
  const loremIpsumText = typeof loremIpsum === 'object' ? loremIpsum.text : loremIpsum;

  return (
    <div>
      <h1>Lorem Ipsum</h1>
      <p>{loremIpsumText}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loremIpsum: state.loremIpsum,
});

export default connect(mapStateToProps, { setLoremIpsum })(LoremIpsum);
