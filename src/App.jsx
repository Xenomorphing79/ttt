import { useState } from 'react';
import axios from 'axios';
import { countBy, orderBy, take } from 'lodash';
import Button from './components/Button';
import Histogram from './components/Histogram';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://www.terriblytinytales.com/test.txt'
    );
    const words = response.data.toLowerCase().match(/\b\w+\b/g);
    const frequency = orderBy(
      Object.entries(countBy(words)),
      ([, count]) => -count
    ).map(([word, count]) => ({ word, count }));
    setData(take(frequency, 20));
  };

  const exportData = () => {
    const csv = data.map(({ word, count }) => `${word},${count}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'histogram.csv');
    link.click();
  };

  return (
    <div>
      <Button onClick={fetchData} />
      {data.length > 0 && <Histogram data={data} onExport={exportData} />}
    </div>
  );
}

export default App;
