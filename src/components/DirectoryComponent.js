import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderPageItem({ page}) {
	return (
    <Card>
		<Link to={`/directory/${page.id}`}>
			<CardImg width="100%" src={page.image} alt={page.name} />
			<CardImgOverlay>
				<CardTitle>{page.name}</CardTitle>
			</CardImgOverlay>
      </Link>
		</Card>
	);
}

function Directory (props){


    const directory = props.pages.map((page) => {
			return (
				<div key={page.id} className="col-md-5 m-1">
					<RenderPageItem page={page}   />
            
				</div>
			);
		});

  return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Directory</BreadcrumbItem>
					</Breadcrumb>
					<h2>Directory</h2>
					<hr />
				</div>
			</div>
			<div className="row">{directory}</div>
		</div>
	);
  }


export default Directory;
