import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({
  onLeaveFeedback,
  options = ['Good', 'Neutral', 'Bad'],
}) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            className="button"
            onClick={() => onLeaveFeedback(option.toLowerCase())}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
