// app/api/send-email/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Imię, email i wiadomość są wymagane' },
        { status: 400 }
      )
    }

    // Wyślij email
    const { data, error } = await resend.emails.send({
      from: 'MKT Lab <mktlab.biuro@gmail.com>', // Zmień na swój email
      to: ['mktlab.biuro@gmail.com'],
      subject: `Nowa wiadomość z formularza kontaktowego od ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #10b981; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #6b7280; font-size: 14px; }
              .value { font-size: 16px; margin-top: 4px; }
              .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 4px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📩 Nowa wiadomość z MKT Lab</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Imię i nazwisko</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="label">📞 Telefon</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                ${company ? `
                <div class="field">
                  <div class="label">🏢 Firma</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">💬 Wiadomość</div>
                  <div class="message-box">${message}</div>
                </div>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                <p style="color: #6b7280; font-size: 12px; text-align: center;">
                  Wiadomość wysłana z formularza kontaktowego MKT Lab
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Nowa wiadomość z formularza kontaktowego MKT Lab
        
        Imię: ${name}
        Email: ${email}
        ${phone ? `Telefon: ${phone}` : ''}
        ${company ? `Firma: ${company}` : ''}
        
        Wiadomość:
        ${message}
        
        ---
        Wiadomość wysłana z formularza kontaktowego MKT Lab
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Błąd wysyłania emaila:', error)
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    )
  }
}