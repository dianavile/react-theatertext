import Line from './Line';
import data from './data';

export default () => {
  const lines = data.map(item => <Line key={item.id} text={item.text} />)
  return (
    <div> {lines} </div>
  );
};

