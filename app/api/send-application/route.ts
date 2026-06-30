import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, position, experience, message } = body

    // Walidacja
    if (!name || !email || !position || !experience || !message) {
      return NextResponse.json(
        { error: 'Wypełnij wszystkie pola' },
        { status: 400 }
      )
    }

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Podaj poprawny adres email' },
        { status: 400 }
      )
    }

    // Wyślij email do firmy
    const { data, error } = await resend.emails.send({
      from: `MKT Lab <kontakt@mktlab.pl>`,
      to: ['mktlab.biuro@gmail.com'],
      replyTo: email,
      subject: `Nowa aplikacja o pracę od ${name}`,
      html: `
        <h2>📄 Nowa aplikacja o pracę</h2>
        
        <h3>Dane kandydata:</h3>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <h3>Informacje o aplikacji:</h3>
        <p><strong>Stanowisko:</strong> ${position}</p>
        <p><strong>Doświadczenie:</strong> ${experience}</p>
        
        <h3>Wiadomość:</h3>
        <p>${message}</p>
        
        <hr />
        <p style="color: #666; font-size: 14px;">
          Odpowiedz na tę wiadomość, aby skontaktować się z kandydatem.
        </p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Błąd wysyłki aplikacji' },
        { status: 500 }
      )
    }

    // Wyślij potwierdzenie do kandydata
    await resend.emails.send({
      from: `MKT Lab <kontakt@mktlab.pl>`,
      to: [email],
      subject: 'Potwierdzenie otrzymania aplikacji - MKT Lab',
      html: `
        <h2>Dziękujemy za aplikację! 🙌</h2>
        
        <p>Cześć ${name},</p>
        
        <p>Potwierdzamy otrzymanie Twojej aplikacji na stanowisko <strong>${position}</strong>.</p>
        
        <p>Sprawdzimy Twoje zgłoszenie i skontaktujemy się z Tobą w ciągu 3 dni roboczych.</p>
        
        <h3>Twoje dane:</h3>
        <ul>
          <li><strong>Stanowisko:</strong> ${position}</li>
          <li><strong>Doświadczenie:</strong> ${experience}</li>
        </ul>
        
        <p style="color: #666; font-size: 14px;">
          Jeśli masz pytania, odpowiedz na tę wiadomość.
        </p>
        
        <hr />
        <p style="color: #999; font-size: 12px;">
          MKT Lab - Agencja Marketingu i Wzrostu<br />
          Gdańsk, Polska
        </p>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Aplikacja wysłana pomyślnie' 
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Wewnętrzny błąd serwera' },
      { status: 500 }
    )
  }
}