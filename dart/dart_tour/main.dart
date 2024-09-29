abstract class Human {
  void walk();
}

class Coach extends Human {
  void walk() {
    print('The coach is walking');
  }
}

enum Team { red, blue }

enum XPLevel { beginner, medium, pro }

class Player extends Human {
  String name;
  XPLevel xp;
  Team team;

  Player({
    required String name,
    required XPLevel xp,
    required Team team,
  })  : this.name = name,
        this.xp = xp,
        this.team = team;

  void walk() {
    print('I\'m walking');
  }

  void sayHello() {
    // Dart에서는 this를 사용하지 않는 것을 권장함.
    // 만약 sayHello에 겹치는 이름이 있으면 this를 사용할 필요는 있음.
    // this.name;
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player(name: 'jimin', xp: XPLevel.medium, team: Team.blue)
    ..sayHello();
  var potato = player
    ..name = 'lalala'
    ..xp = XPLevel.pro
    ..team = Team.red
    ..sayHello();
}
