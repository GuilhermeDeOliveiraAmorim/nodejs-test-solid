import { expect, test } from "vitest";
import { getFutureDate } from "../tests/utils/get-future-date";
import { Appointment } from "./appointment";

test("add appointment", () => {
    const startsAt = getFutureDate("2022-08-10");
    const endsAt = getFutureDate("2022-08-11");

    const appointment = new Appointment({
        customer: "A",
        startsAt,
        endsAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual("A");
});

test("cannot create an appointment with ends date smaller than start date", () => {
    const startsAt = getFutureDate("2022-08-10");
    const endsAt = getFutureDate("2022-08-09");

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
