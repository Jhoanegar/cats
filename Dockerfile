# pull official base image
FROM node:14.15.4-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]