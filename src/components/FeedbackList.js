import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedBackList}) {
  return (
 
    <div className='feedback-list'>
        {feedBackList.map(data =>{
           return <FeedbackItem key={data.id} item={data}></FeedbackItem>
        })}
    </div>
  
  )
}

FeedbackList.prototype = {
    feedBackList:PropTypes.array.isRequired
}

export default FeedbackList