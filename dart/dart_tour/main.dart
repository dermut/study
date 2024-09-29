// Optional Positional Parameter
String sayHello(String name, int age, [String? country = 'cuba']) =>
    'Hello $name, you are $age years old from $country';

void main() {
  var results = sayHello('jimin', 2);
  print(results);
}
