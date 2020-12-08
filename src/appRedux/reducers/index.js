import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import fetchUsersReducer from "./FetchUsersReducer";
import { checkAuthReducer, registerReducer } from "./registerReducer";
import alert from "./alertReducer";
import fetchLocationsReducer from "./Locations";
import { registerPhoneReducer } from "./registerPhone";
import { verifyPhoneReducer } from "./VerifyPhone";
import fetchGenderReducer from "./Gender";
import fetchArabicEducationReducer from "./arabicEducation";
import fetchquranLevelReducer from "./quranLevel";
import fetchLanguagesReducer from "./Languages";
import fetchAgzaaCountReducer from "./agzaaCount";
import fetchgoalsReducer from "./Goals";
import { signInReducer } from "./signIn";
import { personalDataReducer } from "./personalData";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users: fetchUsersReducer,
    register: registerReducer,
    signIn: signInReducer,
    checkAuth: checkAuthReducer,
    alert: alert,
    locations: fetchLocationsReducer,
    gender: fetchGenderReducer,
    arabicEducation: fetchArabicEducationReducer,
    level: fetchquranLevelReducer,
    languages: fetchLanguagesReducer,
    agzaaCount: fetchAgzaaCountReducer,
    golas: fetchgoalsReducer,
    Phone: registerPhoneReducer,
    verifyData: verifyPhoneReducer,
    userData: personalDataReducer
  });

export default rootReducer;
