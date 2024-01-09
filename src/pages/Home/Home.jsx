import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaGithubSquare } from "react-icons/fa";
import Skills from '../../components/Skills/Skills';


const Home = () => {

  return (
      <>
      <Card className='box-shadow w-75 fs-3 mt-3 mb-3 ms-auto me-auto d-flex flex-row justify-content-around align-items-center'>

<Card.Body className='flex-grow-0'>
  <Card.Text>Hi</Card.Text>
  <Card.Text>I am <span className='fw-normal'>Shangharsh Adhikari</span></Card.Text>
  <Card.Text className='fw-normal text-secondary'>Frontend Developer</Card.Text>
  <Button variant='primary'>Contact Me <IoMdMail /> </Button>

  <ListGroup className='w-100 border-0 mt-3'>
  <div className='d-flex justify-content-between align-items-center'>
  <Link to='https://www.facebook.com/shang.adh/' className='text-primary hover-act'>
  <FaFacebookSquare size={32}/>
  </Link>
  <Link to='https://www.instagram.com/shangharsh_/' className='text-primary hover-act'>
  <FaSquareInstagram size={32} />
  </Link>
  <Link to='https://www.linkedin.com/in/shangharsh-adhikari-4a7b89243/' className='text-primary hover-act'>
  <FaLinkedin size={32} />
  </Link>
  <Link to='https://github.com/shangharsh' className='text-primary hover-act'>
  <FaGithubSquare size={32}/>
  </Link>
  </div>
</ListGroup>
</Card.Body>
  <Card.Img variant='top' className='w-25 box_shadow_hover' src='/pic.png' alt='my_image'/>
</Card>

<Skills/>
      
      </>
  )
}

export default Home;