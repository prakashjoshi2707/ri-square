import { Col, Row, Carousel, Image } from 'antd';


export default function Banner() {

	return (
		<>
			<Carousel autoplay >
				<Row className="banner-home" justify="center" align="middle">
					<Col span={24}>
						<Image src='/images/banner-01.png' preview={false} />
						<div className='container-lg hide'>
							<Row className='hide'>
								<Col span={12}></Col>
								<Col span={12}>
									<h1>Immigration Drives Wedge Between Biden, Progressives</h1>
									<h3>Lorem ipsum dolor sit amet consectetur. Placerat eget maecenas neque vel vitae in semper. Eros ac iaculis scelerisque duis tortor ipsum faucibus. Pulvinar bibendum turpis eros sed velit tortor. Bibendum imperdiet tellus tempor ullamcorper dictum adipiscing vitae velit a.Lorem ipsum dolor sit amet consectetur. Placerat eget maecenas neque vel vitae in semper. Eros ac iaculis scelerisque duis tortor ipsum  </h3></Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Carousel>
			{/* <Row className="banner-home" justify="center" align="middle">
				<Col span={24}>
					<img src='/images/banner-gift.png' />
					<div className='container-lg '>
						<Row>
							<Col span={12}></Col>
							<Col span={12}>
								<h1 style={{ fontSize: '40px', fontWeight: '600', lineHeight: '60px' }}>Immigration Drives Wedge Between Biden, Progressives</h1>
								<h3>Immigration Drives Wedge Between Biden, Progressives</h3></Col>
						</Row>
					</div>
				</Col>
			</Row> */}
		</>

	)
}
