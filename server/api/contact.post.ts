import { z } from 'zod';

export default defineEventHandler(async (event) => {
    const schema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z
            .string()
            .min(1, { message: 'Email is required' })
            .email({ message: 'Email is invalid' }),
        message: z.string().min(1, { message: 'Message is required' })
    });

    const body = await useBody<typeof schema>(event);

    const result = schema.safeParse(body);

    if (!result.success) {
        event.res.statusCode = 400;
        return {
            success: false,
            errors: result.error.errors
        };
    }
    const { name, email, message } = result.data;

    const res = await fetch('https://api.sendinblue.com/v3/smtp/email', {
        body: JSON.stringify({
            sender: { email: 'younes.aitali95@gmail.com' },
            to: [
                {
                    email: 'younes.aitali95@gmail.com',
                    name: 'Youness Aitali '
                }
            ],
            subject: 'Contact Form younessaitali.com',
            htmlContent: `<html>
										<body>
										Name: ${name}
										<br>
										Email: ${email}
										<br>
											<p>${message}</p>
										</body>
									</html>`
        }),
        headers: {
            Accept: 'application/json',
            'Api-Key': `${useRuntimeConfig().sendinblueAPi}`,
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });

    return { success: true, data: res };
});
