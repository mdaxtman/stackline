import { Table as AntDTable } from 'antd';
import { useGetProductQuery } from '../apis/productApi';

const columns = [
    {
      title: 'Week Ending',
      dataIndex: 'weekEnding',
      key: 'weekEnding',
      sorter: (a, b) => new Date(a.weekEnding) - new Date(b.weekEnding),
    },
    {
      title: 'Retail Sales',
      dataIndex: 'retailSales',
      key: 'retailSales',
      sorter: (a, b) => a.retailSales - b.retailSales,
      render: (text) => `$${text.toLocaleString()}`,
    },
    {
      title: 'Wholesale Sales',
      dataIndex: 'wholesaleSales',
      key: 'wholesaleSales',
      sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
      render: (text) => `$${text.toLocaleString()}`,

    },
    {
      title: 'Units Sold',
      dataIndex: 'unitsSold',
      key: 'unitsSold',
      sorter: (a, b) => a.unitsSold - b.unitsSold,
    },
    {
      title: 'Retailer Margin',
      dataIndex: 'retailerMargin',
      key: 'retailerMargin',
      sorter: (a, b) => a.retailerMargin - b.retailerMargin,
      render: (text) => `$${text.toLocaleString()}`,
    },
  ];
  
  export const Table = () => {
    const { data }  = useGetProductQuery();

    return (
      <div className='content-table'>
        <AntDTable columns={columns} dataSource={data.sales} rowKey="weekEnding" />
      </div>
    );
  }