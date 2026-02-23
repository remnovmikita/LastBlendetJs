import iziToast from "izitoast";
import { refs } from "./refs";



export function message(typeMessage, textMessage){
    iziToast[typeMessage]({
    title: 'OK',
    message: `${textMessage}`,
    position: "topCenter"
});
}
export function showLoader(){
    refs.loader.classList.remove("hidden")
}
export function hideLoader(){
    refs.loader.classList.add("hidden")
}
