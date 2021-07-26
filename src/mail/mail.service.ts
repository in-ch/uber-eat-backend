import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { EmailVar, MailModuleOptions } from './mail.interfaces';
import got from 'got';
import * as FormData from 'form-data';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {}

  private async sendEmail(subject: string, Template: string, emailVars: EmailVar[]) {
    const form = new FormData();
    form.append('from', `incheolisbest <mailgun@${this.options.domain}>`);
    form.append('to', `sxin2949@naver.com`);
    form.append('subject', subject);
    form.append('Template', Template);
    emailVars.forEach(eVar => form.append(`v:${eVar.key}`, eVar.value));
    try{
      await got(`https://api.mailgun.net/v3/${this.options.domain}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${this.options.apiKey}`,
          ).toString('base64')}`,
        },
        body: form,
      });
    } catch(error){
      console.log(error);
    }
  }

  sendVerificationEmail(email: string, code: string) {
    this.sendEmail('이메일 인증번호', 'asdfasdfasdf', [
      { key: 'code', value: code },
      { key: 'username', value: email },
    ]);
  }
}
