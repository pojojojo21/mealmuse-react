# Getting Started

First naviagtive to this website https://nodejs.org/en/download/
and install node.js.

# Frontend setup
cd into project directory and frontend
run `npm install`

# Backend setup
cd into project directory and backend
run `pip install fastapi uvicorn pydantic pymongo`

Create environment variable for mongodb
`export MONGODB_URL="mongodb+srv://<username>:<password>@<url>/<db>?retryWrites=true&w=majority"`

# Start running backend for project
cd into project directory and backend
run `uvicorn main:app --reload`


If you find yourself running into SSL server error run this command in your terminal with your computer's python verison

`open "/Applications/Python <YOUR PYTHON VERSION>/Install Certificates.command"`


# Start running frontend for project
In a separate terminal, cd into project directory and frontend
run `npm start`
Open [http://localhost:3000]


# Use this website to remove the white background from icons
3. https://www.remove.bg/upload

# Run tests on app `npm test`

# Build app for production `npm run build` in the build folder


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
