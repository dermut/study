import User from './users.js';
import * as Roles from './roles.js';
import completeTask from './tasks.js';
import {completedCount} from './tasks.js'

let user = new User('Ted', Roles.User);
completeTask(user);
console.log(`Total completed ${completedCount}`);
// completedCount++;
// 가져온 객체를 변경할 수 있다는 것만 보여준다.
// 하지만 좋은 사례는 아니다.
User.prototype.walk = function() {
    console.log(`${this.name} walks`);
};
user.walk();