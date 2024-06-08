import { Line } from '@ant-design/charts';
import { useGetProductQuery } from '../apis/productApi';
import { useMemo } from 'react';

const preprocessData = (data) => {
    const monthlyData = data.reduce((acc, item) => {
      const month = item.weekEnding.substring(0, 7); // Extract the month (YYYY-MM)
      if (!acc[month]) {
        acc[month] = {
          month,
          retailSales: 0,
          wholesaleSales: 0,
        };
      }
      acc[month].retailSales += item.retailSales;
      acc[month].wholesaleSales += item.wholesaleSales;
      return acc;
    }, {});
  
    const processedData = Object.values(monthlyData).flatMap((monthData) => [
      { month: monthData.month, sales: monthData.retailSales, type: 'Retail Sales' },
      { month: monthData.month, sales: monthData.wholesaleSales, type: 'Wholesale Sales' },
    ]);
  
    return processedData;
  };
  

export const LineChart = () => {
    const { data } = useGetProductQuery();
    const processedData = useMemo(() => preprocessData(data.sales), [data]);

    const config = {
        data: processedData,
        xField: 'month',
        yField: 'sales',
        seriesField: 'type',
        xAxis: {
            type: 'cat',
            label: {
              formatter: (v) => {
                return new Date(v + "-01").getMonth();
              },
            },
        },
        yAxis: {
            label: null,
        },
        smooth: true,
        lineStyle: {
          lineWidth: 1,
        },
        height: 400,
      };

    return (
        <div>
            <Line {...config} />
        </div>
    );
};
