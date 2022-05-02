import { createContext } from 'react';

export interface DetailProps {
  name?: string;
  key?: string;
}

export interface UserContextProps {
  infoAlert: boolean;
  setInfoAlert: React.Dispatch<React.SetStateAction<boolean>>;
  details: DetailProps;
  setDetails: React.Dispatch<React.SetStateAction<{}>>;
}

export const UserContext = createContext({} as UserContextProps);
