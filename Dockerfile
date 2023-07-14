FROM node:latest-slim
 
WORKDIR /app
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .

CMD [ "node", "root/index.js" ]