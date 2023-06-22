FROM registry.access.redhat.com/ubi9/nodejs-18 as builder
ADD . $HOME
RUN npm ci --omit=dev && rm -rf .npm
RUN mkdir data && chgrp -R 0 data && chmod -R g=u data

FROM registry.access.redhat.com/ubi9/nodejs-18-minimal:1-56
COPY --from=builder $HOME $HOME
EXPOSE 3001 3002 3003
VOLUME [ "data" ]
CMD npm start
