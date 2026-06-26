// app/api/fb-events/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, data, emails, phones } = body;

    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const accessToken = process.env.FB_PIXEL_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json(
        { error: 'Brak konfiguracji Pixela' },
        { status: 500 }
      );
    }

    // Przygotuj dane dla CAPI
    const payload = {
      data: [
        {
          event_name: eventName || 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: body.url || 'https://mktlab.pl',
          user_data: {
            // Hashuj dane osobowe jeśli są dostępne
            ...(emails && { em: emails.map((email: string) => 
              require('crypto').createHash('sha256').update(email.toLowerCase()).digest('hex')
            ) }),
            ...(phones && { ph: phones.map((phone: string) => 
              require('crypto').createHash('sha256').update(phone).digest('hex')
            ) }),
          },
          custom_data: data || {},
        },
      ],
      access_token: accessToken,
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI error:', result);
      return NextResponse.json(
        { error: 'Błąd wysyłki do Meta' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('CAPI error:', error);
    return NextResponse.json(
      { error: 'Wewnętrzny błąd serwera' },
      { status: 500 }
    );
  }
}