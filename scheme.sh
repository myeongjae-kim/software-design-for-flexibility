#!/bin/bash

docker run -it -v "$(pwd)"/:/host --entrypoint /bin/bash -w="/host" --env PATH='/opt/mit-scheme/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' z3r05um/mit-scheme:11.2-arm64
