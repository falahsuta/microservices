import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@ticketdevproj/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
