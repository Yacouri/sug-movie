import { store } from 'react-notifications-component';

export const successMessageNotification = (name) => store.addNotification({
  title: `Thank you ${name} 💖`,
  message: "Your message has been sent successfully.",
  type: "info",
  insert: "right",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 3000,
    onScreen: true,
    pauseOnHover: true
  },
});

export const errorMessageNotification = () => store.addNotification({
  title: `Error 🤖`,
  message: "Oops something went wrong.",
  type: "danger",
  insert: "right",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 3000,
    onScreen: true,
    pauseOnHover: true
  },
});