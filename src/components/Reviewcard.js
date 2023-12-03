import React from "react";
import Image from "react-bootstrap/Image";
const Reviewcard = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget accumsan felis. Sed vulputate dui eget odio venenatis, eu fringilla nulla aliquet. Donec lacus augue, faucibus eget pellentesque consequat, feugiat eu massa. Nunc fermentum condimentum rutrum. Curabitur porttitor neque ut risus ornare scelerisque. Quisque id tortor condimentum, semper sem in.";

  function truncateText(text) {
    var truncated = text.substring(0, 75) + "...";
    return truncated;
  }
  return (
    <div className="d-flex flex-column m-2 p-2">
      <div>
        <h5 className="testimonial-cardTitle">Rating</h5>
      </div>
      <div className="d-flex align-items-center my-4">
        <Image className="" src="https://picsum.photos/100" roundedCircle />
        <h6 className="mx-3 testimonial-cardName">First Name</h6>
      </div>
      <div>
        <h6 className="testimonial-cardTitle">Review:</h6>
        <p className="testimonial-cardText">{truncateText(text)}</p>
      </div>
    </div>
  );
};

export default Reviewcard;
