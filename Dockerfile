FROM node:14-alpine
ENV WORKDIR /usr/app
USER node

COPY --chown=node:node . ${WORKDIR}
WORKDIR ${WORKDIR}
RUN yarn install 


ENV NODE_ENV=production
RUN yarn build

EXPOSE 3000
CMD yarn start