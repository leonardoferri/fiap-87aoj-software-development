FROM node:18-alpine
RUN mkdir -p /home/node/app/node-modules && chown -R node:node /home/node/app
WORKDIR /home/node/app/instrumento
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD ["npm", "start"]