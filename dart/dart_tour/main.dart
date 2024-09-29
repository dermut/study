void main() {
  var name = 'jimin';
  var age = 30;
  var greeting =
      "Hello everyone, my name is $name and I'm ${age + 2}, nice to meet you!";
  print(greeting);

  var oldFriends = [
    'jimin',
    'seyoung',
  ];
  var newFriends = [
    'simba',
    'haku',
    for (var friend in oldFriends) "💘 $friend"
  ];
  print(newFriends);
}
