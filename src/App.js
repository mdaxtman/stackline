// import { Layout } from 'antd';
import { Header } from './components/header';
import './App.css';
import { Content } from './components/content';
import { Col, Row } from "antd";
import { Aside } from './components/aside';
import { useGetProductQuery } from './apis/productApi';
import { Spin } from 'antd';

function App() {
    const { isLoading } = useGetProductQuery();
    
    if (isLoading) {
        return;
    }
    
    return (
        <div className="app">
            <Header />
            <Row style={{height: '100%'}}>
                <Col span={6}>
                    <Aside/>
                </Col>
                <Col span={18}>
                    <Content />
                </Col>
            </Row>
        </div>
    );
}

export default App;
