<div align="center">
  <h1>MyMovies</h1>
</div>

## :star2: About the Project

This repository contains a frontend app to fetch Themoviedb backend., it was created using:

<ul>
<li>React + Vite</li>
<li>React Context</li>
<li><a href="https://reactrouter.com/en/main">React Router</a></li>
<li><a href="https://firebase.google.com/">Firebase</a></li>
<li>HTML</li>
<li>CSS</li>
<li>TypeScript</li>
</ul>

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="https://github.com/jesusalberto11/MyMovies/blob/main/src/assets/images/app_image_1.png" alt="App_Image_1" title="First section" />
</div>

<div align="center"> 
  <img src="https://github.com/jesusalberto11/MyMovies/blob/main/src/assets/images/app_image_2.png" alt="App_Image_2" title="Second section"/>
</div>

<div align="center"> 
  <img src="https://github.com/jesusalberto11/MyMovies/blob/main/src/assets/images/app_image_3.png" alt="App_Image_3" title="Third section"/>
</div>

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

- To run this project you need:
  - NodeJS
  - Visual Studio Code
  - Themoviedb API key 
  - Firebase project API keys

Once you have that, you're ready to go

<!-- Installation and Run Locally -->

### :running: Installation and Run Locally

Clone the project

```bash
  git clone https://github.com/jesusalberto11/MyMovies
```

Go to the project directory

```bash
  cd MyMovies
```

Install the dependencies

```bash
  npm install
```

Get your API key from themoviedb

- <a href="https://developer.themoviedb.org/reference/intro/getting-started">Get key here</a>

#### Once you have the key you should create a .env file at the root folder and write this inside:
##### Note: You should remplace "YOUR API KEY HERE" with your API key

```bash
  VITE_MOVIE_API_KEY="YOUR API KEY HERE"
```

Get you firebase project API keys

- <a href="https://firebase.google.com/">Get keys here</a>

#### Once you have your project keys, IN THE SAME .env file, you shoud put your API keys like this:

```bash
  VITE_FIREBASE_API_KEY="YOUR API KEY"
  VITE_FIREBASE_AUTH_DOMAIN="YOUR AUTH DOMAIN"
  VITE_FIREBASE_PROJECT_ID="YOUR PROJECT ID"
  VITE_FIREBASE_STORAGE_BUCKET="YOUR STORAGE BUCKET"
  VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR MSG SENDER ID"
  VITE_FIREBASE_APP_ID="YOUR FIREBASE APP ID"
```

Then you're ready to go

Launch the development server

```bash
  npm run dev
```

<!-- Contributing -->

## :wave: Contributing

Contributions are always welcome!

Please send a message if you're interested in contributing to the proyect.

<!-- Contact -->

## :handshake: Contact

Jesus Alberto - [@LinkedIn](https://www.linkedin.com/in/jesus-alberto-morales-rico-7092a9227/)
