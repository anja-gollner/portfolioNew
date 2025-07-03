import { useEffect } from "react";
import { initContactForm } from "../scripts/contactFormHandler";

export default function ContactFormLoader() {
  useEffect(() => {
    initContactForm();
  }, []);

  return null; 
}
