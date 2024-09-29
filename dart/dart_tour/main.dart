mixin Strong {
  final double strengthLevel = 1500.99;
} // mixin

mixin QuickRunner {
  void runQuick() {
    print('ruuuuuuun!');
  }
}

mixin Tall {
  final double height = 1.99;
}

class Horse with Strong, QuickRunner {}

enum Team { blue, red }

class Human {
  final String name;
  Human(this.name);
  void sayHello() {
    print("Hi my name is $name");
  }
}

class Player extends Human with Strong, QuickRunner, Tall {
  final Team team;

  Player({required this.team, required String name}) : super(name);

  @override
  void sayHello() {
    super.sayHello();
    print(' and I play for ${team}');
  }
}

void main() {
  var player = Player(team: Team.red, name: 'jimin');
  player.sayHello();
}
