import { createContext } from 'react';
const ModalContext = createContext({
  modal: '',
  setModal: () => {},
});
export default ModalContext;
