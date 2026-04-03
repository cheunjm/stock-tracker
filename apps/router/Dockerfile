FROM ghcr.io/apollographql/router:v2.6.4

COPY router.yaml /dist/config/router.yaml

EXPOSE 4002

CMD ["--config", "/dist/config/router.yaml", "--log", "warn"]
