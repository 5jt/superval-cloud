# use X-Eyes to test connection from container to host display
# http://mamykin.com/posts/running-x-apps-on-mac-with-docker/

FROM ubuntu:focal

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        x11-apps

CMD ["xeyes"]