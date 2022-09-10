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

test("cannot create an appointment with ends date smaller than starts date", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() - 1);

    expect(() => {
        return new Appointment({
            customer: "A",
            startsAt,
            endsAt,
        });
    }).toThrow();
});
