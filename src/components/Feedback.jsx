import { useState } from 'react';

import Controls from './Controls/Controls';
import Statistica from 'components/Statistics/Statistics';
import css from './Feedback.module.css';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleClick = type => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
    setTotal(total + 1);
    setVisible(true);
  };

  const getPositivePercentage = () => {
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div className={css.container}>
      <Controls
        clickGood={() => handleClick('good')}
        clickNeutral={() => handleClick('neutral')}
        clickBad={() => handleClick('bad')}
      />
      {visible && (
        <Statistica
          upGood={good}
          upNeutral={neutral}
          upBad={bad}
          upTotal={total}
          upInterest={getPositivePercentage()}
        />
      )}
    </div>
  );
};

export default Feedback;
