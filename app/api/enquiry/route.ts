import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, service, message, newsletter } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const supabase = await getSupabaseServerClient()
    const { data: lead, error: dbError } = await supabase
      .from('leads')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || '',
        company: company || '',
        service: service || 'general',
        message,
        status: 'new'
      })
      .select()
      .single()

    if (dbError) {
      console.error('[v0] Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save enquiry' },
        { status: 500 }
      )
    }

    // Send email notification to Jasmine
    try {
      await resend.emails.send({
        from: 'Bodyshop Solutions <onboarding@resend.dev>',
        to: 'jasmine.dewys@bodyshopsolutions.com.au',
        subject: `New Lead: ${firstName} ${lastName} - ${service}`,
        html: `
          <h2>New Enquiry Received</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
          <hr />
          <p><small>View all leads in your admin dashboard: <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://bodyshopsolutions.com.au'}/admin/leads">Admin Dashboard</a></small></p>
        `
      })
      console.log('[v0] Email sent successfully')
    } catch (emailError) {
      console.error('[v0] Email error:', emailError)
      // Don't fail the request if email fails - lead is already saved
    }

    return NextResponse.json({ success: true, lead })
  } catch (error) {
    console.error('[v0] API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
