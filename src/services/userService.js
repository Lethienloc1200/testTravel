import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
const getAllTours = (inputId) => {
  return axios.get(`/api/get-all-tours?id=${inputId}`);
};
const getAllComments = (inputId) => {
  // console.log("11222222223333333333 comment from service:", inputId);
  return axios.get(`/api/get-detail-comment-by-id?id=${inputId}`);
  // return axios.get(`/api/get-all-comment?id=${inputId}`);
};

const createNewUserService = (data) => {
  console.log("check data ufrom service:", data);
  return axios.post("/api/create-new-user", data);
};
const createNewTourService = (data) => {
  console.log("check data tour from service:", data);
  return axios.post("/api/create-new-tour", data);
};
const createNewCommentService = (data) => {
  console.log("check data comment from service:", data);
  // return axios.post("/api/create-new-comment", data);
  return axios.post(`/api/post-infor-comments`, data);
};
// const saveDetailDoctorService = (data) => {
//   return axios.post(`/api/post-infor-doctors`, data);
// };
// const getDetailInforDoctor = (inputId) => {
//   return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`);
// };

const deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const deleteTourService = (tourId) => {
  return axios.delete("/api/delete-tour", {
    data: {
      id: tourId,
    },
  });
};

const editUserService = (inputData) => {
  return axios.put("/api/edit-user", inputData);
};
const editTourService = (inputData) => {
  return axios.put("/api/edit-tour", inputData);
};

const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};
const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};
const getTopTourHomeService = (limit) => {
  return axios.get(`/api/top-tour-home?limit=${limit}`);
};
const getAllDoctors = () => {
  return axios.get(`/api/get-all-doctors`);
};
const saveDetailDoctorService = (data) => {
  return axios.post(`/api/post-infor-doctors`, data);
};
const getDetailInforTour = (inputId) => {
  return axios.get(`/api/get-detail-tour-by-id?id=${inputId}`); //đúng nè
  // return axios.get(`/api/get-detail-comment-by-id?id=${inputId}`);
};
const getDetailInforComment = (inputId) => {
  console.log("11222222223333333333 comment from service:", inputId);
  return axios.get(`/api/get-detail-comment-by-id?id=${inputId}`);
};

export {
  handleLoginApi,
  getAllUsers,
  getAllTours,
  getAllComments,
  createNewUserService,
  createNewTourService,
  createNewCommentService,
  deleteUserService,
  deleteTourService,
  editUserService,
  editTourService,
  getAllCodeService,
  getTopDoctorHomeService,
  getTopTourHomeService,
  getAllDoctors,
  saveDetailDoctorService,
  getDetailInforTour,
  getDetailInforComment,
};
