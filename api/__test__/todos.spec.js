// import { axios } from '@/plugins/axios/index'
import axiosInstance from '@/api/index'
import TodosApiService from '@/api/todos'
import MockAdapter from 'axios-mock-adapter';

describe('getAll', () => {
  let mockAxios;
  beforeEach(() => {
    mockAxios = new MockAdapter(axiosInstance)
  });
  it ('取得できること', async () => {
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
});

describe('post', () => {
  let mockAxios;
  beforeEach(() => {
    mockAxios = new MockAdapter(axiosInstance)
  });
  it ('postが実行されること', async () => {
    const data = {
      title: '新しくやること',
      is_completed: false
    }
    mockAxios.onPost('/todos').reply(201, {
      id: 1,
      ...data,
    });
    // Todos.postでresponseをreturnすればresponseとmoackのdataを比較検証できる
    // Todos.postは成功時voidを返す実装になっているので、postが叩かれたことだけ確認する
    await TodosApiService.post(data);
    expect(mockAxios.history.post.length).toBe(1);
  });
});