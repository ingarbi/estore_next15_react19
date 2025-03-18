import {z } from "zod"
import { insertProductShema } from "@/lib/validators"

export type Product = z.infer<typeof insertProductShema>&{
    id:string;
    rating: string;
    createdAt: Date;
}