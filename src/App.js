import Line from './Line';
import data from './data';
import Button from './Button';

function App() {
  const button = data.map(item => <Button key={item.id} color={item.color} />)
  const lines = data.map(item => <Line key={item.id} text={item.text} />)
  return (
    <div>
      <Button> {button}  </Button>
      {lines}
    </div>
  );
};

export default App;
