import React, { useState } from "react";

const Readmore = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const text =
    "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit amet consectetur";

  return (
    
      <p >
        {isReadMore ? text.slice(0, 400) : text}
        {/* // condition that will render 'read more' only if the text.length is
        greated than 150 chars */}
        {text.length > 150 && (
          <span onClick={toggleReadMore}>
            {isReadMore ? "...read more" : " show less"}
          </span>
        )}
      </p>
    
  );
};

export default Readmore;
