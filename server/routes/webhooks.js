import Router from "koa-router";

import WebhooksController from "../Http/Controllers/Api/WebhooksController";

const webhooksRouter = new Router({ prefix: "/api/webhooks" });

webhooksRouter.post("/order-created", WebhooksController.orderCreated);
webhooksRouter.post("/app-uninstalled", WebhooksController.appUninstalled);

export default webhooksRouter;
