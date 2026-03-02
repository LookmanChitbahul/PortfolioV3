"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData) {
    try {
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const message = formData.get("message") as string

        if (!name || !email || !message) {
            return { error: "DATA_CORRUPT: Missing fields in transmission" }
        }

        // Configure Nodemailer transporter
        // NOTE: To make this work with Gmail, you need to use an "App Password"
        // 1. Go to Google Account > Security > 2-Step Verification > App Passwords
        // 2. Generate a new password and put it in your .env file as EMAIL_PASS
        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this to your preferred email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "lookman1337cc@gmail.com", // Your email address where you want to receive messages
            subject: `[PORTFOLIO_UPLINK] Message from ${name}`,
            text: `
SYSTEM ALERT: New transmission received via Portfolio.

SENDER: ${name}
REPLY-TO: ${email}
            
DECRYPTED_MESSAGE:
${message}
            `,
            html: `
                <div style="font-family: monospace; background-color: #000; color: #00fcfd; padding: 20px; border: 1px solid #bc13fe;">
                    <h2 style="color: #bc13fe; margin-top: 0;">SYSTEM ALERT: NEW_TRANSMISSION</h2>
                    <p style="border-bottom: 1px solid #bc13fe; padding-bottom: 10px;">
                        <strong>SENDER:</strong> ${name}<br/>
                        <strong>REPLY-TO:</strong> <a href="mailto:${email}" style="color: #f50057;">${email}</a>
                    </p>
                    <h3 style="color: #bc13fe;">DECRYPTED_MESSAGE:</h3>
                    <p style="white-space: pre-wrap; color: #fff;">${message}</p>
                    <div style="margin-top: 20px; font-size: 10px; color: gray;">
                        Automated alert from Mercenary_Design_Systems
                    </div>
                </div>
            `,
        }

        await transporter.sendMail(mailOptions)

        return { success: true }
    } catch (error) {
        console.error("Transmission Error:", error)
        return { error: "TRANSMISSION_FAILED: Connection refused by mail server. Check SMTP config." }
    }
}
