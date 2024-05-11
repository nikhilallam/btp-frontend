import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  // const isUser = true;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
        alert("InCorrect UserID or password");
        return ;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/dashboard')
    // You can add further logic here, like sending the data to a server
};

const handleCompanySubmit = (e) => {
    // e.preventDefault();
    if(!companyEmail || !companyPassword) {
        alert("InCorrect CompanyID or password");
        return;
    }
    console.log("Email:", companyEmail);
    console.log("Password:", companyPassword);
    navigate('/dashboard')
    // You can add further logic here, like sending the data to a server
  };

  const handleNewUser = (e) => {
    navigate('/employeeregistration');
  }

  const handleNewCompany = () => {
    navigate('/companyregistration');
  }

  const login = async () => {
    console.log("login page executed");
    try {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            mode: 'cors'
        });
        
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            localStorage.setItem("user", JSON.stringify(responseData.user));
            navigate('/dashboard');
        } else {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred while processing your request.");
    }
}

const loginCompany = async () => {
  try {
      const response = await fetch('http://localhost:4000/company-login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: companyEmail,
              password: companyPassword,
          }),
          mode: 'cors'
      });
      
      if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          localStorage.setItem("company", JSON.stringify(responseData.company));
          navigate('/company-dashboard');
      } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
      }
  } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while processing your request.");
  }
}

  const loginforcompany = async () => {
    console.log("login page executed");
    let responseData;
    await fetch('http://localhost:4000/company-login' , {
      method : 'POST',
      headers : {
        Accept : 'application/form-data',
        'Content-Type' : 'application/json', 
      },
      body : JSON.stringify({
        companyEmail:companyEmail,
        password:password,
      }),      
    }).then((response) => response.json()).then((data) => responseData = data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert('wrong password or email');
    }
  }

  return (
    <>
      <MDBContainer fluid className='d-flex justify-content-evenly'>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style ={{backgroundColor:'black' , borderRadius:'1rem'}}>

              <h2 className="fw-bold mb-2 text-uppercase">GET HIRED</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='User ID' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />

              {/* <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
              <MDBBtn outline className='mx-2 px-5' color='white' size='1g' type='button' onClick={()=>{login()}}>
                Sign In
              </MDBBtn>
              <MDBBtn outline className='mx-2 px-5' color='white' size='1g' type='button' onClick={handleNewUser}>
                new User
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style ={{backgroundColor:'black' , borderRadius:'1rem'}}>

              <h2 className="fw-bold mb-2 text-uppercase">WANT TO HIRE?</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Company ID' id='formControlLg' type='email' size="lg" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} />

              {/* <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}
              <MDBBtn outline className='mx-2 px-5' color='white' size='1g' type='button' onClick={()=>{loginCompany()}}>
                Sign In
              </MDBBtn>
              <MDBBtn outline className='mx-2 px-5' color='white' size='1g' type='button' onClick={handleNewCompany}>
                New User
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>      
    </MDBContainer>
    {/* <Footer/> */}
    </>
  );
}

export default Login;