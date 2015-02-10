FROM dockerfile/nodejs

MAINTAINER Rohit Ghatol

RUN mkdir /home/node

WORKDIR /home/node

ENV ENVIRONMENT prod
ENV MONGOSOUP_URL mongodb://db/todo

ADD package.json /home/node/package.json
ADD web.js /home/node/web.js

RUN npm install

ADD . /home/node

CMD ["node","web.js"]
