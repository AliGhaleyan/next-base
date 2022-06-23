export interface User {
    id: string;
    name: string;
    mobile: string;
    is_admin: boolean;
    profile?: any
}

export interface UserBrief {
    id: string;
    displayName: string;
    profilePictureId: string;
}

export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other"
}
