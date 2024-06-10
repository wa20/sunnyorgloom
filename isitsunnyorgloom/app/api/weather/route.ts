// pages/api/weather.ts

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    console.log('lat', lat);
    console.log('lon', lon);

    if (!lat || !lon) {
        return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
    }

    try {

    const ApiKey = process.env.WEATHER_API_KEY;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`)
    const data = await res.json();

    return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        return NextResponse.json({ error: 'Error fetching weather' }, { status: 500 });
    }
   
}

