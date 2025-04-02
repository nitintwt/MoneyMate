import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios';
import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Premium() {
  const [cookies , setCookies]= useCookies()
  const navigate = useNavigate()

      // Function to load script and append in DOM tree.
      const loadScript = (src) => new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
          console.log('Razorpay loaded successfully');
          resolve(true);
        };
        script.onerror = () => {
          console.log('Error in loading Razorpay');
          resolve(false);
        };
        document.body.appendChild(script);
      });
    
      // Load Razorpay checkout modal script
      const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
          console.log('Razorpay SDK failed to load. Are you online?');
          return;
        }
      }
    
      useEffect(() => {
        console.log('Loading Razorpay script');
        displayRazorpay();
      }, []);
    
      const handleStart = async (id) => {
        try {
          // Create order
          const order = await axios.post(`${import.meta.env.VITE_AWS_API}/api/v1/payment/order`, {subscriptionId: id});
          console.log(order)
          const paymentObject = new window.Razorpay({
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            order_id: order.data.data.id,
            ...order.data.data,
            handler: async function (response) {
              try {
                const verify = await axios.post(`${import.meta.env.VITE_AWS_API}/api/v1/payment/verify`, {
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                  userId: cookies[0]?.userData?._id
                });
                setCookies("userData", {...cookies.userData , paidUser:true})
                navigate("/dashboard")
              } catch (error) {
                console.log("Verification error");
              }
            }
          });
    
          paymentObject.open();
        } catch (error) {
          console.log("Error while creating order", error);
        }
      }

  return (
    <div className="container mx-auto py-12 px-4 bg-gradient-to-b from-black to-blue-950 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-blue-400 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upgrade to Premium for advanced features and unlock the full potential of MoneyMate
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card className="border-2 border-gray-200 shadow-md bg-blue-950 text-white">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold">Free</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className=" ml-2">/month</span>
            </div>
            <CardDescription className="mt-4">Basic expense tracking for individuals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FeatureItem available={true} feature="Basic expense tracking" />
            <FeatureItem available={true} feature="Up to 50 monthly transactions" />
            <FeatureItem available={true} feature="Basic spending reports" />
            <FeatureItem available={true} feature="Single device sync" />
            <FeatureItem available={false} feature="AI-powered insights" />
            <FeatureItem available={false} feature="Budget forecasting" />
            <FeatureItem available={false} feature="Custom categories" />
            <FeatureItem available={false} feature="Priority support" />
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg py-6 ">
              Current Plan
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="border-2 border-blue-500 shadow-xl relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-medium">
            RECOMMENDED
          </div>
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold">Premium</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold text-blue-600">$9.99</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            <CardDescription className="mt-4 text-gray-500">
              Advanced features for serious money management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FeatureItem available={true} feature="Everything in Free" />
            <FeatureItem available={true} feature="Unlimited transactions" />
            <FeatureItem available={true} feature="AI-powered spending insights" />
            <FeatureItem available={true} feature="Budget forecasting" />
            <FeatureItem available={true} feature="Custom categories & tags" />
            <FeatureItem available={true} feature="Multi-device sync" />
            <FeatureItem available={true} feature="Export data (CSV, PDF)" />
            <FeatureItem available={true} feature="Priority support" />
          </CardContent>
          <CardFooter>
            <Button onClick={()=> handleStart(1)} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">Upgrade to Premium</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left text-white">
          <FaqItem
            question="Can I cancel my subscription anytime?"
            answer="Yes, you can cancel your premium subscription at any time. You'll continue to have premium access until the end of your billing period."
          />
          <FaqItem
            question="How does the AI-powered insights work?"
            answer="Our AI analyzes your spending patterns to identify trends, suggest savings opportunities, and help you make better financial decisions."
          />
          <FaqItem
            question="Is my financial data secure?"
            answer="Absolutely. We use bank-level encryption to protect your data. We never share your personal information with third parties."
          />
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ available, feature }) {
  return (
    <div className="flex items-center">
      {available ? (
        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
      )}
      <span className={available ? "text-blue-500" : "text-gray-400"}>{feature}</span>
    </div>
  )
}

function FaqItem({ question, answer }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="font-semibold text-lg mb-2">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  )
}


