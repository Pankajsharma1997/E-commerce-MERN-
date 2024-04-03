import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const SignUp =()=> {
    return(
        <> 
        <div className='container col-md-6  mt-5 border border-danger   bg-light text-dark' > 
            <h1> Register </h1>
         
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <label className='mt-3 text-end' style={{ marginRight: '50px' }}> Name </label>
            <Form.Control type="text" placeholder="Enter the FullName" />
        </div>

        <div style = {{display:'flex',alignItems:'center'}}> 
               <label className='mt-3'style ={{marginRight:'55px'}}> Email </label>
                <Form.Control type="text" placeholder="Enter the Email" className='mt-3'></Form.Control> 
            </div>

            <div style = {{display:'flex',alignItems:'center'}}> 
               <label className='mt-3'style ={{marginRight:'30px'}}> Password  </label>
                <Form.Control type="Password"  className='mt-3 mb-3' placeholder="Enter the Email" />
            </div>
         
           <button className="btn btn-success btn-md m-5"> Register </button>
         



         </div>
         </>
    )
}
export default SignUp;