import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentsReporitory } from "../repositories/in-memory/in-memory-appointments-reporitory";
import { getFutureDate } from "../tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointment";

describe("Create Appointment", () => {
    it("should be able to create an appointment", () => {
        const appointmentsRepository = new InMemoryAppointmentsReporitory();
        const createAppointment = new CreateAppointment(appointmentsRepository);

        const startsAt = getFutureDate("2022-08-10");
        const endsAt = getFutureDate("2022-08-11");

        expect(
            createAppointment.execute({
                customer: "A",
                startsAt,
                endsAt,
            })
        ).resolves.toBeInstanceOf(Appointment);
    });
});
