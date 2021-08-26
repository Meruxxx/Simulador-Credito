import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';
import { environment } from './../../../environments/environment.prod';

type EmailMessage = {
  to: string;
  params: Record<string, string>;
};

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    init(environment.email.userID);
  }

  send(message: EmailMessage): Promise<EmailJSResponseStatus> {
    const newMessage = {
      to: message.to,
      ...message.params,
    };

    return emailjs.send(
      environment.email.serviceID,
      environment.email.templateID,
      newMessage,
      environment.email.userID
    );
  }
}
