FROM node:16

# Install dependencies
COPY package.json .
RUN npm install --dev

WORKDIR /app
CMD npm run test
