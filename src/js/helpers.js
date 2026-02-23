import iziToast from "izitoast";



export function message(typeMessage, textMessage){
    iziToast[typeMessage]({
    title: 'OK',
    message: `${textMessage}`,
    position: "topCenter"
});
}

