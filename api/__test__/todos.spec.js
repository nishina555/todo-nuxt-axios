// import { axios } from '@/plugins/axios/index'
import axiosInstance from '@/api/index'
import TodosApiService from '@/api/todos'
import MockAdapter from 'axios-mock-adapter';

describe('todos', () => {
  let mockAxios;
  beforeEach(() => {
    mockAxios = new MockAdapter(axiosInstance)
  });
  it ('get all todos', async () => {
    mockAxios.onGet('/todos').reply(200, [
      {
        id: 1,
        title: 'Rubyを勉強する',
        is_completed: false
      },
      {
        id: 2,
        title: 'AWSを勉強する',
        is_completed: false
      }
    ]);
    const todos = await TodosApiService.getAll();
    expect(todos.length).toBe(2);
  })
})

// import { createLocalVue, mount } from '@vue/test-utils'
// import Vuex from 'vuex'
// import VueRouter from 'vue-router'

// const localVue = createLocalVue()
// localVue.use(VueRouter)

// const routes = [{ path: '/foo', component: 'Foo' }]

// const router = new VueRouter({
//   routes
// })

// const wrapper = mount(Component, {
//   localVue,
//   router
// })
// expect(wrapper.vm.$route).toBeInstanceOf(Object)


// const localVue = createLocalVue()
// // localVue.use(axios)
// localVue.use(Vuex)
// const wrapper = mount(Component, {
//   localVue
// })
// describe("axios", () => {
//   it("is object", () => {
//     expect(wrapper.vm.$vuex).toBeInstanceOf(Object)
//   })
// })

// describe("updateInputValue", () => {
//   it("call updateInputValue mutations", () => {
//     const commit = jest.fn()
//     const number = 3
//     actions.updateInputValue({ commit }, number)
//     expect(commit).toHaveBeenCalledWith("updateInputValue", { number })
//   })
// })
