import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default {
  service,

  getAll(endPoint) {
    return service.get(endPoint);
  },

  createOne(endPoint, data) {
    return service.post(endPoint, data);
  },

  getOne(endPoint, id) {
    return service.get(endPoint + id);
  },

  updateOne(endPoint, data) {
    return service.patch(endPoint, data);
  },

  deleteOne(endPoint, id) {
    return service.delete(endPoint + id);
  },
};
