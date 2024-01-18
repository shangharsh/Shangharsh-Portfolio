import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Details = ({about, image, title, githubLink, liveDemo}) => {
  return (
    <div className=''>
      <Card className='w-75 mt-4 mb-0 ms-auto me-auto d-flex flex-row border-0'>
        <Card.Img variant='top' className='w-25 pt-2 pb-2 ps-2 pe-2 box_shadow_hover custom_shadow' src={image} alt='my_image'/>
        <Card.Body>
          <Card.Text className='bg-white text-center fs-4'>
            {title}
          </Card.Text>
          <Card.Text className='bg-white text_justify'>
            {about}
          </Card.Text>
          <Card.Body className='w-50 d-flex justify-content-around align-items-center mt-0 mb-0 ms-auto me-auto'>
            {
            title === undefined?
            <>
            <Button className=' box_shadow_hover'><Link target='_blank' className='text-decoration-none text-white' to={'https://github.com/shangharsh'}>GitHub&nbsp;<FaGithubSquare /></Link></Button>
            <Button className=' box_shadow_hover'><Link target='_blank' className='text-decoration-none text-white' to={'https://www.linkedin.com/in/shangharsh-adhikari-4a7b89243/'}>LinkedIn&nbsp;<FaLinkedin /></Link></Button>
            </> : 
            <>
            <Button className=' box_shadow_hover'><Link target='_blank' className='text-decoration-none text-white' to={githubLink}>View Code&nbsp;<FaGithubSquare /></Link></Button>
            <Button className=' box_shadow_hover'><Link target='_blank' className='text-decoration-none text-white' to={liveDemo}>LiveDemo&nbsp;</Link></Button>
            </>
          }
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Details