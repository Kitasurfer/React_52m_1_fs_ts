import React from 'react';
import Button from '../../components/Button/Button';

const Homework08: React.FC = () => {
  return (
    <div>
      <Button name="Normal Button" type="button" onClick={() => alert('Normal Button Clicked')} />
      <Button name="Disabled Button" type="button" onClick={() => alert('Disabled Button Clicked')} disabled={true} />
    </div>
  );
};

export default Homework08;