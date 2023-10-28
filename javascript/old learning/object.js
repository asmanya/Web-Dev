// let lecture = 10;
// let section = 3;
// let title = 'JavaScript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'JavaScript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log("You are succesfully enrolled");
//     }
// }

// course.enroll()
// console.log(course)
// console.log(course.lecture)

//factory function

// function createCourse(){
//     return {
//     lecture: 10,
//     section: 3,
//     title: 'JavaScript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log("You are succesfully enrolled");
//     }
// }

// }

// const course =  createCourse();

// course.enroll()

//factory function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const Circle1 = new Circle(1);

