import { Store } from 'react-notifications-component';

export const NotificationApi ={

    AddNotification : (notificationMessage,notificationType)=>{
        return Store.addNotification({
            title: "Billing App",
            message: notificationMessage,
            type: notificationType,
            insert: "top",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 6000,
              onScreen: true
            }
        });
    }
}