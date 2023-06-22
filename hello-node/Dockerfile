FROM registry.access.redhat.com/ubi9/nodejs-18 as builder
ADD . $HOME
RUN npm ci --omit=dev && rm -rf .npm

FROM registry.access.redhat.com/ubi9/nodejs-18-minimal:1-56
COPY --from=builder $HOME $HOME
EXPOSE 3000
CMD npm start
