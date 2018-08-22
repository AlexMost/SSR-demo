const faker = require('faker');
const uuid = require('uuid');
const fs = require('fs');

function generatePost() {
    return {
        id: uuid.v1(),
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        url: faker.internet.url(),
        position: faker.name.jobTitle(),
        country: faker.address.country(),
        city: faker.address.city(),
        talkTitle: faker.lorem.words(),
        talkDescr: faker.lorem.paragraph(),
        company: faker.company.companyName(),
    }
}

function generatePosts(n) {
    const posts = [];
    for(let i = 0; i < n; i++) {
        posts.push(generatePost());
    }
    return posts;
}

const posts = generatePosts(20);

fs.writeFileSync('./shared/posts.json', JSON.stringify(posts));
