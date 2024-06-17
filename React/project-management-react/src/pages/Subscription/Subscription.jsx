import SubscriptionCard from "./SubscriptionCard";


const paidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows"
];

const annualPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support", ,
    "Everything which monthly plan has",
];

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control",
];


const Subscription = () => {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-9">

                <SubscriptionCard
                 data={{ 
                    planName: "Free", 
                    fetures: freePlan,
                     planType: "FREE", 
                     price: 0,
                      buttonName: true ? "Current plan" : "Get Started",
                   }}
                      />
      <SubscriptionCard
       data={{ 
        planName: "Monthly Paid Plan", 
        fetures: paidPlan,
         planType: "MONTHLY", 
         price: 999,
          buttonName: true ? "Current plan" : "Get Started",
       }}/>
      <SubscriptionCard
       data={{ 
        planName: "Annual Paid Plan", 
        fetures: annualPlan,
         planType: "ANNUALLY", 
         price:8999 ,
          buttonName: true ? "Current plan" : "Get Started",
       }}/> 

     
      </div>
        </div>
    )
}

export default Subscription
