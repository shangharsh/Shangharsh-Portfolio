import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Details = ({about, image, title, githubLink, liveDemo}) => {
  return (
    <div className=''>
      <Card className='w-75 mt-4 mb-0 ms-auto me-auto d-flex flex-row border-0'>
        <Card.Img variant='top' className='w-25 bg-light pt-2 pb-2 ps-2 pe-2 box_shadow_hover' src={image} alt='my_image'/>
        <Card.Body>
          <Card.Text className='bg-white text-center fs-4'>
            {title}
          </Card.Text>
          <Card.Text className='bg-white text_justify'>
            {about}
          </Card.Text>
          <Card.Body className='w-50 d-flex justify-content-around align-items-center mt-0 mb-0 ms-auto me-auto'>
            <Button className=' box_shadow_hover'><Link className='text-decoration-none text-white' to={githubLink}>GitHub&nbsp;<FaGithubSquare /></Link></Button>
            <Button className=' box_shadow_hover'><Link className='text-decoration-none text-white' to={liveDemo}>LinkedIn / LiveDemo&nbsp;<FaLinkedin /></Link></Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Details