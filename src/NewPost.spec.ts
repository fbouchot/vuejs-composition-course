import { mount } from '@vue/test-utils'
import NewPost from './NewPost.vue'
import { useStore } from './store';
import { Post } from './types';

const mockRoutes = []

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push:(url:string) =>{
            mockRoutes.push(url)
        }
    })
}))

jest.mock('axios', () => ({
    post: (url:string, payload: Post) => {
        return {
        data: payload
        }
    }
}))

describe('NewPost', () => {
    it.only('creates a post and routes', async () => {

        const store = useStore()

        const wrapper = mount(NewPost, {
            global: {
                provide: {
                    store: store
                }
            }
        })

        expect(store.getState().posts.ids).toHaveLength(0)

        await wrapper.find('[data-test="submit-post"]').trigger('click')
        await wrapper.vm.$nextTick()

        expect(store.getState().posts.ids).toHaveLength(1)
        expect(mockRoutes).toEqual(['/'])        
        
    })
})