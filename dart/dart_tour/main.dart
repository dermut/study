class Player {
  final String name;
  int xp;
  String team;

  Player.fromJson(Map<String, dynamic> playerJson)
      : name = playerJson['name'],
        xp = playerJson['xp'],
        team = playerJson['team'];

  void sayHello() {
    // Dart에서는 this를 사용하지 않는 것을 권장함.
    // 만약 sayHello에 겹치는 이름이 있으면 this를 사용할 필요는 있음.
    // this.name;
    print("Hi my name is $name");
  }
}

void main() {
  var apiData = [
    {
      "name": "jimin",
      "team": "red",
      "xp": 0,
    },
    {
      "name": "seyoung",
      "team": "red",
      "xp": 0,
    },
    {
      "name": "simba",
      "team": "red",
      "xp": 0,
    },
    {
      "name": "haku",
      "team": "red",
      "xp": 0,
    },
  ];
  apiData.forEach((playerJson) {
    var player = Player.fromJson(playerJson);
    player.sayHello();
  });
}
