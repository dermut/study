class Player {
  String name;
  int xp;
  String team;

  Player({
    required String name,
    required int xp,
    required String team,
  })  : this.name = name,
        this.xp = xp,
        this.team = team;

  void sayHello() {
    // Dart에서는 this를 사용하지 않는 것을 권장함.
    // 만약 sayHello에 겹치는 이름이 있으면 this를 사용할 필요는 있음.
    // this.name;
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player(name: 'jimin', xp: 1500, team: 'blue')..sayHello();
  var potato = player
    ..name = 'lalala'
    ..xp = 120000
    ..team = 'blue'
    ..sayHello();
}
