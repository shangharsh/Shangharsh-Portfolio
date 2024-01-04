import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=''>
      <Card className='w-75 mt-4 mb-0 ms-auto me-auto d-flex flex-row border-0'>
        <Card.Img variant='top' className='w-25 bg-light pt-2 pb-2 ps-2 pe-2 box_shadow_hover' src='/pic.png' alt='my_image'/>
        <Card.Body>
          <Card.Text className='bg-white text_justify'>
            Hi, I am Shangharsh Adhikari, Frontend Developer. BCA(Bachelor of Computer
             Application) graduates looking for opportunities in frontend development.
             Highly Skilled and Trained developer from popular software development 
             company "<Link to='https://vrittechnologies.com/' className='text-decoration-none'>Vrit Technologies</Link>". 
             I started my career as intern at OneHorn Solutions.
          </Card.Text>
          <Card.Body className='w-50 d-flex justify-content-around align-items-center mt-0 mb-0 ms-auto me-auto'>
            <Button className=' box_shadow_hover'><Link className='text-decoration-none text-white' to='https://github.com/shangharsh'>GitHub&nbsp;<FaGithubSquare /></Link></Button>
            <Button className=' box_shadow_hover'><Link className='text-decoration-none text-white' to='https://www.linkedin.com/in/shangharsh-adhikari-4a7b89243/'>LinkedIn&nbsp;<FaLinkedin /></Link></Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  )
}

export default About