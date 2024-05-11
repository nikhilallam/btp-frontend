import "./form.css";
import {  useState } from "react";
import { validateEmail } from "./utils.js";
import axios from "axios"
import { useNavigate } from "react-router";


function App() {
  const [CompanyName, setCompanyName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [TimePeriod, setTimePeriod] = useState("");
 
  const [Trade, setTrade] = useState("");
  const [Wages, setWages] = useState("");
  const [idProof, setIdProof] = useState(null);

  const navigate = useNavigate();

  // const [setDate] = useState("");
  // const dateInputRef = useRef(null);

  // const handleChange = (e) => {
  //   setDate(e.target.value);
  // };

  // const clear= () => {
    
  //   clearForm(setCompanyName, setLastName, setEmail, setPhoneNumber, setTrade, setTimePeriod);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(CompanyName && lastName && email && Trade !== "" && idProof){
      // <Home/>
      console.log(`Make Payment`);
    }

    else if (CompanyName && lastName && email && Trade !== "") {
      alert("Please upload a valid ID proof.");
    } else if(!CompanyName || !lastName || !email ||  Trade === ""){
      alert("Please fill out all details.");
    }
    
  };

  const handleIDProofUpload = (e) => {
    const file = e.target.files[0];
    setIdProof(file);
  };

  const getIsFormValid = () => {
    return (
      CompanyName && validateEmail(email) && phoneNumber && Trade !== "Trade"
    );
  };

  const checkoutHandler = async (amount) => {
        
    const {data:{key}} = await axios.get("http://www.localhost:4000/api/getkey")

    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
    });

    let responseData ;
    await fetch('http://localhost:4000/signup' , {
      method:'POST',
      headers : {
        Accept:'application/form-data',
        'Content-Type' : 'aplication/json',
      },
      body : JSON.stringify({
        CompanyName:CompanyName,
        email:email,
        phoneNumber:phoneNumber,
      })
    }).then((response) => response.json()).then((data)=>responseData = data);

      if(responseData.success){
        localStorage.setItem('auth-token' , responseData);
        window.location.replace('/');
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
        callback_url: "http://localhost:4000/api/paymentverification",
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

const companyregistration = async (e) => {
  e.preventDefault();
  try {
      let responseData;
      let response = await fetch('http://localhost:4000/companyregistration' , {
          method : 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              phoneNumber,
              name: CompanyName,
              timePeriod: TimePeriod,
              owner: lastName,
              trade: Trade,
              wages: Wages
          }),
          mode: 'cors' 
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem("company", JSON.stringify(responseData.company));
        navigate('/payment');
      } else {
        return alert('existing company is found with same email address');
      }
  } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while processing your request.");
  }
}

  return (
    <div className="App">
      <form onSubmit={companyregistration}>
        <fieldset>
          <h2>Company Registration Form</h2>
          <div className="Field">
            <label>
              Company name <sup>*</sup>
            </label>
            <input
              value={CompanyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              placeholder="Company name"
            />
          </div>
          <div className="Field">
            <label>Owner <sup>*</sup></label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Owner name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              type="email"
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
              Time Period <sup>*</sup>
            </label>
            <input
              value={TimePeriod}
              onChange={(e) => {
                setTimePeriod(e.target.value);
              }}
              placeholder="Enter time period"
            />
          </div>

          {/* <div className="Field">
            <label>
              Date <sup>*</sup>
            </label>
            <input type="date" onChange={handleChange} ref={dateInputRef} />
          </div> */}

          <div className="Field">
            <label>
              Required Trade <sup>*</sup>
            </label>
            <select value={Trade} onChange={(e) => setTrade(e.target.value)}>
              <option disabled value="">
                Select required trade
              </option>
              <option value="Painter">Painter</option>
              <option value="Plumber">Plumber</option>
              <option value="Fitter">Fitter</option>
            </select>
          </div>

          <div className="Field">
            <label>
              Minimum Wages <sup>*</sup>
            </label>
            <select value={Wages} onChange={(e) => setWages(e.target.value)}>
              <option disabled value="">
                Select Minimum Wages
              </option>
              <option value="Rs.5000-Rs.7000">Rs.5000-Rs.7000</option>
              <option value="Rs.7000-Rs.9000">Rs.7000-Rs.9000</option>
              <option value="Rs.9000-Rs.12000">Rs.9000-Rs.12000</option>
            </select>
          </div>

          <div className="Field">
            <label>
              Upload valid ID proof <sup>*</sup>
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleIDProofUpload}
            />
          </div>

          <button type = "submit">
            Proceed To Payment
          </button>
          {/* <Home></Home> */}
          {/* <Button type = "submit" disabled = {!getIsFormValid()} onClick = {() => checkoutHandler(200)}>Proceed to Payment</Button> */}
          {/* <Home/> */}
        </fieldset>
      </form>
    </div>
  );
}

export default App;
