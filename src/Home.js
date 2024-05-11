import React from 'react'
import { Button} from "@chakra-ui/react"
// import Card from "./Card"
import axios from "axios"
// import Razorpay from "Razorpay"


function Home() {

    const checkoutHandler = async (amount) => {
        
        const {data:{key}} = await axios.get("http://www.localhost:4000/api/getkey")

        const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
        });


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
  return (
    <div>
      {/* <Button type = "submit" disabled = {!getIsFormValid()} onClick = {() => checkoutHandler(200)}>Proceed to Payment</Button> */}
    </div>
  )
}

export default Home
