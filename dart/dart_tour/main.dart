// String sayHello(String name) => "Hello $name nice to meet you!";
String sayHello(String name) {
  // call api
  // perform calc
  return "Hello $name nice to meet you!";
}

// NamedParameter를 사용하기 위해 Default Value를 지정한 방법
// String sayHelloNamed({
//   String name = 'anon',
//   int age = 99,
//   String country = 'wakanda',
// }) {
//   return "Hello $name, you are $age, and you come from $country";
// }

// NamedParameter를 사용하기 위해 required로 지정한 방법
String sayHelloNamed({
  required String name,
  required age,
  required String country,
}) {
  return "Hello $name, you are $age, and you come from $country";
}

void main() {
  print(sayHelloNamed(age: 12, country: 'cuba', name: 'jimin'));
}
