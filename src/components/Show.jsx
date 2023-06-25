import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../styles/Show.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Show({ Show, backgroundColor }) {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    const showId = Show.id;
    navigate(`/ShowDetails/${showId}`);
  };

  return (
    <div className="show-item" style={{ backgroundColor }}>
      <img src={Show.image.medium} alt="" />
      <h3>{Show.name}</h3>
      <div className="view-more">
        <span>Click for more info</span>
        <button type="button" onClick={handleShowDetails} aria-label="View more info"><BsArrowRightCircle /></button>
      </div>
    </div>
  );
}

Show.propTypes = {
  Show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Show;
