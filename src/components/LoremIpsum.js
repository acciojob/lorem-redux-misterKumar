import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLoremIpsum } from '../redux/actions';

const LoremIpsum = ({ loremIpsum, fetchLoremIpsum }) => {
  useEffect(() => {
    fetchLoremIpsum();
  }, [fetchLoremIpsum]);

  return (
    <div className="LoremIpsum">
      <h1 className="text-center">A short Naration of Lorem Ipsum</h1>
      <div className="container">
        <div className="row">
          {loremIpsum.length === 0 ? (
            <h4>Loading...</h4>
          ) : (
            <>
            <ul>
                {loremIpsum.map((post) => (
                    <li className="col-md-6" key={post.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                        <h4 className="card-title"><strong>Title: </strong> {post.title}</h4>
                        <p className="card-text"><strong>Body: </strong>  {post.body}</p>
                        </div>
                    </div>
                    </li>
                ))}
            </ul>   
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loremIpsum: state.loremIpsum.loremIpsum,
});

export default connect(mapStateToProps, { fetchLoremIpsum })(LoremIpsum);
