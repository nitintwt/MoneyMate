 # BACKEND CODE :- https://github.com/nitintwt/MoneyMate-Backend

MoneyMate is an innovative finance tracker web application designed to simplify expense tracking and budgeting with an AI powered chat interface. The project introduces a seamless way for users to log expenses and income through natural language input, making financial management intuitive and effortless. Unlike traditional finance apps that require manual data entry, MoneyMate leverages AI to understand user inputs and update financial records automatically.

One of the standout innovations in MoneyMate is its subscription detection system. By integrating with Gmail via Google APIs, the system fetches invoices and receipts from emails, extracts relevant financial data using AI, and categorizes subscriptions based on renewal dates, amounts, and frequency. This ensures that users never miss a renewal or accidental overcharges. 

MoneyMate provides a range of free features, including expense tracking, income logging, AI powered categorization, and a comprehensive financial dashboard. The frontend is built using React.js and Tailwind CSS, ensuring a sleek and responsive user experience. The backend is powered by Express.js and Node.js, with Mongoose and MongoDB handling data storage efficiently. BullMQ is used for queue management, ensuring smooth background processing of tasks like email parsing. Zod ensures input validation, enhancing data integrity and security.

The application also integrates Razorpay for seamless payment handling, Nodemailer for email notifications, and Groq AI for intelligent financial insights. On the infrastructure side, MoneyMate leverages AWS services, including ECR (Elastic Container Registry), ECS (Elastic Container Service), Load Balancer, and API Gateway, making it highly scalable and secure.

While MoneyMate already offers a robust free experience, there is significant scope for premium features. With a strong technology stack and a passionate approach to innovation, MoneyMate has immense potential to revolutionize personal finance management.
