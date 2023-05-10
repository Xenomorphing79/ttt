import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function Histogram({ data, onExport }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 70 };
    const width =
      svg.node().getBoundingClientRect().width - margin.left - margin.right;
    const height =
      svg.node().getBoundingClientRect().height - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map(({ word }) => word))
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, ({ count }) => count)]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${height + margin.top})`)
      .call(xAxis)
      .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-45)');

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', ({ word }) => xScale(word))
      .attr('y', ({ count }) => yScale(count))
      .attr('width', xScale.bandwidth())
      .attr('height', ({ count }) => height - yScale(count));

    return () => {
      svg.selectAll('*').remove();
    };
  }, [data]);

  return (
    <div>
      <h2>Top 20 most occurring words:</h2>
      <ul>
        {data.map(({ word, count }) => (
          <li key={word}>
            {word}: {count}
          </li>
        ))}
      </ul>
      <button onClick={onExport}>Export</button>
      <h2>Histogram:</h2>
      <svg ref={svgRef} width="100%" height="300" />
    </div>
  );
}

export default Histogram;
