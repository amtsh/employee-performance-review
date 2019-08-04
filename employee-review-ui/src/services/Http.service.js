const get = url => {
  return fetch(url);
};

const post = (url, payload) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const put = (url, payload) => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _delete = (url, payload = {}) => {
  return fetch(url, {
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export default { get, post, put, _delete };
