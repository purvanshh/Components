import React, { useState, useEffect } from 'react';

function QuotesComponent() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  const fetchNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .catch(error => console.error('Error fetching quote:', error));
  };

  return (
    <div className="QuotesComponent">
      <h3>Motivational Quotes Component</h3>
      <p>{quote}</p>
      <button onClick={fetchNewQuote}>New Quote</button>
    </div>
  );
}

export default QuotesComponent;
