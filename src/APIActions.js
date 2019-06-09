export const types = [
  'GET_V2_USERS',
  'POST_V2_USERS',
  'GET_V2_USER_BY_ID',
  'PUT_V2_USER_BY_ID',
  'DELETE_V2_USER_BY_ID',
].reduce((obj, val) => Object.assign(obj, { [val]: val }), {});

export let ajax = {};
export function init(a) { ajax = a; }

export function getV2Users(context, query) {
  return ajax.get('/v2/users', { params: query })
    .then((res) => {
      context.commit(types.GET_V2_USERS, res.data);
      return res.data;
    });
}
export function postV2Users(context, body) {
  return ajax.post('/v2/users', body)
    .then((res) => {
      context.commit(types.POST_V2_USERS, res.data);
      return res.data;
    });
}
export function getV2UserById(context, id) {
  return ajax.get(`/v2/user/${id}`)
    .then((res) => {
      context.commit(types.GET_V2_USER_BY_ID, res.data);
      return res.data;
    });
}
export function putV2UserById(context, id, body) {
  return ajax.put(`/v2/user/${id}`, body)
    .then((res) => {
      context.commit(types.PUT_V2_USER_BY_ID, res.data);
      return res.data;
    });
}
export function deleteV2UserById(context, id) {
  return ajax.delete(`/v2/user/${id}`)
    .then((res) => {
      context.commit(types.DELETE_V2_USER_BY_ID, res.data);
      return res.data;
    });
}

export const mutations = {
  [types.GET_V2_USERS](state, payload) {
    state.users = payload.data;
  },
  [types.GET_V2_USER_BY_ID](state, payload) {
    state.user = payload.data;
  },
  [types.PUT_V2_USER_BY_ID](state, payload) {
    state.user = payload.data;
  },
};
