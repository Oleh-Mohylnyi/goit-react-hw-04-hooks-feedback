import React from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import PropTypes from 'prop-types';
import {useState} from 'react'

function Feedback({title='this is a feedback form'}) {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = key => {
    if (key === "good") {
      setGood(prevState => prevState + 1)
    }
    if (key === "neutral") {
      setNeutral(prevState => prevState + 1)
    }
    if (key === "bad") {
      setBad(prevState => prevState + 1)
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (good !== 0) {
      positiveFeedbackPercentage = Math.round(
        (good / countTotalFeedback()) * 100,
      );
    }
    return positiveFeedbackPercentage;
  };

    return (
      <div>
        <h2>{title}</h2>

        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />

        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
}

export default Feedback;

Feedback.propTypes = {
  title: PropTypes.string,
};
