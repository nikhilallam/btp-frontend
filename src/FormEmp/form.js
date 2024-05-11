import "./form.css";
import { useRef, useState } from "react";
import { validateEmail , clearForm } from "./utils.js";
// import { DatePicker } from "react-date-picker";
import axios from "axios"
import { useNavigate } from "react-router";

function App() {
  const [firstName, setFirstName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 
  const [Trade, setTrade] = useState("");
  const [idProof, setIdProof] = useState(null);

  const [date , setDate] = useState("");
  const dateInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const clear= () => {
    
    clearForm(setFirstName, setpassword, setEmail, setPhoneNumber, setTrade);
  };

  const checkoutHandler = async (amount) => {
        
    const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
    });

    let responseData ;
    await fetch('http://localhost:4000/api/paymentverification' , {
      method:'POST',
      headers : {
        Accept:'application/form-data',
        'Content-Type' : 'aplication/json',
      },
      body : JSON.stringify({
        firstName:firstName,
        password:password,
        email:email,
      })
    }).then((response) => response.json()).then((datap)=>responseData = datap);
      console.log(responseData);
      if(responseData.success){
        localStorage.setItem('auth-token' , responseData);
        window.location.replace('/dashboard');
      }    


    const options = {
        key, 
        amount: order.amount, 
        upi_link:true,
        currency: "INR",
        name: "Rozgaar app",
        description: "app payment page testing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png",
        order_id: order.id, 
        callback_url: "http://localhost:4000/api/employeeregistration",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#121212"
        },
        remember_customer:true,
        backdropsclose:true,
        send_sms_hash:true,
        


    };
    const razor = new window.Razorpay(options);
    razor.open();       

    // console.log({data})
}

const employeeregistration = async (e) => {
  e.preventDefault();
  console.log("schek")
  try {
      console.log("comgnere", {
        email: email,
              password: password,
              phoneNumber,
              name: firstName,
              date,
              trade: Trade,
      });
      let responseData;
      let response = await fetch('http://localhost:4000/employeeregistration' , {
          method : 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              password: password,
              phoneNumber,
              name: firstName,
              date,
              trade: Trade,
          }),
          mode: 'cors' 
      });
      console.log(response)
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        navigate('/dashboard');
      } else {
      return alert('existing user is found with same email address');
      }
  } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while processing your request.");
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && password && email && Trade !== "" && idProof){
      console.log(`Make Payment`);
    }
    else if (firstName && password && email && Trade !== "") {
      alert("Please upload a valid ID proof.");
    } else {
      alert("Please fill out all details.");
    }
  };

  const handleIDProofUpload = (e) => {
    const file = e.target.files[0];
    setIdProof(file);
  };

  const getIsFormValid = () => {
    return (
      firstName && validateEmail(email) && phoneNumber && Trade !== "Trade"
    );
  };

  return (
    <div className="App">
      <form onSubmit={employeeregistration}>
        <fieldset>
          <h2>Employee Registration Form</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              name="firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Password </label>
            <input
              value={password}
              name = "password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>

          <div className="Field">
            <label>
              Phone number <sup>*</sup>
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Phone number"
            />
          </div>

          <div className="Field">
            <label>
              Date <sup>*</sup>
            </label>
            <input type="date" onChange={handleChange} ref={dateInputRef} />
          </div>

          <div className="Field">
            <label>
              Trade <sup>*</sup>
            </label>
            <select value={Trade}  onChange={(e) => setTrade(e.target.value)}>
              <option disabled value="">
                Select your trade
              </option>
              <option value="Painter">Painter</option>
              <option value="Plumber">Plumber</option>
              <option value="Fitter">Fitter</option>
            </select>
          </div>

          <div className="Field">
            <label>
              Upload valid ID proof <sup>*</sup>
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              // name="idproof"
              onChange={handleIDProofUpload}
            />
          </div>

          <button type = "submit">
            Proceed To Payment
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
