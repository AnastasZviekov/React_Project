import {z} from 'zod';

export const formSchema = z.object({
    userName: z.string().min(2),
    phone: z.number().positive().int(),
    adress: z.string().min(5, {message: "Min 5 characters required"})
})

