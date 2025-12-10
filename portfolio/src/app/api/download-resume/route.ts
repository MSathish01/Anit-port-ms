import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { readFileSync } from 'fs';

export async function GET(request: NextRequest) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'Sathish-Resume.pdf');
        const fileBuffer = readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Sathish-Resume.pdf"',
            },
        });
    } catch (error) {
        return new NextResponse('File not found', { status: 404 });
    }
}
