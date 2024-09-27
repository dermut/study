void main() {
  String? jimin = 'jimin';
  jimin = null;
  // jimin.length; // null이 될 수 있다는 컴파일러 경고가 뜸
  if (jimin != null) {
    jimin.isNotEmpty; // 조건문 안에 넣어서 바로 사용할 수 있도록 함
  }

  // 위의 공정을 이렇게 줄일 수 있다.
  jimin?.isNotEmpty;
}
