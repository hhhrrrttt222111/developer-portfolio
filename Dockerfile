FROM node:18-bullseye-slim

RUN mkdir -p /app
COPY . /app
COPY start.sh /start.sh
RUN chmod 755 /start.sh 

WORKDIR /app

EXPOSE 5173
EXPOSE 3000

CMD ["/start.sh"]