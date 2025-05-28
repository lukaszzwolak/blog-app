const initialState = {

    categories: ['Sport', 'News', 'Movies'],

    posts: [
        {
            id: '1',
            title: 'My first post',
            shortDescription: 'This is a short summary of my first blog post.',
            content: 'This is the full content of the first post.',
            publishedDate: new Date('2022-02-01'),
            author: 'Alice Smith',
        },
        {
            id: '2',
            title: 'React Tips & Tricks',
            shortDescription: 'Useful tips for writing better React code.',
            content: 'Let’s explore advanced React patterns and best practices...',
            publishedDate: new Date('2022-02-01'),
            author: 'John Doe',
        },
        {
            id: '3',
            title: 'Why Redux Still Matters',
            shortDescription: 'Is Redux still relevant in 2025?',
            content: 'Redux is often criticized, but let’s look at real use cases...',
            publishedDate: new Date('2022-02-01'),
            author: 'Jane Developer',
        },
    ],
};

export default initialState;
