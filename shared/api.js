import posts from './posts.json';

export async function getPosts() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(posts);
        }, 1000);
    });
}