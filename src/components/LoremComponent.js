// components/LoremIpsumDisplay.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoremIpsum } from "../redux/actions";

const LoremIpsumDisplay = () => {
  const { title, text } = useSelector((state) => state.loremIpsum);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoremIpsum());
  }, [dispatch]);

  return (
    <div>
      <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
      <ul>
        <p className="title"><b>Title:</b>{title}</p>
        <li><b>Body:</b>{text}</li>
      </ul>
      
    </div>
  );
};

export default LoremIpsumDisplay;