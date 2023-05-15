FROM node:18

WORKDIR /SISTEMSKA_ADMINISTRACIJA

COPY package*.json ./

RUN npm install

COPY . /SISTEMSKA_ADMINISTRACIJA

EXPOSE 3000

CMD ["npm", "run", "dev"]
