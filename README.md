# FESTIVALIA

![image](https://github.com/user-attachments/assets/38c5e0ae-6c16-45a6-a80b-3b19dc93d9e8)

https://festivalia-eventapp.vercel.app/

## INTRODUCTION
Festivalia is a web and mobile application that allows users to easily discover events happening in their area, helping them make the best use of their time... with great music!

## PROJECT REQUIREMENTS
### Backend 
- (Express, JSON Web Token, Bcrypt, Mongoose, CORS, Nodemon)
- Create a user model that stores information such as name, email, and password (hashed).
- Create an event model with information such as title, date, location, and description, and an array of attendees that will be user IDs.
- Implement middleware that verifies the presence and validity of the token on protected routes. Protect routes that allow actions exclusive to authenticated users.
- File uploads (e.g., avatars or event posters).
- Controllers that organize information according to specific criteria.
- Controllers that insert an element from one collection into another.

### Frontend
- Implement a login form for users to access the system. If the user does not exist, register a new user. After registration, log in the user to save an unnecessary step.
- Display a list of available events. Authenticated users will see additional options to create events and confirm attendance.
- Allow users to explore details of each event and see the list of attendees.
- Implement proper error handling in both the frontend and backend. All frontend forms should have error control to inform the user of what happened in any case.
- All asynchronous processes should show a loading indicator to the user, providing immediate feedback for their action.
- Pay close attention to componentization; avoid code repetition at all times.
- Reuse fetch requests through a single function that allows all requests to be made using the same method.

## Additional features added
- Email sending
- Password strength verification
- Create different folders in Cloudinary

## Possible features to add
- Ticketing
- filter to organize events by date and location
- modify created events
  

## Technologies used
- Vite
- Node.js
- mongoDB
- JavaScript
- html5
- CSS3
- Insomnia
- Vercel


## Dependencies
- bcrypt
- cloudinary
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- multer
- multer-storage-cloudinary
- nodemailer
- nodemon
  

## Installation
To start the project, it is necessary to install all dependencies. Your package.json should look like the following image:
![image](https://github.com/user-attachments/assets/c3db8495-da00-4ae0-aead-161c8136ae07)






>[!IMPORTANT]
> Since there is no frontend, all requests need to be made using software that simulates it, such as INSOMNIA or POSTMAN.
> The database IP is universally accessible at 0.0.0.0/0.

>[!NOTE]
> do not forget to init project in local
>```js
>npm run dev
>```


## SKETCH WIREFRAMES
![image](https://github.com/user-attachments/assets/7da8b824-d2fb-40cc-bf3e-b306e036b5e2)


## SCREENSHOTS
![image](https://github.com/user-attachments/assets/80eedbff-a146-46d0-a7d6-00efd9770bf3)
![image](https://github.com/user-attachments/assets/73a118b3-03d3-43a2-adb7-146edcd7c952)
![image](https://github.com/user-attachments/assets/07403600-cd6e-4c34-8c67-941595ec0012)
![image](https://github.com/user-attachments/assets/5a298569-b9b9-4f36-a86c-4200a95bb1a6)
![image](https://github.com/user-attachments/assets/5658a34f-dcba-496e-a161-a18aae379401)
![image](https://github.com/user-attachments/assets/e776042a-3025-4ca7-abcc-287a71a86c9e)






