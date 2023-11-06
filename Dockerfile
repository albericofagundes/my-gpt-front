FROM node:16.14 AS build

ENV TZ=America/Sao_Paulo

WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos de origem da aplicação para o contêiner
COPY . .

RUN npm build

# FROM nginx:alpine

# COPY --from=build /app/dist/my-gpt-front /usr/share/nginx/html


EXPOSE 10000

# CMD ["nginx", "-g", "daemon off;"]

CMD ["npm", "start"]

