FROM node:16.15.0

WORKDIR /app

COPY ./folder1/ ./folder1
COPY ./folder2/ ./folder2
COPY ./shared/ ./shared
COPY ./package.*json ./

RUN npm --prefix ./folder1 install
RUN npm --prefix ./folder2 install
RUN npm install

ENV ENV_NAME="docker"
ENV REACT_WEB_SERVER_URL="http://web:3000"
RUN git config --global user.name "docker"
CMD npm start
