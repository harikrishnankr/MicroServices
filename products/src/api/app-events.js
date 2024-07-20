import CustomerService from "../services/customer-service";

export default async (app) => {
    const customerService = new CustomerService();

    app.use("/app-events", (req, res, next) => {
        const { payload } = req.body;
        customerService.SubscribeEvents(payload);

        return res.status(200).json(payload);
    });
};
