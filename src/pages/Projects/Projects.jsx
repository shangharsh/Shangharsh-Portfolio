import React, { useId } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectInfo from '../../data/ProjectInfo'

const Projects = () => {
  // const showId = (e, id) =>{
  //   e.preventDefault();
  //   console.log(id);
  // } 

  return (
    <div className='d-flex flex-row flex-wrap gap-3 justify-content-center align-items-center pt-3 pb-3'>
      {ProjectInfo.map((item, id)=>{
        return(
          <Card key={id} style={{width: '18rem'}}>
        <Card.Header className='text-center'>
          {item.title}
        </Card.Header>
        <Card.Body className='pt-3 pb-3 ps-3 pe-3'>
          <Card.Img variant='top' src={item.image} width={300} height={100} alt='project_image'/>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Link to={`/projectDetails/${item.id}`}><Button>View Details</Button></Link>
        </Card.Footer>
      </Card>
        )
      })}
    </div>
  )
}
export default Projects

// onClick={(e)=>showId(e,item.id)}