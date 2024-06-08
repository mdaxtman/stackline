import { Container } from "./container";
import { LineChart } from './lineChart';
import { Table } from "./table";

export const Content = () => {
    return (
        <div>
            <Container>
                <LineChart />
            </Container>
            <Container>
                <Table />
            </Container>
        </div>
    );
};