import { Appointment } from "../entities/appointment";

interface AppointmentsRepository {
    create(appointment: Appointment): Promise<void>;
    findOverlappingAppointment(
        startsAt: Date,
        endsAt: Date
    ): Promise<Appointment | null>;
}

export { AppointmentsRepository };
