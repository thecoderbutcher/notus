'use server'
import { db } from '@/lib/db'

export const listTeachers = async () => {
    try {
        return await db.teacher.findMany({
            include:{
                person:true
            }
        });
    } catch {
        return "Profesores no encontrados"
    }
}
