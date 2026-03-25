import { Router } from "express";

const router = Router();

router.get('/health', (req, res) => {
    return res.json({
        status: "ok",
        message: "Server is running"
    });
});

router.get('/test', (req, res) => {
    console.log('request user id :- ', req.user);
})

export default router;