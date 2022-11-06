# [유연한 소프트웨어를 만드는 설계 원칙](https://www.hanbit.co.kr/store/books/look.php?p_code=B3855421165)

![책 커버](./cover.jpg)

함수형 프로그래밍의 고급 지식을 얻을 수 있는 책입니다.

책의 코드는 Scheme으로 작성되어 있습니다.

Brendan Eich는 Scheme을 웹브라우저에 탑재하려다가 상사의 의견에 따라 Java와 비슷한 문법을 가지면서도 함수형 언어인 Scheme의 성질을 가진 JavaScript를 만들었습니다([https://en.wikipedia.org/wiki/Brendan_Eich](https://en.wikipedia.org/wiki/Brendan_Eich)).

따라서 학습을 위해 책의 Scheme 코드를 JavaScript로 작성해보는건 매우 합리적인 선택입니다.

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
