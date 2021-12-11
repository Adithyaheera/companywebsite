import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'
import './Header.css'

import ProgressBar from 'react-customizable-progressbar'
import {Row,Col,Card,ListGroup,NavDropdown} from 'react-bootstrap'

function Header() {
  return (
    
<>
  
 <div>
   <h6>THE GOOD PLATFORM</h6> 
 </div>


      <Navbar bg="light" variant="light" expand="1g"   sticky="top" collapseOnSelect  >
      <Container>
      <Nav.Link href="#pricing">OVERVIEW</Nav.Link>
      <Nav.Link href="#hom">FORM BUILDER</Nav.Link>
      <Nav.Link href="#features">MILESTONES</Nav.Link>
      <Nav.Link href="#pricing">REPORTING</Nav.Link>
      <Navbar.Brand href="#home">PROPOSAL SUMMARY</Navbar.Brand>

      </Container>
    </Navbar>

<div>
  
      <ProgressBar  
      progress={20}
      radius={30}                   
  />    
  
<h4><th>pathways to progress</th></h4>
</div>
      
<body>

<p1><strong>context</strong></p1>

<th>Tell us about the problems faced by the community/individual targetted and their needs?</th>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Beatae dolore minus ex rem harum modi sed officia consequatur alias, 
voluptates nihil quisquam velit! Sed eum consequatur in fugiat ex a.


<th>what is unique about this program's approach with regards to the forementioned needs?</th>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Mollitia autem iusto aliquid excepturi quasi possimus ea?
  Aut praesentium dolore culpa esse! Fugiat sequi tempora incidunt 
  velit eligendi debitis expedita veniam.


<h5><p1>Key Highlights</p1></h5>

<th>tell us about some of the keys features,hightlights,approaches and goals that this program aims to achieves </th>
<div>
  <h6>
  <p1>  1.Highlight</p1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tenetur architecto magnam ab dolore voluptatem pariatur necessitatibus harum consequatur facilis velit, sit cupiditate eius minus fugit tempora neque eveniet natus.
</p>
  </h6>
</div>
<p1> 2.Highlight</p1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt culpa magni soluta iste, non dolores doloribus expedita? Error sunt iusto quae reiciendis quasi alias obcaecati molestias. Dolorum, sequi nihil.
 </p>
</body>




<h3><th>Team</th></h3>


<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        
        <Card.Body>
          <Card.Title><th>John Doe</th></Card.Title>
          <Card.Text>
           <ul>johnDoe@xyz.com</ul>
           <ul>+91-9954678999</ul>
           <ul>Aadhaar No | 234567891234</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


<h5><th>Key Indicators</th></h5>



<div className="row1">

<Card style={{ width: '18rem' }} xs-1 className="g-4">
  <Card.Header>primary</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><strong>impact category:</strong> Education</ListGroup.Item>
    <ListGroup.Item><strong>impact priority:</strong>Access to Quality education</ListGroup.Item>
    </ListGroup>
</Card>


<div>
  <Card style={{ width: '18rem' }} xs-1 className="g-4">
    <Card.Header>secondary</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item><strong>impact category:</strong> Education</ListGroup.Item>
      <ListGroup.Item><strong>impact priority:</strong>Access to Quality education</ListGroup.Item>
      </ListGroup>
  </Card>

</div>
<div>

<Card style={{ width: '18rem' }} xs-1 className="g-4">
  <Card.Header>secondary</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><strong>impact category:</strong> Education</ListGroup.Item>
    <ListGroup.Item><strong>impact priority:</strong>Access to Quality education</ListGroup.Item>
    </ListGroup>
</Card>


</div>





<div className="row-4">
  
  
  <Navbar variant="light" bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home"><th>strategic goal1</th>
      
      improving the successuful transition of youth into the woekforce  and society
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title=""
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  


  
<div>

<Navbar variant="light" bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home"><th>strategic goal1</th>
      
      improving the successuful transition of youth into the woekforce  and society
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title=""
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  
</div>

<div>
<Navbar variant="light" bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home"><th>strategic goal1</th>
      
      improving the successuful transition of youth into the woekforce  and society
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title=""
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  
</div>
  

</div>  


<div>



</div>

  
<th>Budget</th>

<div className="col-1" >
  
div<>
    
    <Navbar variant="light" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home"><th>Operations </th> total: 100000
          
          <p>Breakdown Coast</p>
          <p> +   2 items</p>
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title=""
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
  
    
  </>
  <div>
  <Navbar variant="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home"><th>Operations </th> total: 100000
        
        <p>Breakdown Coast</p>
        <p> +   2 items</p>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

  </div> 



</div>
<div>
<Navbar variant="light" bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home"><th>Operations </th> total: 100000
      
      <p>Breakdown Coast</p>
      <p> +   2 items</p>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title=""
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
</div>

<div>

 <h6> <th>milestone1</th></h6>
  To educate and inform 200000 girls


 <h6> <th>Duration</th></h6>
 6 months

 <h6><th>Key activities</th></h6>
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, saepe. Hic veniam dolorem eos debitis cupiditate provident, in ea repellendus cumque, illum aliquam praesentium! Ducimus sed iusto corrupti velit magnam.

</div>
<div>

 <h6> <th>milestone 2</th></h6>
  To educate and inform 200000 girls


 <h6> <th>Duration</th></h6>
 6 months

 <h6><th>Key activities</th></h6>
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, saepe. Hic veniam dolorem eos debitis cupiditate provident, in ea repellendus cumque, illum aliquam praesentium! Ducimus sed iusto corrupti velit magnam.

</div>


<h4>Donor</h4>

<ProgressBar  
     
      progress={20}
      radius={150}                   
  /> 
<label>total budget 00000000</label>


<p>self funding (Internal Accrual)</p>



<h3>Reporting </h3>
<h5>internal system </h5>
<h6>Duration</h6>
3 months

<h5>Donor system</h5>
<h6>Duration</h6>
3 months

</>
  )
 
}

export default Header
