import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  createNewTourService,
  createNewBookingService,
  createNewCommentService,
  getAllUsers,
  getAllTours,
  getAllComments,
  deleteUserService,
  deleteTourService,
  editUserService,
  editTourService,
  getTopTourHomeService,
  getAllBookings,
} from "../../services/userService";
import { toast } from "react-toastify";
export const fechGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fechGenderSuccess(res.data));
      } else {
        dispatch(fechGenderFailed());
      }
    } catch (error) {
      dispatch(fechGenderFailed());
      console.log("fetchGenderStart error");
    }
  };
};

export const fechGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fechGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAIDED,
});
// ==========positon============
export const fechPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fechPositionSuccess(res.data));
      } else {
        dispatch(fechPositionFailed());
      }
    } catch (error) {
      dispatch(fechPositionFailed());
      console.log("fetchGenderStart error");
    }
  };
};

export const fechPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fechPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAIDED,
});

// ===========role============================
export const fechRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fechRoleSuccess(res.data));
      } else {
        dispatch(fechRoleFailed());
      }
    } catch (error) {
      dispatch(fechRoleFailed());
    }
  };
};
export const fechRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fechRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAIDED,
});

// =============create new usser=========
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("abc check redux create", res);

      if (res && res.errCode === 0) {
        toast.success("Create a new user succeed !");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (error) {
      dispatch(saveUserFailed());
    }
  };
};

export const registerNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log("abc check redux create", res);

      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
        toast.success("Register succeed !");
      } else {
        dispatch(saveUserFailed());
      }
    } catch (error) {
      dispatch(saveUserFailed());
    }
  };
};
export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});
export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAIDED,
});

// ===========fecth all user======================
export const fetchAllUserStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      // let res1 = await getTopDoctorHomeService(3);
      // console.log("resss1 ", res1);
      if (res && res.errCode === 0) {
        dispatch(fetchAllUserSuccess(res.users.reverse()));
      } else {
        dispatch(fetchAllUserFailed());
      }
    } catch (error) {
      dispatch(saveUserFailed());
    }
  };
};
export const fetchAllUserSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USER_SUCCESS,
  users: data,
});
export const fetchAllUserFailed = () => ({
  type: actionTypes.FETCH_ALL_USER_FAIDED,
});

// ==========delete user==============

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      console.log("abc check redux create", res);

      if (res && res.errCode === 0) {
        toast.success("Delete a user succeed !");
        dispatch(deleteASuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(deleteAFailed());
        toast.error("Delete a user error !");
      }
    } catch (error) {
      dispatch(deleteAFailed());
    }
  };
};

export const deleteASuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteAFailed = () => ({
  type: actionTypes.DELETE_USER_FAIDED,
});

// =====edit a user ===============

export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      console.log("abc check redux create", res);

      if (res && res.errCode === 0) {
        toast.success("Update a user succeed !");
        dispatch(editASuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(editAFailed());
        toast.error("edit a user error !");
      }
    } catch (error) {
      dispatch(editAFailed());
    }
  };
};

export const editASuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
export const editAFailed = () => ({
  type: actionTypes.EDIT_USER_FAIDED,
});

// =======fech top doctor============
// export const fetchTopDoctor = () => {
//   return async (dispatch, getState) => {
//     try {
//       let res = await getTopDoctorHomeService("");
//       // console.log("top doctor ", res);
//       if (res && res.errCode === 0) {
//         dispatch({
//           type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
//           dataDoctors: res.data,
//         });
//       } else {
//         dispatch({
//           type: actionTypes.FETCH_TOP_DOCTOR_FAIDED,
//         });
//       }
//     } catch (error) {
//       console.log("Fetch doctor failded", error);
//       dispatch({
//         type: actionTypes.FETCH_TOP_DOCTOR_FAIDED,
//       });
//     }
//   };
// };
// =======fech all doctor============
// export const fetchAllDoctor = () => {
//   return async (dispatch, getState) => {
//     try {
//       let res = await getAllDoctors();
//       // console.log("top doctor ", res);
//       if (res && res.errCode === 0) {
//         dispatch({
//           type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
//           dataDR: res.data,
//         });
//       } else {
//         dispatch({
//           type: actionTypes.FETCH_ALL_DOCTOR_FAIDED,
//         });
//       }
//     } catch (error) {
//       console.log("Fetch doctor failded", error);
//       dispatch({
//         type: actionTypes.FETCH_ALL_DOCTOR_FAIDED,
//       });
//     }
//   };
// };

// =======SAVE infor details doctor============
// export const saveDetailDoctor = (data) => {
//   return async (dispatch, getState) => {
//     try {
//       let res = await saveDetailDoctorService(data);

//       if (res && res.errCode === 0) {
//         toast.success("Save infor detail doctor succeed!!");
//         dispatch({
//           type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
//         });
//       } else {
//         toast.error("Save infor detail doctor error!!");
//         dispatch({
//           type: actionTypes.SAVE_DETAIL_DOCTOR_FAIDED,
//         });
//       }
//     } catch (error) {
//       console.log("SAVE doctor failded", error);
//       toast.error("Save infor detail doctor error!!");
//       dispatch({
//         type: actionTypes.SAVE_DETAIL_DOCTOR_FAIDED,
//       });
//     }
//   };
// };

// =============000000000000000000000 create new tour 0000000000000000000=========
export const createNewTour = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewTourService(data);
      console.log("tour check redux create sau", res);

      if (res && res.errCode === 0) {
        toast.success("Create a new tour succeed !");
        dispatch(saveTourSuccess());
        dispatch(fetchAllTourStart());
      } else {
        dispatch(saveTourFailed());
        toast.error("Create a new tour err !");
      }
    } catch (error) {
      dispatch(saveTourFailed());
      toast.error("Create a new tour err !");
    }
  };
};

export const saveTourSuccess = () => ({
  type: actionTypes.CREATE_TOUR_SUCCESS,
});
export const saveTourFailed = () => ({
  type: actionTypes.CREATE_TOUR_FAIDED,
});

// =============fetchAllTourStart=========
export const fetchAllTourStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllTours("ALL");
      // let res1 = await getTopDoctorHomeService(3);
      // console.log("resss1 ", res1);

      if (res && res.errCode === 0) {
        dispatch(fetchAllTourSuccess(res.tours.reverse()));
      } else {
        dispatch(fetchAllTourFailed());
      }
    } catch (error) {
      dispatch(fetchAllTourFailed());
    }
  };
};
export const fetchAllTourSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_TOUR_SUCCESS,
  tours: data,
});
export const fetchAllTourFailed = () => ({
  type: actionTypes.FETCH_ALL_TOUR_FAIDED,
});
// ===============TOUR EDIT=======================
export const editATour = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editTourService(data);
      console.log("tour check redux create", res);

      if (res && res.errCode === 0) {
        toast.success("Update a tour succeed !");
        dispatch(editATourSuccess());
        dispatch(fetchAllTourStart());
      } else {
        dispatch(editATourFailed());
        toast.error("edit a tour error !");
      }
    } catch (error) {
      dispatch(editATourFailed());
    }
  };
};

export const editATourSuccess = () => ({
  type: actionTypes.EDIT_TOUR_SUCCESS,
});
export const editATourFailed = () => ({
  type: actionTypes.EDIT_TOUR_FAIDED,
});

// ==============DELETE TOUR========
export const deleteATour = (tourId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteTourService(tourId);
      console.log("abc check redux create", res);

      if (res && res.errCode === 0) {
        toast.success("Delete a user succeed !");
        dispatch(deleteATourSuccess());
        dispatch(fetchAllTourStart());
      } else {
        dispatch(deleteATourFailed());
        toast.error("Delete a user error !");
      }
    } catch (error) {
      dispatch(deleteATourFailed());
    }
  };
};

export const deleteATourSuccess = () => ({
  type: actionTypes.DELETE_TOUR_SUCCESS,
});
export const deleteATourFailed = () => ({
  type: actionTypes.DELETE_TOUR_FAIDED,
});

// ============fetch top tour=========
export const fetchTopTour = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopTourHomeService("10");
      console.log("check why : ", res);
      // console.log("top doctor ", res);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_TOUR_SUCCESS,
          dataTours: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_TOUR_FAIDED,
        });
      }
    } catch (error) {
      console.log("Fetch tour failded", error);
      dispatch({
        type: actionTypes.FETCH_TOP_TOUR_FAIDED,
      });
    }
  };
};

// ============comment============
export const createNewComment = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewCommentService(data);
      console.log("comment check redux create sau", res);

      if (res && res.errCode === 0) {
        toast.success("Create a new comment succeed !");
        dispatch(saveCommentSuccess());
        // dispatch(fetchAllCommentStart());
      } else {
        dispatch(saveCommentFailed());
        toast.error("Create a new comment err !");
      }
    } catch (error) {
      dispatch(saveCommentFailed());
      toast.error("Create a new comment err !");
    }
  };
};

export const saveCommentSuccess = () => ({
  type: actionTypes.CREATE_TOUR_SUCCESS,
});
export const saveCommentFailed = () => ({
  type: actionTypes.CREATE_TOUR_FAIDED,
});

// =============fetchAllCommentStart=========

export const fetchAllCommentStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllComments("ALL");
      // let res1 = await getTopDoctorHomeService(3);
      // console.log("resss1 ", res1);
      if (res && res.errCode === 0) {
        dispatch(fetchAllCommentSuccess(res.comments.reverse()));
      } else {
        dispatch(fetchAllCommentFailed());
      }
    } catch (error) {
      dispatch(fetchAllCommentFailed());
    }
  };
};
export const fetchAllCommentSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_COMMENT_SUCCESS,
  comments: data,
});
export const fetchAllCommentFailed = () => ({
  type: actionTypes.FETCH_ALL_COMMENT_FAIDED,
});

// ==================Fetch BOOKING TOUR================================

export const createNewBooking = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewBookingService(data);
      console.log("booking check redux create sau", res);

      if (res && res.errCode === 0) {
        toast.success("Booking  succeed !");
        dispatch(saveBookingSuccess());
      } else {
        dispatch(saveBookingFailed());
        toast.error("Booking err !");
      }
    } catch (error) {
      dispatch(saveBookingFailed());
      toast.error("Booking err !");
    }
  };
};

export const saveBookingSuccess = () => ({
  type: actionTypes.CREATE_TOUR_SUCCESS,
});
export const saveBookingFailed = () => ({
  type: actionTypes.CREATE_TOUR_FAIDED,
});
// ======================Fectch all booking==============
export const fetchAllBookingStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllBookings("ALL");
      // let res1 = await getTopDoctorHomeService(3);
      // console.log("resss1 ", res1);

      if (res && res.errCode === 0) {
        dispatch(fetchAllBookingSuccess(res.bookings.reverse()));
      } else {
        dispatch(fetchAllBookingFailed());
      }
    } catch (error) {
      dispatch(fetchAllBookingFailed());
    }
  };
};
export const fetchAllBookingSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_BOOKING_SUCCESS,
  bookings: data,
});
export const fetchAllBookingFailed = () => ({
  type: actionTypes.FETCH_ALL_BOOKING_FAIDED,
});
