var workout = function() {};
console.log(workout instanceof Function);


function User() {
}
var user = new User();


// new를 활용한 Object 생성자 호출
// 객체 래퍼(Wrapper)를 사용하는 방법인데, 권장하지 않는 방법
var user = new Object();
user.name = 'Sunny';
user.interests = ['Traveling', 'Swimming'];
user.greeting = function () {
    console.log('Hi, I\'m '+ this.name + '.');
};
user.greeting(); // Hi, I'm Sunny. 출력

// 객체 리터럴을 이용한 user 생성
var user = {
    name: 'Sunny',
    interests: ['Traveling', 'Swimming'],
    greeting: function () {
        console.log('Hi, I\'m '+ this.name + '.');
    }
}
user.greeting(); // Hi, I'm Sunny. 출력

// ES5부터 객체 리터럴에서 게터와 세터 접근을 지원한다.
var user = {
    get role() {
        return 'Engineer'
    }
}
user.role; // Engineer

// 생성자 함수 생성
function User(name, interests) {
    this.name = name;
    this.interests = interests;
    this.greeting = function () {
        console.log('Hi, I\'m ' + this.name + '.');
    }
}
// user 객체를 생성하는 데 new를 활용해 생성자 함수 호출
var user = new User('Sunny', ['Traveling', 'Swimming']);
user.greeting(); // Hi, I'm Sunny. 출력

// 자바스크립트는 관대해서 생성자를 호출할 때 괄호 생략 가능.
// 하지만 어떤 인자도 전달하지 않게 된다.
var user = new User;
console.log(user.name); // undefined 출력

// 위에서 생성한 User 생성자 함수의 프로토타입과 Object.create() 메소드 활용
var user = Object.create(User.prototype, {
    name: {value: 'Sunny'},
    interests: {value: ['Traveling', 'Swimming']}
});
user.greeting(); // Uncaught TypeError: user.greeting() is not a function 출력

// 프로토타입 객체에 greeting 함수 추가
User.prototype.greeting = function() {
    console.log('Hi, I\'m ' + this.name + '.');
}
user.greeting(); // Hi, I'm Sunny. 출력

// 객체를 반환하는 생성 함수 사용
function createUser(name, interests) {
    var user = {};
    user.name = name;
    user.interests = interests;
    user.greeting = function() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
    return user;
}
// 매개변수를 이용해 생성 함수 호출
var user = createUser('Sunny', ['Traveling', 'Swimming']);
user.greeting(); // Hi, I'm Sunny. 출력

// ES6 User 클래스 생성
class User {
    // User 생성자 함수와 상응
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    // User.prototype.greeting과 같다
    greeting() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
}
let user = new User('Sunny', ['Traveling', 'Swimming']);
user.greeting(); // Hi, I'm Sunny. 출력

// 클래스 표현식 활용
let User = class {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
}


// 객체 프로퍼티 접근법
// 자바처럼 .을 이용한 점 표기법 또는 대괄호 표기법을 사용할 수 있다.
// 대괄호 표기법은 매우 흥미롭다.
var obj = {};
obj['100'] = 'one hundred';
// 숫자 100은 내부적으로 toString() 메소드를 호출해 '100'으로 변환된다.
console.log(obj[100]); // 'one hundred' 출력
// foo와 bar 모두 문자열 '[object Object]'로 변환
obj[foo] = 'Foo';
console.log(obj[bar]); // 'Foo' 출력

// 자바스크립트에서 Object.defineProperty, Object.defineProperties를 사용해 객체의 프로퍼티를 수정할 수 있다.
function User(name, department) {
    var _department = department;
    var _name = name;
    Object.defineProperty(this, 'name', {
        value: _name,
        writable: true,
        enumerable: true,
        configurable: false
    });
    Object.defineProperty(this, 'department', {
        get: function () {
            console.log('Retrieving department');
            return _department;
        },
        set: function (newValue) {
            console.log('Updating department value to "' + newValue + '"');
            _department = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(this, 'greeting', {
        value: function () {
            console.log('Hi, I\'m ' + _name + '.');
        },
        enumerable: false,
        configurable: false
    });
}
var user = new User('Sunny', 'Engineering');
console.log(user.department);
user.department = 'Marketing';
user.greeting();
// configurable이 false로 지정되어 있기 때문에 아래 구문은 에러 발생.
Object.defineProperty(user, 'name', {
    enumerable: false
});
delete user.name;
delete user.department;
for (var prop in user) {
    console.log(prop);
}


// 상속.
// 상속은 생성자 함수의 프로퍼티를 활용한다.
// 함수는 공장, 프로토타입은 공장에서 생성된 객체의 명세.
// 클래스와 객체의 설명과 비슷하다.
function User (name, interests) {
    this.name = name;
    this.interests = interests;
}
User.prototype.greeting = function() {
    console.log('Hi, I\'m ' + this.name + '.');
}

// 생성자 객체를 역참조하고 있는 constructor 프로퍼티를 이용해 누가 객체를 생성했는지 확인할 수 있다.
console.log(User.constructor === Function); // true 출력
console.log(User.prototype.constructor === User); // true 출력

var user = new User();
console.log(user.__proto__ === User.prototype); // true 출력

function TeamMember(name, interests, tasks) {
    User.call(this, name, interests);
    this.tasks = tasks;
}
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function() {
    console.log('I\'m ' + this.name + '. Welcome to the team!');
};
TeamMember.prototype.work = function() {
    console.log('I\'m working on ' + this.tasks.length + ' tasks');
};

console.log(User.prototype === TeamMember.prototype) // false 출력
console.log(User.prototype.constructor === TeamMember.prototype.constructor) // true 출력

var member = new TeamMember('Sunny', ['Traveling'], ['Buy three tickets', 'Book a hotel']);
member.greeting(); // I'm Sunny. Welcome to the team! 출력
member.work(); // I'm wokring on 2 tasks 출력

console.log(member instanceof TeamMember); // true 출력
console.log(member instanceof User); // true 출력
console.log(member instanceof Object); // true 출력

User.prototype.eat = function () {
    console.log('What will I have for lunch?');
};
member.eat(); // What will I have for lunch? 출력

// 최상위 객체에 메소드 추가
Object.prototype.move = function() {
    console.log('Every object can move now');
};
member.move(); // 이제 모든 객체가 move를 호출할 수 있다.
var alien = {};
alien.move(); // 이제 모든 객체가 move를 호출할 수 있다.
User.move(); // 생성자 함수 객체도 호출할 수 있다.

console.log(member.__proto__ === TeamMember.prototype); // true 출력
console.log(TeamMember.prototype.__proto__ === User.prototype); // true 출력
console.log(User.prototype.__proto__ === Object.prototype); // true 출력

User.prototype.__proto__ = null;
member.move(); // Uncauthgt TypeError: member.move is not a function 출력
console.log(member instanceof Object); // false 출력

TeamMember.prototype.isPrototypeOf(member); // true 출력

member.hasOwnProperty('name'); // true 출력
member.hasOwnProperty('move'); // false 출력

// 스코프와 클로저 자바스크립트 예제
function bookHotel(city) {
    var avalilableHotel = 'None';
    for (var i = 0; hotels.length; i++) {
        var hotel = hotels[i];
        if (hotel.city === city && hotel.hasRoom) {
            avalilableHotel = hotel.name;
            break;
        }
    }
    // 여기서 i와 hotel은 여전히 접근 가능하다.
    console.log('Checked ' + (i + 1) + ' records(s)'); // Checked 2 record(s) 출력
    console.log('Last checked  ' + hotel.name); // Last checked Hotel B 출력
    {
        function placeOrder() {
            var totalAmount = 200;
            console.log('Order placed to ' + avalilableHotel);
        }
    }
    placeOrder();
    // 접근 불가
    // console.log(totalAmount);
    return avalilableHotel;
}
var hotels =[{name: 'Hotel A', hasRoom: false, city: 'Sanya'}, {name: 'Hotel B', hasRoom: true, city: 'Sanya'}];
console.log(bookHotel('Sanya')); // Hotel B 출력
// 접근 불가
// console.log(availableHotel)

function User(name) {
    console.log('I\'m in "' + this.constructor.name + '" context.');
    this.name = name;
    this.speak = function () {
        console.log(this.name + ' is speaking from "' + this.constructor.name + '" context.');
        var drink = function () {
            console.log('Dringiking in "' + this.constructor.name + '"');
        }
        drink();
    };
    function ask() {
        console.log('Asking from "' + this.constructor.name + '" context.');
        console.log('Who am I? "' + this.name + '"');
    }
    ask();
}
var name = 'Unknown';
var user = new User('Ted');
user.speak();

console.log(Function.prototype.isPrototypeOf(user.speak)); // true 출력
user.speak.hasOwnProperty('apply'); // false 출력
user.speak.__proto__.hasOwnProperty('apply'); // true 출력


// 호이스팅(Hoisting)
travel = 'No plan';
var travel;
console.log(travel); // 출력 결과는 undefined일까?

function travel() {
    console.log('Traveling');
}
travel(); // 출력 결과 Traveling일까?

// 함수 선언을 최상위로 위치시킨다.
function travel() {
    console.log('Traveling');
}
// 변수 선언은 함수 선언 아래에 위치시킨다.
var travel;
travel = 'No plan';

console.log(travel); // No plan 출력
travel(); // Uncaught TypeError: travel is not a function 출력

function workout() {
    goToGym(); // 출력 결과는 무엇일까?
    var goToGym = function() {
        console.log('Workout in Gym A');
    }
    return;
    function goToGym() {
        console.log('Workout in Gym B');
    }
}
workout();

function workout() {
    let gym = 'Gym A';

    const gymStatuses = { 'Gym A': 'open', 'Gym B': 'open', 'Gym C': 'closed' };
    for (let gym in gymStatuses) {
        console.log(gym + ' is ' + gymStatuses[gym]);
    }

    {
        const gym = 'Gym B';
        console.log('Workout in ' + gym);
        // 다음은 throw TypeError를 던질 것이다.
        // gym = 'Gym C';
    }

    console.log('Workout in ' + gym);

    {
        function gym() {
            console.log('Workout in a sepearate gym');
        }
        gym();
    }

    if (gymStatuses[gym] == 'open') {
        let exercises = ['Treadmill', 'Pushup', 'Spinning'];
    }
    // 여기서는 exercises에 접근할 수 없다.
    // console.log(exercises);

    try {
        let gym = 'Gym C';
        console.log('Workout in ' + gym);
        throw new Error('Gym is closed');
    } catch (err) {
        console.log(err);
        let gym = 'Gym D';
        console.log('Workout in ' + gym);
    }
    workout();
}


// 클래스
class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting() {
        console.log('Hi I\'m ' + this.name + '.');
    }
    get interestsCount() {
        return this.interests ? this.interests.length : 0;
    }
}

class TeamMember extends User {
    constructor(name, interests) {
        super(name, interests);
        // 앞의 _(밑줄)은 private 프로퍼티로 간주되어 외부에서 직접 변경될 수 없다.
        // 하지만 자바스크립트에서는 private이 없기 때문에 예를 들면, member._task, member._welcomeText로 접근 가능.
        this._tasks = [];
        this._welcomeText = 'Welcome to the team!';
    }
    greeting() {
        console.log('I\'m ' + this.name + '. ' + this._welcomeText);
    }
    work() {
        console.log('I\'m working on ' + this._tasks.length + ' tasks.');
    }
    set tasks(tasks) {
        let acceptedTasks = [];
        if (tasks.length > TeamMember.maxTasksCapacity()) {
            acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
            console.log('It\'s over max capacity. Can only take two.');
        } else {
            acceptedTasks = tasks;
        }
        this._tasks = this._tasks.concat(acceptedTasks);
    }
    static maxTasksCapacity() {
        return 2;
    }
}

let member = new TeamMember('Sunny', ['Traveling']);
member.greeting(); // I'm Sunny. Welcome to the team! 출력
member.tasks = ['Buy three ticket', 'Book a hotel', 'Rent a car']; // It's over max capacity. Can only take two. 출력
member.work(); // I'm working on 2 tasks. 출력
console.log(member.interestsCount); // 1 출력
member.interestsCount = 2; // 변경 사항은 저장되지 않을 것이다
console.log(member.interestsCount); // 1 출력
console.log(member.tasks); // undefined 출력

// User 클래스에 새로운 메소드를 추가하려면 prototype에 추가해줘야 한다.
User.prototype.eat = function () {
    console.log('What will I have for lunch?');
};
member.eat(); // What will I have for lunch?

User.sleep = function () {
    console.log('Go to sleep');
};
member.sleep() // Uncaught TypeError: member.sleep is not a function 출력
User.sleep(); // Go to sleep 출력

console.log(User.prototype.hasOwnProperty('eat')); // true 출력
console.log(User.hasOwnProperty('eat')) // true 출력


// 강화된 객체 리터럴
const advice = 'Stay hungry. Stay foolish.';

let advisor = {
    __proto__: new TeamMember('Adam', ['Consulting']), // 프로토타입 설정
    advice, // 프로퍼티 축약 표현
    greeting(){ // 메소드 축약 표현
        super.greeting(); // super 메소드 호출
        console.log(this.advice);
    },
    [advice.split('.')[0]]: 'Always learn more' // 계산된 프로퍼티 이름
};

console.log(TeamMember.prototype.isPrototypeOf(advisor)); // true 출력
console.log(advisor instanceof TeamMember) // true 출력

advisor.greeting(); // I'm Adam. Welcome to the team!
                    // Stay hungry. Stay foolish. 출력


// 화살표 함수
const fruits = [{ name: 'apple', price: 100 }, { name: 'orange', price: 80 }, { name: 'banana', price: 120 }];

// 변형 1
// 인자가 없을 때 빈 괄호 세트()가 필요하다.
var constFruits = () => fruits.length;
// ES5 코드
var constFruits = function () {
    return fruits.length
};

// 변형 2
// 하나의 인자가 있을 때 괄호는 생략할 수 있다.
// 표현식의 값은 함수의 반환 값이다.
fruits.filter(fruit => fruit.price > 100);
// ES5 코드
fruits.filter(function (fruit) {
    return fruit.price > 100;
});

// 변형3
// 함수가 객체 리터럴을 반환할 때 괄호로 감싸야 한다.
var inventory = fruits.map(fruit => ({ name: fruit.name, storage: 1 }));
// ES5 코드
var inventory = fruits.map(function (fruit) {
    return {
        name: fruit.name,
        storage: 1
    };
});

// 변형4
// 화살표 함수가 구문들로 이뤄진 본문을 가지고 있고 결과를 반환해야 할 때 return 구문이 필요하다.
var inventory = fruits.map(filter => {
    console.log('Checking ' + fruit.name + ' storage');
    return { name : fruuit.name, storage: 1 };
});
// ES5 코드
var inventory = fruits.map(function (fruit) {
    console.log('Checking ' + fruit.name + ' storage');
    return { name: fruit.name, storage: 1 };
})

var sum = (a, b) => { a + b };
sum(1, 2); // undefined
// 표현식을 사용하면 동작한다.
var sum = (a, b) => a + b;
sum(1, 2); // 3

var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0 },
    checkout() {
        this.items.forEach(item=>{
            this.items.forEach(item=>{
                if(!this.inventory[item]) {
                    console.log('Item ' + item + ' has sold out.');
                }
            })
        })
    }
}
shoppingCart.checkout();

// ES5 코드
var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0},
    checkout() {
        // 컨텍스트를 재할당하고 forEach에 전달한 콜백에서
        // 참조할 수 있도록 클로저를 활용한다.
        var that = this;
        this.items.forEach(function (item) {
            if(!that.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        })
    }
}
shoppingCart.checkout();

var name = 'Unknown';
var greeting = () => {
    console.log('Hi, I\m ' + this.name);
};
greeting.call({ name: 'Sunny' }); // I'm Unknown 출력
greeting.apply({ name: 'Tod' }); // I'm Unknown 출력
var newGreeting = greeting.bind({ name: 'James' });

var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0 },
    checkout: () => {
        this.items.forEach(item => {
            if (!this.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        })
    }
}
shoppingCart.checkout();

class User {
    constructor(name) {
        this.name = name;
    }
}
User.prototype.swim = () => {
    console.log(this.name + ' is swimming');
};
var user = new User();
console.log(user.swim()); // is swimming 출력

const WorkoutPlan = () => {};
// Uncaught TypeError: WorkoutPlan is not a constructor 출력
let workoutPlan = new WorkoutPlan();
console.log(Workout.prototype); // undefined 출력

