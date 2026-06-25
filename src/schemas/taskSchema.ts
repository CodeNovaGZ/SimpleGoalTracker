 import z from "zod";
 
 export const TaskBase = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().max(500).optional(),
  startDate: z.coerce.date(),
  isCompleted: z.boolean().default(false),
  linkedGoal: z.string().uuid()

});


export const CreateTaskSchema = TaskBase;

export const UpdateTaskSchema = TaskBase.omit({ linkedGoal: true })
  .partial()
  .extend({
    id: z.string().uuid("El ID de la tarea es obligatorio para actualizar"),
  });
