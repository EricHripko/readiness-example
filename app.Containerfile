FROM node:16

# Install dependencies
COPY package.json .
RUN npm install --production

WORKDIR /app
HEALTHCHECK --interval=1s --timeout=1s \
  CMD curl -f http://localhost:8080/health || exit 1
CMD npm run serve
