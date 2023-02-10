import { Col, Layout, Row } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;


export default function Index() {

  return (
    <>
      <Footer>
        <section className='bg-white'>
          <div className="container-lg">
            <Row gutter={[24, 24]}>
              <Col sm={10} md={11} xs={24}>
                <div>
                  <div style={{ marginBottom: '30px' }}><h3>About UpThink</h3></div>
                  <div style={{ marginBottom: '30px', fontSize: '14px', color: '#52525B', lineHeight: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '120px', fontSize: '24px' }}>
                    <FacebookOutlined />
                    <TwitterOutlined />
                    <InstagramOutlined />
                  </div>
                </div>
              </Col>
              <Col sm={14} md={13} xs={24}>
                <Row className='mega-menu'>
                  <Col sm={12} md={6} xs={12}>
                    <h3>Learn</h3>
                    <ul>
                      <li><a href="javascript:">All Retail Products</a></li>
                      <li><a href="javascript:">Home</a></li>
                      <li><a href="javascript:">Commercial </a>        </li>
                      <li><a href="javascript:">Distributors</a></li>
                    </ul>
                  </Col>
                  <Col sm={12} md={6} xs={12}>
                    <h3>Contoso Store</h3>
                    <ul>
                      <li>
                        <a href="javascript:">View Account</a>
                      </li>
                      <li>
                        <a href="javascript:">Order Tracking</a>
                      </li>
                      <li>
                        <a href="javascript:">Returns</a>
                      </li>
                      <li>
                        <a href="javascript:">Sales & Support</a>
                      </li>
                    </ul></Col>
                  <Col sm={12} md={6} xs={12}>
                    <h3>Downloads</h3>
                    <ul>
                      <li><a href="javascript:">Product Manuals</a></li>
                      <li><a href="javascript:">White Papers</a></li>
                      <li><a href="javascript:">Contoso Apps</a></li>
                    </ul>
                  </Col>
                  <Col sm={12} md={6} xs={12}>
                    <h3>Company</h3>
                    <ul>
                      <li><a href="javascript:">Careers at Contoso</a></li>
                      <li><a href="javascript:">About Contoso</a></li>
                      <li><a href="javascript:">Company News</a></li>
                      <li><a href="javascript:">Site Map</a></li>
                    </ul></Col>

                </Row>
              </Col>
            </Row>
          </div>
        </section>

      </Footer>
      <section className='bg-white'>
        <div className="container-lg">
          <ul className='footer-menu'>
            <li><a href="javascript:"> Contact</a></li>
            <li><a href="javascript:"> Privacy policy</a></li>
            <li><a href="javascript:"> Sitemap</a></li>
            <li><a href="javascript:"> Terms of Use</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}
