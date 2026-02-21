# Almabetter Capstone Project - Get Youtube Subscribers

This project is a backend application that provides APIs for managing YouTube Subscibers.

We have to create a backend api which will send the response in form of JSON, by using modular coding approach which contains having different files for the api connection, the database should be handled by another file.

The APIs provided by this application include the following:

✅GET [http://localhost:3000/subscribers] - Response with an array of subscribers(an Object).

✅GET [http://localhost:3000/subscribers/names] - Response with an array of subscribers(an Object with only two fields name and subscribedChannel).

✅GET [http://localhost:3000/subscribers/:id] - Response with a subscriber*(an object)* with given id & Response with status code 400 and Error message({message: error.message}) if id does not match.

## Prerequisites

Before running this application, you must have the following softwares:

Node.js https://nodejs.org/en

MongoDB https://www.mongodb.com/try/download/shell

## **How To Run Locally**
- To run this project locally, use the following command in your CLI:

1. Clone this repository:

```bash
 git clone https://github.com/MahaboobJeelani/Get-YouTube-subscribers
```

2. Install dependencies:

```bash
 npm i
```

3. Create a .env file and add monogodb uri

4. Create a database:

```bash
cd src
node createDatabase.js
```

5. Start the application:

```bash
 npm run start
```

6. Swagger API documentation

```swagger-URI
   https://get-youtube-subscribers-dtim.onrender.com/api-docs
```
- Go to any Browser and search localhost:3000

## Characteristics

- User can get the all subscribers.
- User can get the all subscriber with only name and subscribedchannel.
- user can get the subscriber by id.

## 🛠 Skills
 MongoDB | Nodejs | express | Mongoose
 
## NOTE 
 This capstone project is associated with <a href="https://www.almabetter.com">Almabetter</a>
