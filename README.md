# [유연한 소프트웨어를 만드는 설계 원칙](https://www.hanbit.co.kr/store/books/look.php?p_code=B3855421165)

함수형 프로그래밍의 고급 지식을 얻을 수 있는 책입니다.

책의 코드는 Scheme으로 작성되어 있습니다.

학습을 위해 JavaScript로 작성해보고 다시 Scheme으로 작성해서 실행합니다.

## install mit-scheme for arm64 mac with docker

```bash
docker pull z3r05um/mit-scheme:11.2-arm64
docker -it z3r05um/mit-scheme:11.2-arm64
```

### run source code

```bash
cat a.scm | docker run -i z3r05um/mit-scheme:11.2-arm64 /bin/bash -c 'cat > temp.scm && /opt/mit-scheme/bin/mit-scheme < temp.scm'
```

### run interactive shell with directory mounted ([scheme.sh](./scheme.sh))

```
docker run -it -v "$(pwd)"/:/host --entrypoint /bin/bash -w="/host" --env PATH='/opt/mit-scheme/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' z3r05um/mit-scheme:11.2-arm64

root:/host$ scheme < compose.scm
```
