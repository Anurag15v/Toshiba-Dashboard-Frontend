import React, { useState, useEffect, useRef } from 'react';
import './graphWidget.css'; // Import the CSS file for styling
import SmallWidgets from '../smallWidgets/smallWidgets';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import axios from 'axios';

const GraphWidget = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null); // Create a reference to the container

  useEffect(() => {
    axios.get('https://toshiba-dashboard-backend.onrender.com/graph')
      .then(response => {
        const formattedData = response.data.map(item => ({
          x: new Date(item.timestamp).getTime(),
          y: parseFloat(item.profitPercentage)
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      // Update chart options with new dimensions
      if (data) {
        const newOptions = {
          credits: { enabled: false },
          title: { text: null },
          series: [{ data: data }],
          chart: {
            width: width,
            height: height
          }
        };
        Highcharts.charts.forEach(chart => {
          if (chart && chart.renderTo === container) {
            chart.setSize(width, height);
          }
        });
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data]); // Re-run effect when data changes

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: "10px" }}>
      <div ref={containerRef} className="graph-widget">
        <div className="header7">
          <div className='text2'>Growth</div>
          <div className="sort">
            Yearly <img className="down-arrow" src="downArrow.png" alt="Down Arrow" />
          </div>
        </div>
        {loading ? (
            <p>Loading...</p>
          ) : (
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                credits: { enabled: false },
                title: { text: null },
                series: [{ data: data, color:'#25CD25', dashStyle:'dot' }],
                chart: {
                  width: containerRef.current.offsetWidth,
                  height: 240
                },
                xAxis: {
                  type: 'datetime',
                  labels: {
                    format: '{value:%Y}', // Display years
                    rotation: 45 // Optional: Rotate labels for better readability
                  }
                },
                yAxis: {
                  title: {
                    text: null // Set Y-axis title text to null to hide it
                  }
                }
              }}
            />
          )}
      </div>
      <SmallWidgets />
    </div>
  );
}

export default GraphWidget;
