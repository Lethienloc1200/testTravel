import actionTypes from "./actionTypes";
import {
//   getAllCodeService,
//   createNewUserService,
  createNewTourService,
//   getAllUsers,
  getAllTours,
//   deleteUserService,
//   deleteTourService,
//   editUserService,
//   editTourService,
//   getTopDoctorHomeService,
//   getTopTourHomeService,
//   getAllDoctors,
//   saveDetailDoctorService,
} from "../../services/userService";
import { toast } from "react-toastify";

export const createNewTour = (data) => {
    return async (dispatch, getState) => {
      try {
        let res = await createNewTourService(data);
        console.log("tour check redux create sau", res);
  
        if (res && res.errCode === 0) {
          toast.success("Create a new tour succeed !");
          dispatch(saveTourSuccess());
          // dispatch(fetchAllTourStart());
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