import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketdevproj/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
