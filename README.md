# 스케줄

---

# 제목1

## 제목2

### 제목3

#### 제목4

##### 제목5

###### 제목6

<br>

---

### BlockQuote

> This is a first blockquote
>
> > This is second
>
> This is third

<br>

---

#### 1) 순서가 있는 목록

1. 목록1
   1. 목록 1_1
   2. 목록 1_2
2. 목록2
   1. 목록 2_1
   2. 목록 2_2
3. 목록3
4. 목록4

#### 2) 순서가 없는 목록

- 목록
  - 목록1_1
  - 목록1_2
- 목록2
  - 목록2_1
  - 목록2_2
- 목록3

<br>

---

### 표만들기

- |(vertical val) -> 테이블 표현
- : -> 정렬
- (---) -> 헤더와 셀 구분

|  이름  |  주소  |   전화번호    |
| :----: | :----: | :-----------: |
| 김서영 | 경기도 | 031-222-5555  |
| 김재준 | 경기도 | 031-2323-5555 |

<br>

---

### 코드(code)

#### 1) 인라인 코드(inline code)

- 백틱(`)으로 강조할 내용을 감싼다.
- repository에서 project의 설명을 부여할 때 `README.md`를 사용한다.

#### 2) 블럭코드 (block code)

- 백틱(`) 3개로 html, css, javascript 등 코드를 작성할 때 사용한다.

```java
public static void main(String[] args) {
  System.out.println("hello world");
}
```

<br>

---

### 글자 강조

**굵은 글씨**  
_이텔릭_  
_이텔릭_  
~~취소선~~  
<u>밑줄</u>

<br>

---

### 링크(Links)

[naver](https://www.naver.com/) 네이버로 이동합니다,,,  
[link](a.txt) 메모장 보기
다음 홈페이지 : <https://www.daum.net/>

<br>

---

### 이미지(Image)

![브숏](http://catfriends.co.kr/web/product/big/201907/a77010669e18e94028febeaa54893ecf.jpg)  
[![춘배](./images/2.png)](https://www.google.com/)

<br>

---

### 원시 HTML

<img src='./images/1.png' alt='Afterglow' width='500' height='500'>
