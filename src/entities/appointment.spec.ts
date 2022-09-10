import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test("add appointment", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 2);

    const appointment = new Appointment({
        customer: "A",
        startsAt,
        endsAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual("A");
});

test("cannot create an appointment with ends date smaller than start date", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 2);
    endsAt.setDate(endsAt.getDate() + 1);

    expect(() => {
        return new Appointment({
            customer: "A",
            startsAt,
            endsAt,
        });
    }).toThrow();
});

test("cannot create an appointment with start date before now date", () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() - 1);
    endsAt.setDate(endsAt.getDate() + 1);

    expect(() => {
        return new Appointment({
            customer: "A",
            startsAt,
            endsAt,
        });
    }).toThrow();
});
