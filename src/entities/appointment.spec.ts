import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test("add appointment", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() + 1);

    const appointment = new Appointment({
        customer: "A",
        startsAt,
        endsAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual("A");
});
