export { default as sendOTPAPI } from './sendOTPAPI';
export { default as validateOTPAPI } from './validateOTPAPI';
export { default as getSessionDataAPI } from './getSessionData';
export { default as getCollegeListAPI } from './getCollegeListAPI';
export { default as getSkillsListAPI } from './getSkillsListAPI';
export { default as userRegisterDetailsAPI } from './userRegisterDetailsAPI';
export { default as retryOTPAPI } from './retryOTPAPI';

import { GetCollegeListReturn } from './getCollegeListAPI';
import { GetSkillsListReturn } from './getSkillsListAPI';

export type { GetCollegeListReturn, GetSkillsListReturn };
