// LoremIpsum.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLoremIpsum } from '../redux/actions';


const LoremIpsum = ({ loremIpsum, fetchLoremIpsum }) => {
  useEffect(() => {
    fetchLoremIpsum();
  }, [fetchLoremIpsum]);

  return (
    <div className="LoremIpsum">
      <h1 className="text-center">A Short Narration of Lorem Ipsum</h1>
      <div className="container">
        <div className="row">
          {loremIpsum.map((post) => (
            <div className="col-md-6" key={post.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <p className="card-title"><strong>Title: </strong> {post.title}</p>
                  <p className="card-text"><strong>Body: </strong>  {post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loremIpsum: state.loremIpsum.loremIpsum,
});

export default connect(mapStateToProps, { fetchLoremIpsum })(LoremIpsum);
