import { Container } from "./container";
import { useGetProductQuery } from '../apis/productApi'; 
import { Logo } from "./logo";
import { Divider, Tag } from "antd";

export const Aside = () => {
    const { data } = useGetProductQuery();

    return (
        <Container>
            <Logo src={data.image}/>
            <h3>{data.title}</h3>
            <p className="aside-subtitle">{data.subtitle}</p>
            <Divider/>
            {data.tags.map((tag) => {
                return (
                    <Tag
                        className="aside-tag"
                        bordered={true}
                        key={tag}
                    >
                        {tag}
                    </Tag>
                );
            })}
        </Container>
    );
};