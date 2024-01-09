import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='d-flex flex-row flex-wrap gap-3 justify-content-center align-items-center pt-3 pb-3'>
      <Card style={{width: '18rem'}}>
        <Card.Header className='text-center'>
          Quiz Hub
        </Card.Header>
        <Card.Body className='pt-3 pb-3 ps-3 pe-3'>
          <Card.Img variant='top' src='/Quiz.png' alt='project_image'/>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Link to='/projectdetails'><Button>View Details</Button></Link>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default Projects