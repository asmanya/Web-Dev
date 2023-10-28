let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@hometninja.co,uk',
    location: 'berlin',
    blogs: ['why mac and cheese rule', '10 things to do with marmite'],
    login: function(){
        console.log('the user is logged in')
    },
    logout: function(){
        console.log('The user is logged out')
    },
    logBlogs: function(){
        console.log('This user has written following blogs')
        this.blogs.forEach(blogs =>{
            console.log(blogs)
        })
    }
};

user.logBlogs()

console.log(user);
console.log(user.name);
console.log(user.age);

user.age = 35;
console.log(user.age);

console.log(user['location'])
user['name'] = 'chun-li'

console.log(user['name'])

const key = 'location'
console.log(user[key])

console.log(typeof user);

user.login()

const name2 = 'mario'
name2.toUpperCase()
console.log(name2)

user.logout()
