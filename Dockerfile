FROM node:14-alpine
ENV WORKDIR /usr/app
USER node

COPY --chown=node:node . ${WORKDIR}
WORKDIR ${WORKDIR}
RUN yarn install 

RUN yarn build

EXPOSE 3000
CMD NODE_ENV=production yarn start