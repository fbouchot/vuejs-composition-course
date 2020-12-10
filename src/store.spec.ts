import moment from "moment";
import { createStore, initialState, State, useStore } from "./store";
import { Post } from "./types";


const mockPost: Post = {
    id: 1,
    authorId: 1,
    html: '<p>Hello</p>',
    markdown: 'Hello',
    created: moment(),
    title: 'Test Post'
}


jest.mock( 'axios', () => ({
    get: () => {
        return {
            data: [ mockPost ]
        }
    }
 })
)


describe( 'fetchPosts', () => {
    it('fetches posts and update the store', async () => {
       
        
        const expected: State = {
            ...initialState(),
            posts: {
                ...initialState().posts,
                all: {
                    1: mockPost 
                },
                ids: ['1'],
                loaded: true
            }
        }

        const store = createStore()

        await store.fetchPosts()

        expect(store.getState()).toEqual(expected)
    })
})