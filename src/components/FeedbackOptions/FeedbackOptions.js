import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option, index) => (
    <button
      key={index}
      type="button"
      className={s.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTipes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
