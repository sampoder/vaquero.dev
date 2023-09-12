import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    await prisma.interest.create({
        data: {
            name: req.body.name,
            grade: req.body.grade,
            skillLevel: req.body.skillLevel,
            phoneNumber: req.body.phoneNumber
        }
    });

    res.status(200).json({ success: true });
}