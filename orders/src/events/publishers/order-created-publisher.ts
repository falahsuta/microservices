import { Publisher, OrderCreatedEvent, Subjects } from "@ticketdevproj/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
