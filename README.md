# Glideride Online - Booking Platform

Welcome to Glideride Online, your one-stop platform for booking exciting rides. This repository contains the source code for our booking platform built using React and tailored for a seamless user experience.

## Features

- **User Authentication**: Secure user registration and login through Google authentication, with MongoDB as the backend.

- **Service Selection**: Choose from a range of rental services, including 4-hour, 6-hour, and 8-hour options, each with its pricing and security deposit.

- **Date and Time Selection**: Pick your preferred date and time slot, ensuring you select a valid date and time based on the current date.

- **Personal Details**: Capture user information, including name, email, age, and gender.

- **Email Confirmation**: Send confirmation emails to users with booking details.

- **Attractive UI**: Utilize Tailwind CSS for a visually appealing and responsive user interface.

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/GlideRide-online/Online-Booking-System
   cd client npm i
   cd server npm i

   ```

2. Setting Up the Environment Variables

   Frontend

   ```
   RAZORPAY_KEY_ID=YOUR_ID
   EMAIL_USERNAME=contact@glideride.online
   EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD
   EMAIL_SERVER=smtp.elasticemail.com
   EMAIL_PORT=2525
   EMAIL_SECURITY=YOUR_SECURITY_KEY
   ```

   Backend

   ```
   PORT=4000
   MONOGODB_URL=mongodb+srv://username:password@cluster0.wxdzqyw.mongodb.net
   GOOGLE_CLIENT_ID=YOUR_GOOGLE_ID
   GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT
   RAZORPAY_KEY_ID=YOUR_ID
   RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET
   ```

3. Getting the IDS for 3rd parties like Google Auth using PassportJs, Razorpay, SMTP mail

   Watch these YouTube videos to understand how to get your IDs and keys for a particular lib.

   Razorpay

   https://www.youtube.com/watch?v=eC73edQ5jmw&ab_channel=CyberWolves

   Google Auth using Passport Js

   https://youtu.be/Q0a0594tOrc?si=PToPL3t4jQOeqXEr

   Smtp Mail (Confirmation if the user successfully books a ride)

   https://www.youtube.com/watch?v=wUK40U6sPH0&ab_channel=BuggyCoder

4. Start in Developemt Mode

   ```
   cd server npm run server

   cd client npm start

   ```

5. Visit http://localhost:3000 in your browser to use the application.

## Usage

1. Register and log in to your Glideride Online account using Google authentication.
2. Choose a service, select a date, and pick a time slot.
3. Provide your personal details and proceed to booking.
4. Receive a confirmation email with your booking details.

## Contributing

Feel free to contribute to this project by opening issues or creating pull requests. Your feedback and contributions are valuable.

## Acknowledgments

We would like to extend our gratitude to the following libraries and frameworks that have contributed to the success of Glideride Online:

- [Ant Design](https://ant.design/): Used for displaying user-friendly messages and notifications.

- [Tailwind CSS](https://tailwindcss.com/): Leveraged for creating an attractive and responsive user interface.

- [Passport.js](http://www.passportjs.org/): Facilitated secure user authentication with Google integration.

- [Razorpay](https://razorpay.com/): Enabled secure payment processing for booking services.

Thank you for choosing Glideride Online for your ride bookings! We hope you have a fantastic experience. If you have any questions or need assistance, don't hesitate to contact us.

## Screenshots

![Screenshot 1](screenshots/1.png)

![Screenshot 2](screenshots/2.png)

![Screenshot 3](screenshots/3.png)

![Screenshot 4](screenshots/4.png)

![Screenshot 5](screenshots/5.png)

![Screenshot 6](screenshots/6.png)

<!-- Add more screenshots as needed -->
