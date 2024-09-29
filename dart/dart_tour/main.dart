class Player {
  final String name;
  int xp, age;
  String team;

  Player({
    required this.name,
    required this.xp,
    required this.team,
    required this.age,
  });

  void sayHello() {
    // Dart에서는 this를 사용하지 않는 것을 권장함.
    // 만약 sayHello에 겹치는 이름이 있으면 this를 사용할 필요는 있음.
    // this.name;
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player(
    name: "jimin",
    xp: 1500,
    team: 'red',
    age: 12,
  ); // new는 필수가 아니며, 이렇게하면 인스턴스가 생성됨
  player.sayHello();
  var player2 = Player(
    name: "lynn",
    xp: 2500,
    team: 'blue',
    age: 13,
  );
  player2.sayHello();
}
