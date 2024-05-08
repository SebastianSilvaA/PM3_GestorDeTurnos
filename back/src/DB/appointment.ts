import { IAppointment, Status } from "../types/appointment";
Status


 export const appointments: IAppointment[] = [{
   id: 1,
   date: new Date("1900-100-100"),
   time: "a las 2",
   status: Status.ACTIVE,
   userId: 1
}]