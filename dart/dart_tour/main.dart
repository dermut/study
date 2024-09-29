// 이 방법으로도 Nullable 처리가 가능하다
// String capitalizeName(String? name) {
//   if (name != null) {
//     return name.toUpperCase();
//   }
//   return 'ANON';
// }

String capitalizeName(String? name) => name?.toUpperCase() ?? 'ANON';

void main() {
  capitalizeName('jimin');
  capitalizeName(null);

  String? name;
  name ??= 'jimin';
  print(name);
}
