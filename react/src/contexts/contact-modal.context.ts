import { createContext } from "react";

const ContactModalContext = createContext({
  open: false,
  setOpen: (open: boolean) => { },
})

export default ContactModalContext