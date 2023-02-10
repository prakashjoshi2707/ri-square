import { Col, Row, Layout, Menu, Input, Button, Image } from 'antd';
const { Header } = Layout;

export default function Index() {
    return (
        <>
            <Header style={{
                position: 'fixed',
                top: 0,
                zIndex: 1,
                width: '100%',
            }} className="shadow-lg">
                <div className="container-lg">
                    <Row gutter={24}>
                        <Col span={2} className=""><img src="../images/logo.png" style={{ verticalAlign: 'middle' }} /></Col>
                        <Col span={16} className="menu"> <Menu
                            theme='light'
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key="1" >
                                Home
                            </Menu.Item>
                            <Menu.Item key="2" >
                                News
                            </Menu.Item>
                            <Menu.Item key="3" >
                                Library
                            </Menu.Item>
                            <Menu.Item key="4" >
                                Target serach
                            </Menu.Item>
                            <Menu.Item key="5" >
                                Enforcement Actions
                            </Menu.Item>
                            <Menu.Item key="6" >
                                Raise Ticket
                            </Menu.Item>
                        </Menu></Col>
                        <Col span={4}>
                            <Input size='large' />

                        </Col>
                        <Col span={2}>

                            <Button type="primary" size='large'>My Notes</Button>
                        </Col>
                    </Row>
                </div>
            </Header>
        </>
    )
}
