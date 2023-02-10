import { Col, Row, Button, Dropdown, Pagination } from 'antd';
import { UserOutlined, ArrowLeftOutlined, Image, EllipsisOutlined, ArrowRightOutlined, HeartOutlined, ShareAltOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';

export default function ArticleHome() {

    return (
        <>
            <section className='section bg-gray-100 article'>
                <div className='container-lg'>
                    <Row>
                        <Col span={24}><h3 className='title'>Recent Articles</h3></Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col span={6}><ArticleBox /></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className='pagination'>
                                <div><Button size='large'><ArrowLeftOutlined /> Previous</Button></div>
                                <div><Pagination defaultCurrent={1} total={50} /></div>
                                <div><Button size='large'>Next <ArrowRightOutlined /></Button></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

function ArticleBox() {

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const items = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <div className='article-box'>
            <div className='img-box'>
                <Image
                    width="100%"
                    src="../images/article01.png"
                />

            </div>
            <div className='article-date-time'>
                <div> Microsoft iot</div>
                <div> 23 Jan 2022</div>
            </div>
            <div className='title'>Product and service innovation starts in the field</div>
            <div className='desc'>Your search did not match any vendors. Please try again or create add a new vendor.</div>
            <div className='actions'>
                <div><HeartOutlined />
                    <ShareAltOutlined />
                    <VerticalAlignBottomOutlined />
                </div>
                <div>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>


                            <EllipsisOutlined />

                        </a>
                    </Dropdown>
                </div>

            </div>
        </div>
    )
}